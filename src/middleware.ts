import type { NextRequest } from "next/server";
import { createLocaleRedirect, pathnameHasLocale } from "@/i18n";

export async function middleware(request: NextRequest) {
  if (!pathnameHasLocale(request)) {
    return createLocaleRedirect(request);
  }
}

export const config = {
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};