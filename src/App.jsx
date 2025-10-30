import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* Main app routing setup */}
      <BrowserRouter>
        <Routes>
          {/* Default route shows the home dashboard */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
