import Link from "next/link";
import { Dashboard } from "../components/Layout/dashboard";
import { ButtonLink, ContentDefault, TitlePage } from "../styles/commonStyles";

export default function EditCompany() {
  return (
    <Dashboard title="Editar">
      <ContentDefault>
        <TitlePage>
          <h1>Editar</h1>
          <p>Atualize os dados de sua empresa</p>
        </TitlePage>
        <main>formulário de edição</main>
        <footer>
          <ButtonLink typeButton="success">
            <Link href="/empresa">
              <a>
                <i className="ri-save-line" />
                Salvar
              </a>
            </Link>
          </ButtonLink>
        </footer>
      </ContentDefault>
    </Dashboard>
  );
}
