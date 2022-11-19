import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home.jsx";
import Map from "./pages/Map/Map.jsx";
import Media from "./pages/Media/Media.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Search from "./pages/Search/Search.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import FisrtBranch from "./pages/FirstBranch/HomeFirstBranch/HomeFirstBranch.jsx";
import "./i18n";

const App = () => {
  return (
    <Suspense fallback="Loading...">
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
            <Route path="/firstbranchhome" element={<FisrtBranch />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
