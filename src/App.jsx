import { lazy } from "react";

const ClientListPage = lazy(() => import("./pages/ClientListPage"));

function App() {
  return <ClientListPage />;
}

export default App;
