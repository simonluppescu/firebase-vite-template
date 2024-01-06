import { BrowserRouter, useRoutes } from "react-router-dom";

import "@/App.css";

import Home from "@/components/Home";

const App: React.FC = () => {
  const Routes = () =>
    useRoutes([
      {
        path: "/",
        element: <Home />
      }
    ]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
