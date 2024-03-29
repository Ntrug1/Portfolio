import "@styles/globals.css";
import ScrollObserver from "@utils/contexts/scroll-observer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;
