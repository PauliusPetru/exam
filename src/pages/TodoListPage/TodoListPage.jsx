import TEXTS from "../../shared/texts/TEXTS";
import { useRecoilValue } from "recoil";
import {
  languageState,
  filterState,
  sortState,
  searchState,
} from "../../shared/state/atoms";
import { useState } from "react";
import TodoCard from "../../components/molecules/TodoCard/TodoCard";
import Button from "../../components/atoms/Button";
import ConfirmationModal from "../../components/molecules/ConfirmationModal/ConfirmationModal";
import client, { API } from "../../shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { StyledDiv, StyledButton } from "./style";
import CONSTANTS from "../../shared/CONSTANTS";

const TodoListPage = () => {
  const language = useRecoilValue(languageState);
  const search = useRecoilValue(searchState);
  const filter = useRecoilValue(filterState);
  const sort = useRecoilValue(sortState);

  const user = JSON.parse(localStorage.getItem(CONSTANTS.userData));

  const [showCreate, setshowCreate] = useState(false);
  const openCreate = () => setshowCreate(true);
  const closeCreate = () => setshowCreate(false);

  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () => client.get(API.baseUrl.todos),
    select: (todos) =>
      todos
        .filter(
          (todo) =>
            todo.user_id === user.id &&
            (filter === "all" ? todo.status : filter === todo.status) &&
            (search
              ? todo.text.toLowerCase().includes(search.toLowerCase())
              : true)
        )
        .sort((a, b) => {
          if (sort === "new") {
            return b.created_at - a.created_at;
          } else if (sort === "desc") {
            return b.text.localeCompare(a.text);
          } else if (sort === "asc") {
            return a.text.localeCompare(b.text);
          } else if (sort === "old") {
            return a.updated_at - b.updated_at;
          }
        }),
  });

  const createTask = async (taskText) => {
    const task = {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      text: taskText,
      status: "active",
      created_at: Date.now(),
      user_id: user.id,
    };
    await client.post(API.baseUrl.todos, task);
    refetch();
  };
  return (
    <section>
      <StyledButton>
        <Button
          width={"100px"}
          action={openCreate}
          text={TEXTS.page.todoListPage.create[language]}
          type="submit"
        />
      </StyledButton>
      <StyledDiv>
        {data && data.length === 0 && (
          <h3>{TEXTS.page.todoListPage.noTasks[language]}</h3>
        )}
        {data &&
          data.map((task) => (
            <TodoCard key={task.id} task={task} onAction={refetch} />
          ))}
      </StyledDiv>
      {showCreate && (
        <ConfirmationModal
          title={TEXTS.page.todoListPage.inputTask[language]}
          showInput={true}
          mainActionTitle={TEXTS.page.todoListPage.create[language]}
          mainAction={(input) => {
            createTask(input);
            closeCreate();
          }}
          mainActionColor={"weUse"}
          secondaryActionTitle={TEXTS.page.todoListPage.cancel[language]}
          secondaryAction={closeCreate}
        />
      )}
    </section>
  );
};

export default TodoListPage;
