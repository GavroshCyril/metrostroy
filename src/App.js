import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home.jsx";
import Map from "./pages/Map/Map.jsx";
import Media from "./pages/Media.jsx";
import Resources from "./pages/Resources.jsx";
import Contacts from "./pages/Contacts.jsx";
import Search from "./pages/Search.jsx";
import Auth from "./pages/Auth/Auth.jsx";

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
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
