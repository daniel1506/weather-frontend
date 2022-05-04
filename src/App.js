import { React, useContext } from "react";
import AuthContext from "./store/auth-context";
import Auth from "./Auth";
import { BrowserRouter as Router, Routes, Route, Navigate, useMatch } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Homepage from "./pages/Homepage/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableView from "./pages/Homepage/TableView";
import MapView from "./pages/Homepage/MapView";
import FavoriteView from "./pages/Homepage/FavoriteView";
import AdminView from "./pages/Homepage/AdminView/AdminView";
import LocationView from "./pages/Homepage/LocationView.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrefContext from "./store/preference-context";
import Navbar from "./components/Navbar";
function App() {
  const prefCtx = useContext(PrefContext);
  const authCtx = useContext(AuthContext);
  return (
    <ThemeProvider theme={prefCtx.theme}>
      <CssBaseline />
      <Router>
        {true && <Navbar />}
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/homepage" element={<TableView />}></Route>
          <Route path="/mapview" element={<MapView />}></Route>
          <Route path="/favoriteview" element={<FavoriteView />}></Route>
          <Route path="/adminview" element={<AdminView />}></Route>
          <Route path="/location/:id" element={<LocationView />}></Route>
          <Route path="*" element={<Navigate to="/homepage" />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
