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

export const Form = styled.form`
  padding: 1rem 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--paragraph);
      margin-bottom: 0.5rem;
      margin-left: 1rem;
    }

    input {
      height: 3rem;
    }

    input,
    textarea {
      padding: 0.5rem 1rem;

      border: 1px solid var(--paragraph);
      border-radius: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      color: var(--danger);
    }
  }

  button {
    width: 100%;
    padding: 0.5rem 1rem;

    height: 3rem;

    border: none;
    border-radius: 0.5rem;

    background-color: var(--primary);
    color: var(--white);

    font-size: 1rem;
    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &.secondary {
      background-color: var(--white);
      border: 1px solid var(--gray-100);
      color: var(--gray-100);
    }
  }
`;
