import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./shared/components/PageNotFound";
import NewPlace from "./places/pages/NewPlace";

import Users from "./users/pages/Users";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Users />} />
      <Route path="/places/new" exact element={<NewPlace />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
