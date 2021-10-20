import Image from "next/image";
import {
  ButtonCallToAction,
  ContainerDefault,
} from "../../styles/commonStyles";
import { Container } from "./styles";

import ImgBackground from "../../assets/images/barraHeader.svg";
import React from "react";

export function Header() {
  return (
    <Container>
      <ContainerDefault>
        <section>
          <h1>A Plataforma completa para gestão do seu delivery</h1>
          <p>Modernize seu atendimento com a integração ao whatsapp</p>
          <ButtonCallToAction>Conheça agora!</ButtonCallToAction>
        </section>

        <Image
          className="background"
          src="/modelo.png"
          alt="Picture of the author"
          objectFit="cover"
          width={1600}
          height={1400}
        />
      </ContainerDefault>

      <Image
        src={ImgBackground}
        alt="Picture of the author"
        layout="responsive"
        objectFit="cover"
      />
    </Container>
  );
}
