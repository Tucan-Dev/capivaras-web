import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "../Title";

import ImgIron from "../../assets/images/ironMedal.svg";
import ImgSilver from "../../assets/images/silverMedal.svg";
import ImgGold from "../../assets/images/goldMedal.svg";

import { ButtonCard, ContainerDefault } from "../../styles/commonStyles";
import { CardPrice, Container, ContainerCard } from "./styles";
import { Fade } from "react-awesome-reveal";

export function Price() {
  return (
    <Container id="preco">
      <Title title="Nossos preços são incrivelmente acessíveis" />

      <ContainerCard>
        <CardPrice>
          <Image
            className="Images"
            src={ImgIron}
            alt=""
            height={62}
            width={65}
          />

          <h2>Plano Bronze</h2>

          <ul>
            <li>Gestão de pedidos</li>
            <li>Relatórios de vendas</li>
            <li className="disabled">Chatbot de atendimento no whatsapp</li>
            <li className="disabled">Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>79,</strong>99
            </span>
          </section>

          <Link href="https://wa.me/559293129358?text=Olá,%20eu%20tenho%20interesse%20em%20contratar%20o%20PLANO%20BRONZE">
            <a target="_blank">
              <ButtonCard>Contratar</ButtonCard>
            </a>
          </Link>
        </CardPrice>

        <CardPrice>
          <Image src={ImgSilver} alt="" height={62} width={65} />

          <h2>Plano Prata</h2>

          <ul>
            <li>Gestão de pedidos</li>
            <li>Relatórios de vendas</li>
            <li>Chatbot de atendimento no whatsapp</li>
            <li className="disabled">Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>99,</strong>99
            </span>
          </section>

          <Link href="https://wa.me/559293129358?text=Olá,%20eu%20tenho%20interesse%20em%20contratar%20o%20PLANO%20PRATA">
            <a target="_blank">
              <ButtonCard>Contratar</ButtonCard>
            </a>
          </Link>
        </CardPrice>

        <CardPrice>
          <Image src={ImgGold} alt="" height={62} width={65} />

          <h2>Plano Ouro</h2>

          <ul>
            <li>Gestão de pedidos</li>
            <li>Relatórios de vendas</li>
            <li>Chatbot de atendimento no whatsapp</li>
            <li>Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>119,</strong>99
            </span>
          </section>

          <Link href="https://wa.me/559293129358?text=Olá,%20eu%20tenho%20interesse%20em%20contratar%20o%20PLANO%20OURO">
            <a target="_blank">
              <ButtonCard>Contratar</ButtonCard>
            </a>
          </Link>
        </CardPrice>
      </ContainerCard>
    </Container>
  );
}
