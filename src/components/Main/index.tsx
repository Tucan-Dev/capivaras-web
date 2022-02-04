import React from "react";

import Image from "next/image";

import { Container, Content } from "./styles";

import { Title } from "../Title";

import modelo_2 from "../../assets/images/modelo_2.png";

import icon_1 from "../../assets/images/icon_1.png";
import icon_2 from "../../assets/images/icon_2.png";
import icon_3 from "../../assets/images/icon_3.png";
import icon_4 from "../../assets/images/icon_4.png";

export function Main() {
  return (
    <Container id="recursos">
      <Title title="Tudo o que você precisa para fazer seu delivery crescer" />
      <Content>
        <section>
          <div>
            <Image
              src={icon_1}
              alt="Picture of the author"
              objectFit="contain"
            />
            <h2>Sistema de gestão completo</h2>
            <ul>
              <li>Painel de pedidos centralizado</li>
              <li>
                Filtro de pedidos por status, data, bairro e forma de pagamento
              </li>
              <li>Cadastro de clientes com múltiplos telefones e endereços</li>
              <li>
                Impressão do pedido por entrega, retirada ou consumo local
              </li>
            </ul>
          </div>

          <div>
            <Image
              src={icon_2}
              alt="Picture of the author"
              objectFit="contain"
            />
            <h2>Cadastre seu estabelecimento</h2>
            <ul>
              <li>Cadastre seu estabelecimento para ser visto.</li>
              <li>
                Cadastre seus produtos informe seus horários de atendimento,
                defina as taxas de entrega e formas de pagamento aceitas.
              </li>
            </ul>
          </div>

          <div>
            <Image
              src={icon_3}
              alt="Picture of the author"
              objectFit="contain"
            />
            <h2>Atendimento automatizado</h2>
            <ul>
              <li>Seu cliente é atendido em segundos.</li>
              <li>
                Interpreta e responde as principais dúvidas dos clientes no
                whatsapp.
              </li>
            </ul>
          </div>

          <div>
            <Image
              src={icon_4}
              alt="Picture of the author"
              objectFit="contain"
            />
            <h2>Múltiplos atendentes</h2>
            <ul>
              <li>Gerencie seus cargos</li>
              <li>Controle de permissão de cargos</li>
              <li>Controle de acesso por cargos</li>
            </ul>
          </div>
        </section>

        <div className="image">
          <Image
            src={modelo_2}
            alt="Picture of the author"
            objectFit="contain"
          />
        </div>
      </Content>
    </Container>
  );
}
