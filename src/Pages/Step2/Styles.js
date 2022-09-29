import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-around;
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
