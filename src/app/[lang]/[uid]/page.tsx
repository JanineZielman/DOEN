import { Metadata } from "next";
import { notFound } from "next/navigation";
import { reverseLocaleLookup } from "@/i18n";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Menu from "../../../components/menu"

type Params = { lang: string; uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang, uid } = await params;
  const client = createClient();
  const page = await client.getByUID("chapter", uid, { lang: reverseLocaleLookup(lang)}).catch(() => notFound());
  const menu = await client.getByType('menu', { lang: reverseLocaleLookup(lang)}).catch(() => notFound())

  return (
    <div className={`chapter ${page.uid}`}>
      <Menu menu={menu.results[0].data}/>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang, uid } = await params;
  const client = createClient();
  const page = await client.getByUID("chapter", uid, { lang: reverseLocaleLookup(lang)}).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  // Get all pages from Prismic, except the homepage.
  const pages = await client.getAllByType("chapter");

  return pages.map((page) => ({ uid: page.uid }));
}
