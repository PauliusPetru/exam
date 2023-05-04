import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375em;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
  background-color: white;
  display: flex;
  gap: 0.75em;
`;

export const StyledIcon = styled.span`
  color: #d0d0d0;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.dark.main};
  &::placeholder {
    color: #d0d0d0;
  }
  width: 100%;
`;
