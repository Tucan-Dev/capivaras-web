import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto;
  max-width: 1144px;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 2rem;

  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const CardPrice = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding: 1.5rem;

  .disabled {
    color: var(--gray-50);
  }

  > div {
    margin: 0 auto;
    width: 100%;
  }

  h2 {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    color: var(--title);

    margin-top: 1rem;
  }

  ul {
    padding: 0.5rem 1rem;
    list-style: disc;

    li {
      margin-top: 1rem;

      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.2rem;
      color: var(--paragraph);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 0 3rem;

    span {
      font-family: Roboto, sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.2rem;
      color: var(--title);

      strong {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2rem;
      }
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      color: var(--paragraph);
    }
  }
`;
