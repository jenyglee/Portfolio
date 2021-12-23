import "./App.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import Home from "screens/Home";
import { ContentsStore } from "storeContext/contents";

function App() {
    return (
        <ContentsStore>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </ThemeProvider>
        </ContentsStore>
    );
}

export default App;
