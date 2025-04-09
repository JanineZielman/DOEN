import { Metadata } from "next";
import { notFound } from "next/navigation";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import LeftMenu from "../../components/left-menu";


export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "colofon").catch(() => notFound());

  return (
    <div className={`chapter ${page.uid}`}>
      <LeftMenu/>
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
