import React from "react";
import Head from "next/head";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tucan Bird</title>
      </Head>
      <Navbar />
      <Header />

    </>
  );
}
