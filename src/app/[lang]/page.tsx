import { type Metadata } from "next";
import { reverseLocaleLookup } from "@/i18n";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import LeftMenu from "../../components/left-menu"

type Params = { lang: string };

export default async function Home({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  const client = createClient();
  const home = await client.getByUID("page", "home", {
    lang: reverseLocaleLookup(lang),
  });
  const menu = await client.getByType('menu', { lang: reverseLocaleLookup(lang)})

  // <SliceZone> renders the page's slices.
  return (
    <div className="home">
      <LeftMenu menu={menu.results[0].data}/>
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params;
  const client = createClient();
  const home = await client.getByUID("page", "home", {
    lang: reverseLocaleLookup(lang),
  });

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
