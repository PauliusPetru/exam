import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.weUse.main};
  border-radius: 0.375em;
  outline: none;
  padding: calc(0.5em - 1px) 1em;

  background-color: ${(props) =>
    props.outline
      ? props.theme.palette.light.main
      : props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.weUse.main};
  color: ${(props) =>
    props.outline && props.color
      ? props.theme.palette[props.color].main
      : props.outline
      ? props.theme.palette.dark.main
      : props.theme.palette.light.main};
  font-size: 1rem;
  line-height: 1.5;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.default.main};
    color: ${(props) =>
      props.color
        ? props.theme.palette.light.main
        : props.theme.palette.weUse.main};
    opacity: ${(props) => (props.outline ? 1 : 0.9)};
  }
`;
