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
    <ContainerDefault>
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

          <h2>Plano Capivara Ferro</h2>

          <ul>
            <li>Pedidos Online</li>
            <li>Receba via whatsapp</li>
            <li>Taxa de entrega</li>
            <li>Produtos ilimitados</li>
          </ul>

          <section>
            <span>
              R$ <strong>79,</strong>99
            </span>
            <p>mensal</p>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>

        <CardPrice>
          <Image src={ImgSilver} alt="" height={62} width={65} />

          <h2>Plano Capivara Prata</h2>

          <ul>
            <li>Pedidos Online</li>
            <li>Receba via whatsapp</li>
            <li>Taxa de entrega</li>
            <li>Produtos ilimitados</li>
          </ul>

          <section>
            <span>
              R$ <strong>149,</strong>99
            </span>
            <p>trimensal</p>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>

        <CardPrice>
          <Image src={ImgGold} alt="" height={62} width={65} />

          <h2>Plano Capivara Ouro</h2>

          <ul>
            <li>Pedidos Online</li>
            <li>Receba via whatsapp</li>
            <li>Taxa de entrega</li>
            <li>Produtos ilimitados</li>
          </ul>

          <section>
            <span>
              R$ <strong>499,</strong>99
            </span>

            <p>anual</p>
          </section>

          <ButtonCard>Comprar</ButtonCard>
        </CardPrice>
      </ContainerCard>
    </ContainerDefault>
  );
}
