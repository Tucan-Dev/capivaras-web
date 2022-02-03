import Link from "next/link";
import { Dashboard } from "../../../components/Layout/dashboard";
import {
  ContentDefault,
  TitlePage,
  ButtonLink,
} from "../../../styles/commonStyles";

export default function System() {
  return (
    <Dashboard title="Sistema">
      <ContentDefault>
        <TitlePage>
          <h1>Sistema</h1>
          <p>Baixe nosso sistema</p>
        </TitlePage>
        <main>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <br />

          <h3>Versão: 0.0.1</h3>
        </main>
        <footer>
          <ButtonLink typeButton="success">
            <Link href="/dashboard/sistema">
              <a>
                <i className="ri-download-2-line" />
                Download
              </a>
            </Link>
          </ButtonLink>
        </footer>
      </ContentDefault>
    </Dashboard>
  );
}
