import { Link } from "react-scroll";
import LinkNext from "next/link";

import { Ul } from "./styles";

export function RightNav({ open }: any) {
  return (
    <Ul open={open}>
      <li>
        <Link
          activeClass="active"
          to="recursos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a>Recursos</a>
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="preco"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a>Preços</a>
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a>Fale conosco</a>
        </Link>
      </li>
    </Ul>
  );
}
