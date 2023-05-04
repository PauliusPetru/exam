import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TodoListPage = lazy(() => import("./pages/TodoListPage"));

function App() {
  return (
    <BrowserRouter>
      <TodoListPage />
    </BrowserRouter>
  );
}

export default App;
