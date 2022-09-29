import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
`;

export const InputContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.8rem;
    text-align: right;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  height: ${(props) => props.big && "120px"};

  ${(props) => {
    switch (props.mode) {
      case "error":
        return css`
          border: 2px solid #ff8a00;
        `;
      case "success":
        return css`
          border: 2px solid #1bd97b;
        `;

      default:
        return css`
          border: 2px solid #ccc;
        `;
    }
  }}
`;
