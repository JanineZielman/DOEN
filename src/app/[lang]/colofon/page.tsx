import { Metadata } from "next";
import { notFound } from "next/navigation";
import { reverseLocaleLookup } from "@/i18n";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import LeftMenu from "../../../components/left-menu";

type Params = { lang: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  const client = createClient();
  const page = await client.getByUID("page", "colofon", {
    lang: reverseLocaleLookup(lang),
  }).catch(() => notFound());
  const menu = await client.getByType('menu', { lang: reverseLocaleLookup(lang)}).catch(() => notFound())

  return (
    <div className={`chapter ${page.uid}`}>
      <LeftMenu menu={menu.results[0].data}/>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata( {

}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "colofon").catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}
