import { useEffect } from "react";
import Router from "next/router";

export default function Loading() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/home");
    }
  });

  return <h1>carregando ...</h1>;
}
