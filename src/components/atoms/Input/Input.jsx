import { StyledInputWrapper, StyledIcon, StyledInput } from "./styles";
import { useTheme } from "styled-components";
import { useRef, useEffect } from "react";

const Input = (props) => {
  const theme = useTheme();

  const { type, value, setValue, icon, placeholder, color } = props;

  const inputWrapperRef = useRef();
  const inputRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleOutsideInputClick = (e) => {
      e.stopPropagation();

      if (!inputWrapperRef.current.contains(e.target)) {
        inputWrapperRef.current.style.boxShadow = "none";
        inputWrapperRef.current.style.borderColor = theme.palette.weUse.black;
        icon ? (iconRef.current.style.color = theme.palette.default.dark) : {};
      }
    };

    document.addEventListener("click", handleOutsideInputClick);

    return () => {
      document.removeEventListener("click", handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current.style.boxShadow = `0px 0px 1px 3px ${
      color ? theme.palette[color].light : theme.palette.default.light
    }`;
    inputWrapperRef.current.style.borderColor = theme.palette.default.dark;
    inputRef.current.focus();
    icon ? (iconRef.current.style.color = theme.palette.dark.main) : {};
  };

  return (
    <StyledInputWrapper ref={inputWrapperRef} {...props} onClick={handleClick}>
      {icon && <StyledIcon ref={iconRef}>{icon}</StyledIcon>}
      <StyledInput
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        color="text"
        placeholder={placeholder}
        autoFocus
      />
    </StyledInputWrapper>
  );
};

export default Input;
