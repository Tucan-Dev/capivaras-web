import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradient);
  width: 100%;

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1144px;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
    margin-top: 4rem;

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
      transform: translateY(3rem);
    }
  }

  @media (max-width: 768px) {
    div.content {
      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 1144px;
      width: 100%;
      padding: 1rem;
      margin: 0 auto;
      margin-top: 4rem;

      section {
        flex: 1;

        h1 {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 2rem;
          color: var(--white);

          margin-bottom: 1rem;
        }

        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1rem;
          color: var(--white);
          margin-bottom: 2rem;
        }
      }

      div {
        flex: 1;
        transform: translateY(3rem);
      }
    }
  }

  @media (max-width: 568px) {
    div.content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      max-width: 1144px;
      width: 100%;
      padding: 1rem;
      margin: 0 auto;
      margin-top: 24rem;

      section {
        flex: 1;

        h1 {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 2rem;
          color: var(--white);

          margin-bottom: 1rem;
        }

        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1rem;
          color: var(--white);
          margin-bottom: 2rem;
        }
      }

      div {
        flex: 1;
        transform: translateY(3rem);
      }
    }
  }
`;
