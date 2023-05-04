import { useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import TEXTS from "../../../shared/texts/TEXTS";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {
  StyledForm,
  StyledFormControl,
  StyledLabel,
  StyledErrorMessage,
} from "./styles";

const Form = ({ inputs, handleSubmit, buttonTitle, footer }) => {
  const language = useRecoilValue(languageState);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {inputs.map((input) => (
        <StyledFormControl key={input.label}>
          <StyledLabel>{input.label}</StyledLabel>
          <Input
            type={input.type}
            icon={input.icon}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
          />
          {input.errorMessage && (
            <StyledErrorMessage>{input.errorMessage}</StyledErrorMessage>
          )}
        </StyledFormControl>
      ))}
      <StyledFormControl style={{ textAlign: "center" }}>
        <Button action={() => {}} text={buttonTitle} type="submit" />
        {footer && footer}
      </StyledFormControl>
    </StyledForm>
  );
};

export default Form;
