/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addPost, updateNewPostText} from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTee = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    );
}
