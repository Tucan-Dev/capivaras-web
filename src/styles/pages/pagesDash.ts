import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 6rem;

  div.info {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;

      color: var(--background);
    }

    h2 {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 1.5rem;

      color: var(--title);
    }
  }
`;

export const Cards = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;

  div.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    background: rgba(196, 196, 196, 0.25);
    border-radius: 1rem;

    padding: 1.5rem;

    h2 {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 2rem;
      color: var(--alert);

      &.success {
        color: var(--success);
      }
    }

    p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      color: var(--gray-100);
    }
  }
`;
