import Image from "next/image";
import { ContainerDefault } from "../../styles/commonStyles";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <ContainerDefault>
        <section>
          <h1>A Plataforma completa para gestão do seu delivery</h1>
          <p>Modernize seu atendimento com a integração ao whatsapp</p>
        </section>

        <Image
          className="background"
          src="/modelo.png"
          alt="Picture of the author"
          width={1260}
          height={839}
        />
      </ContainerDefault>
    </Container>
  );
}
