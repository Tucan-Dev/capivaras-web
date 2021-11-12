import React from "react";
import { Fade } from "react-awesome-reveal";

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

      <Fade cascade delay={100}>
        <Content>
          <Image
            src={ImgCardapio}
            alt="cardápio digital"
            height={300}
            width={300}
          />

          <div className="text">
            <h1>Sistema de gestão completo</h1>
            <p>- Painel de pedidos centralizadoo</p>
            <p>- Cadastro de clientes com múltiplos telefones e endereços.</p>
            <p>- Impressão do pedido por entrega, retirada ou consumo local.</p>
            <p>
              - Filtro de pedidos por status, data, bairro e forma de pagamento.
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
              defina as taxas de entrega e formas de pagamento aceitas.
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
      </Fade>
    </ContainerDefault>
  );
}
