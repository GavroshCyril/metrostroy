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
import SecondBranch from "./pages/SecondBranch/HomeSecondBranch/HomeSecondBranch.jsx";
import ThirdBranch from "./pages/ThirdBranch/HomeThirdBranch/HomeThirdBranch.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Error from "./pages/Error/Error.jsx";
import Frunzenskaya from "./pages/SecondBranch/Frunzenskaya";
import Partizanskaya from "./pages/SecondBranch/Frunzenskaya";
import { TokenManager } from "./common/TokenManager.jsx";
import { LocalizationProvider } from "./common/LocalizationProvider.jsx";

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <TokenManager>
          <LocalizationProvider>
            <Sidebar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/search" element={<Search />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/bluebranch" element={<FisrtBranch />} />
                <Route path="/redbranch" element={<SecondBranch />} />
                <Route path="/greenbranch" element={<ThirdBranch />} />

                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Sidebar>
          </LocalizationProvider>
        </TokenManager>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
