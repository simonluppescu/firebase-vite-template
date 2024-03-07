import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/App.css";

import Home from "@/components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
