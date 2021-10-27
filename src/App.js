import "./App.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/Home";
function App() {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
}

export default App;
