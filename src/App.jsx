import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ClientListPage = lazy(() => import("./pages/ClientListPage"));

function App() {
  return (
    <BrowserRouter>
      <ClientListPage />
    </BrowserRouter>
  );
}

export default App;
