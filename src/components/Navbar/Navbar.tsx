import { Burger } from "./Burger";
import { Container, Nav } from "./styles";

import logo from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <Container>
      <Nav id="navbar">
        <Link href="/">
          <a>
            <span className="logo">Capivaras Delivery</span>
          </a>
        </Link>

        <Burger />
      </Nav>
    </Container>
  );
}
