import styled from "styled-components";

export const SummaryContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40%;
  margin-top: 2rem;
  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  width: 100%;
  color: #a8a8a8;
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => (props.green ? "#1BD97B" : " #000")};
`;

export const BigParagraph = styled.p`
  font-size: 1.5rem;
  color: #ff8a00;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
