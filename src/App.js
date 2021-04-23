import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./shared/components/PageNotFound";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import Users from "./users/pages/Users";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
