import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './globals.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/kute.js/1.6.2/kute.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/kute.js/1.6.2/kute-svg.min.js"></script>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
