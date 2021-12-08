import Head from "next/head";
import type { AppProps } from "next/app";
import { NotifiProvider } from "store/NotifContext";
import Header from "../components/Header";
import Notification from "components/Notification";
import GlobalStyles from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotifiProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Notification />
      <GlobalStyles />
    </NotifiProvider>
  );
}
export default MyApp;
