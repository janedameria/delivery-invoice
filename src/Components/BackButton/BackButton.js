import { BackButtonStyled } from "./Styles";

const BackButton = ({ text, onClick, absolute = true }) => {
  if (absolute) {
    return (
      <BackButtonStyled absolute onClick={onClick}>
        {text}
      </BackButtonStyled>
    );
  }
  return <BackButtonStyled onClick={onClick}>{text}</BackButtonStyled>;
};

export default BackButton;
