import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  margin-bottom: 4rem;

  div.text {
    flex: 1;

    h1 {
      color: var(--title);
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }

    p {
      color: var(--paragraph);
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
  }

  &.reversed {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    margin-bottom: 4rem;

    &.reversed {
      flex-direction: column;
    }
  }
  @media (max-width: 426px) {
    div.text {
      flex: 1;

      h1 {
        color: var(--title);
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 3rem;
      }

      p {
        color: var(--paragraph);
        font-size: 1.2rem;
        font-weight: 300;
        margin-bottom: 2rem;
      }
    }
  }
`;
