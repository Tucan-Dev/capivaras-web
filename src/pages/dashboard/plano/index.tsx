import Link from "next/link";
import { Dashboard } from "../../../components/Layout/dashboard";
import {
  ContentDefault,
  TitlePage,
  ButtonLink,
} from "../../../styles/commonStyles";
import { Cards } from "../../../styles/pages/pagesDash";

export default function Plan() {
  return (
    <Dashboard title="Plano">
      <ContentDefault>
        <TitlePage>
          <h1>Plano</h1>
          <p>Dados de sua assinatura</p>
        </TitlePage>
        <Cards>
          <div className="card">
            <p>Data de Ativação</p>
            <h2>15 nov 2021</h2>
          </div>
          <div className="card">
            <p>Válido até</p>
            <h2>15 dez 2021</h2>
          </div>
          <div className="card">
            <p>Dias restantes</p>
            <h2 className="success">30 dias</h2>
          </div>
        </Cards>
        <footer>
          <ButtonLink typeButton="success">
            <Link href="/dashboard/plano">
              <a>
                <i className="ri-file-upload-line" />
                Upgrade de plano
              </a>
            </Link>
          </ButtonLink>

          <ButtonLink typeButton="gray-50">
            <Link href="/dashboard/plano">
              <a>
                <i className="ri-close-line" />
                Cancelamento de plano
              </a>
            </Link>
          </ButtonLink>
        </footer>
      </ContentDefault>
    </Dashboard>
  );
}
