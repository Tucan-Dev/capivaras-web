import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2rem auto 0;
  max-width: 1144px;

  > div.image {
    display: flex;
    margin-bottom: -0.5rem;
  }

  @media (max-width: 426px) {
    display: flex;
    justify-content: center;

    margin: 2rem auto 0;
    max-width: 1144px;

    > div.image {
      display: none;
    }
  }
`;
