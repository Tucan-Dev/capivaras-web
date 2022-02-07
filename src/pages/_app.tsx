import type { AppProps } from "next/app";

import { AuthProvider } from "../contexts/authContext";

import { GlobalStyle } from "../styles/globals";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
export default MyApp;
