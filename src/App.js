/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Seting from "./components/Setings/Setings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="conten">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/seting" element={<Seting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
