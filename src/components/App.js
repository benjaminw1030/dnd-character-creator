import React from "react";
import Account from "./Account";
import CharacterControl from "./CharacterControl";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<CharacterControl />} />
        </Routes>
      </BrowserRouter>
  );
}

// export default App;
