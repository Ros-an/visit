import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./shared/components/PageNotFound";

import Users from "./users/pages/Users";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Users />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
