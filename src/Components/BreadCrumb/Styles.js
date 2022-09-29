import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffae6;
  width: 50%;
  padding-bottom: 0.8rem;
  top: 1rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const UL = styled.ul`
  list-style: none;
  display: flex;
`;

export const Span = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.active ? "#ff8a00" : "#fee1bd")};
  color: ${(props) => (props.active ? "#fff" : "#ff4a00")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    height: 12px;
    width: 12px;
  }
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: #ff8a00;
  margin-left: 0.5rem;
`;

export const LI = styled.li`
  display: flex;
  margin: 0 3rem;

  @media (max-width: 1024px) {
    margin: 0 0.5rem;
    font-size: 0.7rem;
  }
`;
