import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Quotes from "./pages/Quotes";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;