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
`;
