import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Button from "../../atoms/Button";
import { languageState } from "../../../shared/state/atoms";
import { StyledTodo, StyledP, StyledActionWrapper } from "./style";
import TEXTS from "../../../shared/texts/TEXTS";
import client, { API } from "../../../shared/api/api";
import Input from "../../atoms/Input";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const TodoCard = ({ task, onAction }) => {
  const language = useRecoilValue(languageState);
  const [input, setInput] = useState(task.text);
  const [isEditing, setisEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const isCompleted = task.status === "completed";

  async function mainAction() {
    if (isEditing) {
      setisEditing(false);
      textUpdateAction();
      return;
    }
    const newStatus = task.status === "active" ? "completed" : "active";

    const updatedTask = { ...task, status: newStatus };
    await client.put(API.baseUrl.todos + updatedTask.id, updatedTask);
    onAction();
  }

  async function textUpdateAction() {
    const updatedTask = { ...task, text: input };
    await client.put(API.baseUrl.todos + updatedTask.id, updatedTask);
    onAction();
  }

  function secondaryAction() {
    if (isEditing) {
      setisEditing(false);
      setInput(task.text);
      return;
    }
    setShowDeleteModal(true);
  }

  async function deleteAction() {
    await client.delete(API.baseUrl.todos + task.id);
    setShowDeleteModal(false);
    onAction();
  }

  return (
    <StyledTodo isCompleted={isCompleted}>
      {isEditing ? (
        <Input value={input} setValue={setInput} />
      ) : (
        <StyledP>{task.text}</StyledP>
      )}
      <StyledActionWrapper>
        <Button
          action={mainAction}
          text={
            isEditing
              ? TEXTS.page.todoListPage.save[language]
              : isCompleted
              ? TEXTS.page.todoListPage.activate[language]
              : TEXTS.page.todoListPage.complete[language]
          }
          color={isCompleted ? "weUse" : "weUse"}
        />
        {!isEditing && (
          <Button
            action={() => {
              setisEditing(true);
            }}
            text={TEXTS.page.todoListPage.edit[language]}
            color="warning"
          />
        )}
        <Button
          action={secondaryAction}
          text={
            isEditing
              ? TEXTS.page.todoListPage.cancel[language]
              : TEXTS.page.todoListPage.delete[language]
          }
          color="danger"
        />
      </StyledActionWrapper>
      {showDeleteModal && (
        <ConfirmationModal
          title={`${TEXTS.page.todoListPage.deleteConfirmationTitle[language]} "${task.text}"?`}
          mainActionTitle={TEXTS.page.todoListPage.delete[language]}
          mainAction={deleteAction}
          mainActionColor={"danger"}
          secondaryActionTitle={TEXTS.page.todoListPage.cancel[language]}
          secondaryAction={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
    </StyledTodo>
  );
};

export default TodoCard;
