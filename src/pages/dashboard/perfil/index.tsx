import { GetServerSideProps } from "next";
import Link from "next/link";

import { useContext, useEffect } from "react";

import { parseCookies } from "nookies";

import { api } from "../../../services/api";
import { getAPIClient } from "../../../services/axios";

import { AuthContext } from "../../../contexts/authContext";

import {
  ContentDefault,
  TitlePage,
  Column,
  ButtonLink,
} from "../../../styles/commonStyles";
import { Main } from "../../../styles/pages/pagesDash";
import { Dashboard } from "../../../components/Layout/dashboard";

export default function Settings() {
  // useEffect(() => {
  //   api
  //     .get("/user/1")
  //     .then((res: any) => {
  //       console.log(res);
  //     })
  //     .catch((err: any) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <Dashboard title="Configurações">
      <ContentDefault>
        <TitlePage>
          <h1>Configurações</h1>
          <p>Edite seus dados de informação</p>
        </TitlePage>
        <Main>
          <Column>
            <div className="info">
              <h1>Nome:</h1>
              <h2>Thiago Henrique Fragata</h2>
            </div>
            <div className="info">
              <h1>Apelido:</h1>
              <h2>Fragata</h2>
            </div>
            <div className="info">
              <h1>Número de contato 01:</h1>
              <h2>(92) 99243-0969</h2>
            </div>
            <div className="info">
              <h1>Número de contato 02:</h1>
              <h2>(92) 99243-0970</h2>
            </div>
          </Column>
        </Main>

        <footer>
          <ButtonLink typeButton="alert">
            <Link href="/dashboard/perfil/editar">
              <a>
                <i className="ri-pencil-fill" />
                Editar
              </a>
            </Link>
          </ButtonLink>
        </footer>
      </ContentDefault>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["capivaras_token"]: token } = parseCookies(ctx);

  const apiClient = getAPIClient(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
