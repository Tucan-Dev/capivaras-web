import Link from "next/link";
import { Dashboard } from "../../../components/Layout/dashboard";
import { ContentDefault, TitlePage } from "../../../styles/commonStyles";

export default function Report() {
  return (
    <Dashboard title="Relatórios">
      <ContentDefault>
        <TitlePage>
          <h1>Relatórios</h1>
          <p>Veja algumas estatísticas da sua empresa</p>
        </TitlePage>
        <main>Exibição de relatórios</main>
      </ContentDefault>
    </Dashboard>
  );
}
