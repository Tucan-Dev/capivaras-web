import Link from "next/link";
import { Dashboard } from "../components/Layout/dashboard";
import { ButtonLink, ContentDefault, TitlePage } from "../styles/commonStyles";

export default function Support() {
  return (
    <Dashboard title="Suporte">
      <ContentDefault>
        <TitlePage>
          <h1>Suporte</h1>
          <p>Entre em contato com a gente se existir qualquer dúvida</p>
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
