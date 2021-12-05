import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyles from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
export default MyApp;
