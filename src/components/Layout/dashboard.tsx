import Link from "next/link";
import { Container, Content } from "./styles";

export function Dashboard({ children }: any) {
  return (
    <>
      <Container>
        <Content>
          <div className="titles">
            <h1>Olá, Thiago Fragata</h1>
            <p>Seja bem-vindo!</p>
          </div>

          <button className="btn-exit">
            <i className="ri-logout-box-line" />
            Sair
          </button>
        </Content>
      </Container>
      <Content>
        <ul>
          <li>
            <Link href="/empresa">
              <a>
                <i className="ri-store-fill ri-2x" />
                Empresa
              </a>
            </Link>
          </li>
          <li>
            <Link href="/sistema">
              <a>
                <i className="ri-download-cloud-2-fill ri-2x" />
                Sistema
              </a>
            </Link>
          </li>
          <li>
            <Link href="/plano">
              <a>
                <i className="ri-money-dollar-circle-fill ri-2x" />
                Plano
              </a>
            </Link>
          </li>
          <li>
            <Link href="/relatorio">
              <a>
                <i className="ri-booklet-fill ri-2x" />
                Relatórios
              </a>
            </Link>
          </li>
          <li>
            <Link href="/suporte">
              <a>
                <i className="ri-customer-service-2-fill ri-2x" />
                Suporte
              </a>
            </Link>
          </li>
          <li>
            <Link href="/configuracoes">
              <a>
                <i className="ri-settings-fill ri-2x" />
                Configurações
              </a>
            </Link>
          </li>
        </ul>
      </Content>
      <Content>{children}</Content>
    </>
  );
}
