import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home.jsx";
import Map from "./pages/Map/Map.jsx";
import Media from "./pages/Media/Media.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Search from "./pages/Search/Search.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Register from "./pages/Register/Register.jsx";
import FisrtBranch from "./pages/FirstBranch/HomeFirstBranch/HomeFirstBranch.jsx";
import SecondBranch from "./pages/SecondBranch/HomeSecondBranch/HomeSecondBranch.jsx";
import ThirdBranch from "./pages/ThirdBranch/HomeThirdBranch/HomeThirdBranch.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import News from "./pages/News/News.jsx";
import Error from "./pages/Error/Error.jsx";
import Frunzenskaya from "./pages/SecondBranch/Frunzenskaya";
import Partizanskaya from "./pages/SecondBranch/Frunzenskaya";
import { TokenManager } from "./common/TokenManager.jsx";
import { LocalizationProvider } from "./common/LocalizationProvider.jsx";
import Line from "./pages/Line";
import { isUserLoggedIn, isUserAdmin, logout } from "./store/userSlice";

import NewsList from "./components/News/NewsList";
import NewsDetail from "./components/News/NewsDetail";
import {selectHeader} from "./store/headerSlice";
import Lang from "./components/HeaderOptions";
import "./components/Slider/Slider.css"


const App = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  const isAdmin = useSelector(isUserAdmin);

  const {title, image} = useSelector(selectHeader)

  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <TokenManager>
          <LocalizationProvider>
            <Sidebar/>
            <div style={{backgroundImage: `url(${image})`}}>
              <div className="Map-container" >
                <h2 className="title">{title}</h2>
              </div>
              <Lang />
            </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/first_queue" element={<Media />} />
                <Route path="/information" element={<Contacts />} />
                <Route path="/project_of_minsk_metro" element={<Search />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/news" element={<News />} />
                <Route path="/register" element={<Register />} />
                <Route path="/bluebranch" element={<FisrtBranch />} />
                <Route path="/redbranch" element={<SecondBranch />} />
                <Route path="/greenbranch" element={<ThirdBranch />} />
                {isAdmin && isLoggedIn && (
                  <Route path="/admin" element={<Admin />} />
                )}

                <Route path="/line/:name" element={<Line />} />
                <Route path="*" element={<Error />} />

                <Route path="/" exact component={NewsList} />
                <Route path="/news/:id" component={NewsDetail} />
              </Routes>

          </LocalizationProvider>
        </TokenManager>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
