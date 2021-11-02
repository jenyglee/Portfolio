import "./App.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Home from "./screens/Home";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
