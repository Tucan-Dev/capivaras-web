import { Burger } from "./Burger";
import { Container, Nav } from "./styles";

import logo from "../../assets/logo.svg";
import Image from "next/image";

export function Navbar() {
  return (
    <Container>
      <Nav id="navbar">
        {/* <Image src={logo} alt="Logotipo Tucadev" width={30} height={60} /> */}
        <span className="logo">Tucan Bird Delivery</span>
        <Burger />
      </Nav>
    </Container>
  );
}
