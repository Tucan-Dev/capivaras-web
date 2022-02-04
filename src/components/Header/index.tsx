import Image from "next/image";

import { Container } from "./styles";

import ImgHeader from "../../assets/images/modelo_1.png";

import React from "react";
import { Link } from "react-scroll";

export function Header() {
  return (
    <Container id="home">
      <div className="content">
        <div className="image">
          <Image
            src={ImgHeader}
            alt="Picture of the author"
            objectFit="contain"
            width={600}
            height={750}
          />
        </div>

        <section>
          <h1>Uma nova perspectiva de sistema para o seu delivery</h1>
          <p>
            Modernize seu atendimento com o nosso sistema completo para o
            controle, gestão e atendimento do seu estabelecimento
          </p>

          <Link
            activeClass="active"
            to="recursos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a>Saiba mais!</a>
          </Link>
        </section>
      </div>
    </Container>
  );
}
