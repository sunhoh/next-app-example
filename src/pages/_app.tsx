import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";
import Layout from "@/layout/Layout";
import theme from "@/styles/theme";
import GlobalStyle from "@/types/style/GlovalStyle";

export const reportWebVitals = (metrics: any) => console.log(metrics);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          {GlobalStyle}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
