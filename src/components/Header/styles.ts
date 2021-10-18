import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradient);

  > div {
    display: flex;
    align-items: center;
    /* min-height: 100vh; */

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
        color: var(--gray-50);
      }
    }

    div {
      flex: 1;
      transform: translateY(15px);
    }
  }
`;
