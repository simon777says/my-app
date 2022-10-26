/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";

import Seting from "./components/Setings/Setings";
import ProfileContainer from "./components/Profile/MyPosts/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="conten">
          <Routes>
            <Route path='/profile/:userId'element={<ProfileContainer  />}
/>
<Route path="/profile/" element={<ProfileContainer/>}/>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/friends" element={<UsersContainer />} />
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
