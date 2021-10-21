import React from "react";
import Head from "next/head";

import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar/Navbar";

import { Container } from "./styles";
import { About } from "../../components/About";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tucan Bird</title>
      </Head>
      <Navbar />
      <Header />
      <Main />
      <About />
    </Container>
  );
}
