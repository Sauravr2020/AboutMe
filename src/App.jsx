import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About.jsx";
import Jokes from "./pages/Jokes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
