import Link from "next/link";
import { Dashboard } from "../components/Layout/dashboard";
import { ButtonLink, ContentDefault, TitlePage } from "../styles/commonStyles";

export default function EditProfile() {
  return (
    <Dashboard title="Editar">
      <ContentDefault>
        <TitlePage>
          <h1>Editar</h1>
          <p>Atualize seus dados</p>
        </TitlePage>
        <main>formulário de edição</main>
        <footer>
          <ButtonLink typeButton="success">
            <Link href="/configuracoes">
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
