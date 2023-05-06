import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyles";
import Users from "./containers/users";
import Home from "./containers/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><Users /> <GlobalStyles /></>
);
