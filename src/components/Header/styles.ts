import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradient);

  > div {
    display: flex;
    align-items: center;

    section {
      flex: 1;

      h1 {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.5rem;
        color: var(--white);

        margin-bottom: 1rem;
      }

      p {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--white);
        margin-bottom: 2rem;
      }
    }

    div {
      flex: 1;
      transform: translateY(4rem);
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;

    > div {
      display: flex;
      align-items: center;

      section {
        flex: 1;

        h1 {
          font-weight: 700;
          font-size: 2rem;
          line-height: 2.2rem;
          color: var(--white);
        }

        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.5rem;
          color: var(--white);
          margin-bottom: 2rem;
        }
      }

      div {
        flex: 1;
        transform: translateY(4rem);
      }
    }
  }

  @media (max-width: 426px) {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      section {
        margin-top: 2rem;

        h1 {
          font-weight: 700;
          font-size: 2rem;
          line-height: 2.5rem;
          color: var(--white);

          margin-bottom: 1rem;
        }

        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.5rem;
          color: var(--white);
          margin-bottom: 2rem;
        }
      }

      div {
        transform: translateY(3rem);
      }
    }
  }

  @media (max-width: 376px) {
    > div {
      div {
        transform: translateY(2.8rem);
      }
    }
  }

  @media (max-width: 326px) {
    > div {
      div {
        transform: translateY(2.5rem);
      }
    }
  }
`;
