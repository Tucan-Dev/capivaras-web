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
          <h1>Seu cliente atendido em segundos</h1>
          <p>
            Nosso sistema automatiza o seu WhatsApp e cuida do atendimento do
            início ao fim.
          </p>
          <p>
            Seu cliente é atendido em segundos, nosso sistema automático
            responde às principais dúvidas, informa todo o andamento do pedido
            pelo WhatsApp e finaliza a conversa pedindo uma avaliação do seu
            serviço.{" "}
          </p>
        </section>
        <Image src={ImgRobot} alt="ChatBot" width={370} height={430} />
      </ContainerDefault>
    </Container>
  );
}
