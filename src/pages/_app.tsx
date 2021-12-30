import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
