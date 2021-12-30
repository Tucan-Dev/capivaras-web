import styled from "styled-components";

export const Container = styled.div`
  background-color: #263238;

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;

    section {
      flex: 1;

      h1 {
        color: var(--white);

        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      p {
        color: var(--gray-50);

        font-size: 1.2rem;
        font-weight: 300;
        line-height: 2rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      display: flex;
      align-items: center;
      gap: 4rem;

      section {
        flex: 1;

        h1 {
          color: var(--white);

          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        p {
          color: var(--gray-50);

          font-size: 1.2rem;
          font-weight: 300;
          line-height: 2rem;
          margin-bottom: 0.8rem;
        }
      }
    }
  }

  @media (max-width: 426px) {
    > div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 4rem;

      section {
        flex: 1;

        h1 {
          color: var(--white);

          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        p {
          color: var(--gray-50);

          font-size: 1.2rem;
          font-weight: 300;
          line-height: 2rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
