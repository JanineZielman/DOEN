import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/**
 * A record of locales mapped to a version displayed in URLs. The first entry is
 * used as the default locale.
 */
const LOCALES = {
  "nl-nl": "nl-nl",
  "en-us": "en-us",
} as const;

/** Creates a redirect with an auto-detected locale prepended to the URL. */
export function createLocaleRedirect(request: NextRequest): Response {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();
  const locales = Object.keys(LOCALES);
  const locale = match(languages, locales, locales[0]) as keyof typeof LOCALES;

  const redirectUrl = new URL(request.nextUrl.origin);
  redirectUrl.pathname = `/${LOCALES[locale]}${request.nextUrl.pathname}`;

  return Response.redirect(redirectUrl);
}

/** Determines if a pathname has a locale as its first segment. */
export function pathnameHasLocale(request: NextRequest): boolean {
  const regexp = new RegExp(`^/(${Object.values(LOCALES).join("|")})(\/|$)`);
  return regexp.test(request.nextUrl.pathname);
}

/**
 * Returns the full locale of a given locale. It returns `undefined` if the
 * locale is not in the master list.
 */
export function reverseLocaleLookup(locale: string): string | undefined {
  return Object.entries(LOCALES).find(([value]) => value === locale)?.[0];
}
