import React from "react";

import Image from "next/image";

import { ContainerDefault } from "../../styles/commonStyles";
import { Content } from "./styles";

import { Title } from "../Title";

import ImgCardapio from "../../assets/images/cardapio.svg";
import ImgEstabelecimento from "../../assets/images/estabelecimento.svg";
import ImgCelular from "../../assets/images/celular.svg";

export function Main() {
  return (
    <ContainerDefault id="recursos">
      <Title title="Tudo o que você precisa para fazer seu delivery crescer" />

      <Content>
        <Image
          src={ImgCardapio}
          alt="cardápio digital"
          height={300}
          width={300}
        />

        <div className="text">
          <h1>Cardápio online</h1>
          <p>- Facilite e agilize a escolha do seu pedido</p>
          <p>- Reduza erros no atendimento </p>
          <p>- Altere as informações do seu cardápio a qualquer momento </p>
          <p>
            - Crie itens por dia/horário, adicionais, cupons de desconto, etc...
          </p>
        </div>
      </Content>

      <Content className="reversed">
        <Image
          src={ImgEstabelecimento}
          alt="estabelecimento"
          height={340}
          width={300}
        />

        <div className="text">
          <h1>Cadastre seu estabelecimento</h1>
          <p>- Cadastre seu estabelecimento para ser visto.</p>
          <p>
            - Cadastre seus produtos informe seus horários de atendimento,
            defina as taxas de entrega e formas de pagamento aceitas.{" "}
          </p>
        </div>
      </Content>

      <Content>
        <Image src={ImgCelular} alt="celular" height={350} width={300} />

        <div className="text">
          <h1>Atendimento automatizado</h1>
          <p>- Seu cliente é atendido em segundos.</p>
          <p>
            - Interpreta e responde as principais dúvidas dos clientes no
            whatsapp.
          </p>
        </div>
      </Content>
    </ContainerDefault>
  );
}
