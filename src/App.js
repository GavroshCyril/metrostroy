import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.jsx";
import Map from "./pages/Map.jsx";
import Media from "./pages/Media.jsx";
import Resources from "./pages/Resources.jsx";
import Contacts from "./pages/Contacts.jsx";
import Search from "./pages/Search.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
