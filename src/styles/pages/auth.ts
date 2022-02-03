import styled from "styled-components";

export const ContainerAuth = styled.div`
  background: linear-gradient(180deg, #fd391e 0%, #ff553e 100%);
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;
`;

export const ContentAuth = styled.div`
  width: 525px;
  /* min-height: 500px; */

  background: var(--white);
  padding: 3rem 2rem;
  border-radius: 1rem;

  header {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    h1 {
      font-weight: bold;
      font-size: 2rem;

      color: var(--title);

      margin-bottom: 0.5rem;
    }

    p {
      font-weight: normal;
      font-size: 1.25rem;

      color: var(--paragraph);

      a {
        color: var(--primary);

        transition: 0.2s ease-out;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  form {
    p {
      margin-top: 0.5rem;
      font-weight: 400;
    }
    button {
      margin-top: 1.5rem;
    }

    a {
      display: flex;
      width: 160px;

      margin-left: auto;

      font-size: 1rem;
      text-align: right;

      color: var(--paragraph);

      transition: 0.2s ease-out;

      &:hover {
        color: var(--info);
      }
    }
  }
`;
