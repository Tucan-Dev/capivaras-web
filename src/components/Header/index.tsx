import Image from "next/image";
import { ButtonCallToAction } from "../../styles/commonStyles";

import { Container } from "./styles";

import ImgHeader from "../../assets/images/header.svg";

import React from "react";
import { Link } from "react-scroll";

export function Header() {
  return (
    <Container id="home">
      <div className="content">
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
          src={ImgHeader}
          alt="Picture of the author"
          objectFit="cover"
          layout="responsive"
        />
      </div>
    </Container>
  );
}
