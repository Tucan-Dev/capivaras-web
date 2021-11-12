import React from "react";
import Image from "next/image";

import { Title } from "../Title";

import ImgIron from "../../assets/images/ironMedal.svg";
import ImgSilver from "../../assets/images/silverMedal.svg";
import ImgGold from "../../assets/images/goldMedal.svg";

import { ButtonCard, ContainerDefault } from "../../styles/commonStyles";
import { CardPrice, ContainerCard } from "./styles";

export function Price() {
  return (
    <ContainerDefault id="preco">
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
            <li>Atendimento automatizado</li>
            <li className="disabled">Chatbot de atendimento no whatsapp</li>
            <li className="disabled">Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>79,</strong>99
            </span>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>

        <CardPrice>
          <Image src={ImgSilver} alt="" height={62} width={65} />

          <h2>Plano Prata</h2>

          <ul>
            <li>Gestão de pedidos</li>
            <li>Relatórios de vendas</li>
            <li>Atendimento automatizado</li>
            <li>Chatbot de atendimento no whatsapp</li>
            <li className="disabled">Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>149,</strong>99
            </span>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>

        <CardPrice>
          <Image src={ImgGold} alt="" height={62} width={65} />

          <h2>Plano Ouro</h2>

          <ul>
            <li>Gestão de pedidos</li>
            <li>Relatórios de vendas</li>
            <li>Atendimento automatizado</li>
            <li>Chatbot de atendimento no whatsapp</li>
            <li>Múltiplos atendentes</li>
          </ul>

          <section>
            <span>
              R$ <strong>499,</strong>99
            </span>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>
      </ContainerCard>
    </ContainerDefault>
  );
}
