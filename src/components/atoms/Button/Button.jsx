import { StyledButton } from "./styles";

const Button = ({ action, text, width, margin, outline, color }) => {
  return (
    <StyledButton
      width={width}
      margin={margin}
      outline={outline}
      color={color}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
