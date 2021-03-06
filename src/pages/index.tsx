import React from "react";
import Head from "next/head";

import { Navbar } from "../components/Navbar/Navbar";
import { Main } from "../components/Main";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Price } from "../components/Prices";
import { Container } from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Capivaras Delivery</title>
      </Head>

      <Navbar />
      <Header />
      <Main />
      <Price />
      <Contact />
      <Footer />
    </Container>
  );
}
