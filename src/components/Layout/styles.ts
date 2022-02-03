import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(180deg, #fd391e 0%, #ff553e 100%);
  height: 16rem;
  padding: 1rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1400px;
  width: 100%;

  div.titles {
    font-family: "Roboto", sans-serif;
    color: var(--white);

    h1 {
      font-weight: 700;
      font-size: 2rem;
    }

    p {
      font-weight: 300;
      font-size: 1.5rem;
    }
  }

  button.btn-exit {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    background: transparent;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;

    color: var(--white);
  }

  ul {
    width: 100%;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transform: translateY(-50%);

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      height: 180px;
      width: 180px;
      padding: 1rem;

      border-radius: 50%;

      background: var(--white);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

      font-weight: 500;
      font-size: 1.5rem;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }
`;

export const ContentPage = styled.div`
  margin: 0 auto;
  max-width: 1400px;

  width: 100%;
  min-height: 50vh;

  padding: 2rem;

  background: var(--white);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;
