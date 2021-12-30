import styled from "styled-components";

export const ContainerDefault = styled.div`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;

  padding: 1rem;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 0 auto 3rem;
  width: 100%;
  max-width: 770px;

  text-align: center;

  h1 {
    color: var(--title);
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 426px) {
    h1 {
      color: var(--title);
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
export const ButtonCallToAction = styled.button`
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  color: var(--white);
  font-size: 1rem;
  font-weight: 500;

  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Splash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: var(--primary);
`;

export const ButtonCard = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--primary);

  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  width: 100%;

  padding: 1rem 2rem;

  font-size: 1rem;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentDefault = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  footer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const TitlePage = styled.header`
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: var(--title);
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--paragraph);
  }
`;

interface ButtonProps {
  typeButton?: string;
}

export const ButtonLink = styled.div<ButtonProps>`
  min-width: 200px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.8rem 1rem;
    background-color: ${(props) =>
      "var(--" + props.typeButton + ")" || "var(--success)"};
    border: 0;
    border-radius: 1rem;

    color: var(--white);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
