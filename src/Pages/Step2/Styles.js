import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ErrorMessage = styled.span`
  color: #ff8a00;
  font-size: 0.8rem;
`;

export const SubContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 60%;
  > * {
    padding: 1rem;
  }
`;
