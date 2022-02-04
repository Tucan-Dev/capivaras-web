import styled from "styled-components";

export const Container = styled.div`
  background: #f3f3f3;

  padding: 2rem 0 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1144px;

  gap: 4rem;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > div {
      border: 2px solid var(--primary);
      border-radius: 1rem;
      padding: 1.75rem;

      h2 {
        margin-top: 1rem;

        font-weight: 500;
        font-size: 1rem;
        line-height: 19px;

        color: var(--title);
      }

      ul {
        margin-top: 1rem;

        li {
          margin-top: 0.5rem;

          font-weight: 400;
          font-size: 1rem;

          color: var(--paragraph);
        }
      }
    }
  }

  @media (max-width: 426px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem auto;
    max-width: 1144px;

    padding: 0 6rem;

    gap: 4rem;

    > div.image {
      display: none;
    }

    section {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 400px;

      margin: 0 auto;
      gap: 1rem;

      > div {
        border: 2px solid var(--primary);
        border-radius: 1rem;
        padding: 1.75rem;

        h2 {
          margin-top: 1rem;

          font-weight: 500;
          font-size: 1rem;
          line-height: 19px;

          color: var(--title);
        }

        ul {
          margin-top: 1rem;

          li {
            margin-top: 0.5rem;

            font-weight: 400;
            font-size: 1rem;

            color: var(--paragraph);
          }
        }
      }
    }
  }
`;
