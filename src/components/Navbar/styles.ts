import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--white);

  padding: 0.5rem 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 200;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1144px;
  height: 3rem;

  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--title);

  .logo {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
`;

interface UlProps {
  open: boolean;
}

export const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 100;

  li {
    padding: 1rem 1.5rem;
    cursor: pointer;

    a {
      color: var(--title);
      transition: color 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--white);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 18px 10px;
      a {
        color: var(--title);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export const StyledBurger = styled.div<UlProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 120;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#FF3737" : "#FD391E")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(47deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-46deg)" : "rotate(0)")};
    }
  }
`;
