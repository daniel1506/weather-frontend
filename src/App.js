import { React, useContext } from "react";
import AuthContext from "./store/auth-context";
import Auth from "./Auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Homepage from "./pages/Homepage/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrefContext from "./store/preference-context";
function App() {
  const prefCtx = useContext(PrefContext);
  return (
    <ThemeProvider theme={prefCtx.theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="*" element={<Auth />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
