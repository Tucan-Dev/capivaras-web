import Image from "next/image";
import {
  ButtonCallToAction,
  ContainerDefault,
} from "../../styles/commonStyles";

import { Container } from "./styles";

import ImgBackground from "../../assets/images/barraHeader.svg";

import React from "react";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";

export function Header() {
  return (
    <Slide direction="down" delay={150}>
      <Container id="home">
        <ContainerDefault>
          <section>
            <h1>
              O sistema completo para o controle e atendimento do seu delivery
            </h1>
            <p>Modernize seu atendimento com o nosso sistema</p>

            <ButtonCallToAction>
              <Link
                activeClass="active"
                to="recursos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a>Conheça agora!</a>
              </Link>
            </ButtonCallToAction>
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
    </Slide>
  );
}
