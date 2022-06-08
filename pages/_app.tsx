import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo, NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "EN_US",
          url: "https://oonye-kebayoran.vercel.app/",
          site_name: "Oonye Kebayoran",
          images: [
            {
              alt: "Logo",
              url: "/OonyeLogo.png",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        title="Oonye Kebayoran"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/OonyeLogo.png",
          },
        ]}
        description="Oonye kebayoran - Pisang Goreng Kriuk & Es Kopi"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
