import styled from "styled-components";

export const ContainerDefault = styled.div`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;

  padding: 1rem;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 0 auto 3rem;
  width: 100%;
  max-width: 770px;

  text-align: center;

  h1 {
    color: var(--title);
    font-size: 2rem;
    font-weight: 700;
  }
`;
export const ButtonCallToAction = styled.button`
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 1rem;

  padding: 0.5rem 1rem;

  color: var(--white);
  font-size: 1rem;
  font-weight: 500;

  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
