import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboard.jsx";
import FacultyDashboard from "./Pages/FacultyDashboard.jsx";
import CompleteProfile from "./Pages/CompleteProfile.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#634dd1",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/faculty" element={<FacultyDashboard />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
