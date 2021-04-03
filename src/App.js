import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import "./App.css";
import WorkoutPlan from "./components/WorkoutPlan";

const masterTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#050607'
    },
    secondary: {
      main: '#e86514'
    },
    background: {
      grey: '#dbd9d5'
    }
  },
  typography: {
    h1: {
      color: '#050607'
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={masterTheme}>
        <WorkoutPlan/>
      </ThemeProvider>
    </>
  );
}

export default App;
