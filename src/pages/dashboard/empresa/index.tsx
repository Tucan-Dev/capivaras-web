import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { Dashboard } from "../../../components/Layout/dashboard";
import { getAPIClient } from "../../../services/axios";
import {
  ContentDefault,
  TitlePage,
  Column,
  ButtonLink,
} from "../../../styles/commonStyles";
import { Main } from "../../../styles/pages/pagesDash";

export default function Company() {
  // alert(token);
  return (
    <Dashboard title="Empresa">
      <ContentDefault>
        <TitlePage>
          <h1>Empresa</h1>
          <p>Visualizar informações</p>
        </TitlePage>
        <Main>
          <Column>
            <div className="info">
              <h1>Nome da empresa:</h1>
              <h2>TucanDev</h2>
            </div>
            <div className="info">
              <h1>Número de contato 01:</h1>
              <h2>(92) 99243-0969</h2>
            </div>
            <div className="info">
              <h1>Número de contato 02:</h1>
              <h2>(92) 99243-0969</h2>
            </div>
            <div className="info">
              <h1>Categoria:</h1>
              <h2>Tecnologia</h2>
            </div>
          </Column>
          <Column>
            <div className="info">
              <h1>CEP:</h1>
              <h2>691000-000</h2>
            </div>
            <div className="info">
              <h1>Endereço:</h1>
              <h2>R. Francisco Fiuza</h2>
            </div>
            <div className="info">
              <h1>Cidade:</h1>
              <h2>Parintins</h2>
            </div>
            <div className="info">
              <h1>Estado:</h1>
              <h2>Paraná</h2>
            </div>
          </Column>
        </Main>

        <footer>
          <ButtonLink typeButton="alert">
            <Link href="/dashboard/empresa/editar">
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
