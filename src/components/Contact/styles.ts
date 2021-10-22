import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    padding: 1rem 0;
    width: 100%;
    max-width: 570px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      label {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--paragraph);
        margin-bottom: 0.5rem;
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
    }
  }
`;
