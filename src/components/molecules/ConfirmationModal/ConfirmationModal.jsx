import React from "react";
import Button from "../../atoms/Button";
import { StyledActionWrapper } from "./style";
import Modal from "../Modal";
import Input from "../../atoms/Input";
import { useState, useEffect } from "react";

const ConfirmationModal = ({
  title,
  showInput,
  mainActionTitle,
  mainAction,
  mainActionColor,
  secondaryActionTitle,
  secondaryAction,
  secondaryActionColor,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleEnterKeyPress = (e) => {
      if (e.keyCode === 13 && showInput) {
        console.log(input);
        mainAction(input);
      }
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [input]);

  return (
    <Modal onClose={secondaryAction}>
      {title}
      {showInput && (
        <Input
          style={{ marginTop: "0.75em" }}
          value={input}
          setValue={setInput}
        />
      )}
      <StyledActionWrapper>
        <Button
          action={() => {
            mainAction(input);
          }}
          text={mainActionTitle}
          color={mainActionColor ? mainActionColor : "weUse"}
        />
        <Button
          action={secondaryAction}
          text={secondaryActionTitle}
          color={secondaryActionColor ? secondaryActionColor : "danger"}
        />
      </StyledActionWrapper>
    </Modal>
  );
};

export default ConfirmationModal;
