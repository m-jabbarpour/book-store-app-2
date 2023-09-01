import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";
import "swiper/css/bundle";
import "@/styles/swiper.css";
import "@/styles/pagination.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Head>
            <link rel="icon" href="/logos/logo.svg" />
          </Head>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
