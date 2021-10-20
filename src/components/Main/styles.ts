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
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }

    p {
      color: var(--paragraph);
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
  }

  &.reversed {
    flex-direction: row-reverse;
  }
`;
