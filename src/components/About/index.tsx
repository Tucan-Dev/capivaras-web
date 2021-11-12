import React from "react";
import Image from "next/image";

import { Container } from "./styles";

import ImgRobot from "../../assets/images/robot.svg";
import { ContainerDefault } from "../../styles/commonStyles";

export function About() {
  return (
    <Container>
      <ContainerDefault>
        <section>
          <h1>Atendimento automatizado no whatsapp</h1>
          <p>Não deixe seus clientes esperando!!!</p>
          <p>
            Automatize seu atendimento com nossa solução de integração com
            whatsapp.
          </p>
          <p>
            Nosso sistema responde seus clientes em tempo real e envia o pedido
            direto para o painel de pedidos.
          </p>
        </section>
        <Image src={ImgRobot} alt="ChatBot" width={370} height={430} />
      </ContainerDefault>
    </Container>
  );
}
