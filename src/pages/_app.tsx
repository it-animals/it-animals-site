import type { AppProps } from "next/app";
import { GlobalStyle } from "../ui/styles/_global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
