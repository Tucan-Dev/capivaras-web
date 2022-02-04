import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 5rem auto 0;

    > div {
      margin-bottom: -5px;
    }

    section {
      flex: 1;

      margin-right: 12rem;
      margin-left: 4rem;

      h1 {
        font-weight: 700;
        font-size: 4rem;

        color: var(--title);

        margin-bottom: 1rem;
      }

      p {
        font-weight: 300;
        font-size: 1.8rem;
        color: var(--paragraph);

        margin-bottom: 2rem;
      }

      a {
        cursor: pointer;

        display: inline-block;
        background: var(--primary);
        color: var(--white);

        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 1px;

        padding: 0.75rem 2rem;
        border-radius: 1rem;
      }
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
