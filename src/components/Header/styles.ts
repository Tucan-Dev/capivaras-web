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

  @media (max-width: 568px) {
    div.content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      width: 100%;
      max-width: 700px;

      margin: 5rem auto 2rem;

      > div.image {
        display: none;
      }

      section {
        flex: 1;

        margin-right: 0;
        margin-left: 0;

        text-align: center;

        h1 {
          font-weight: 700;
          font-size: 3rem;

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
  }
`;
