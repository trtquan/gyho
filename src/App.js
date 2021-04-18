import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { InitialState } from "./config/InitialState";
import WorkoutPlan from "./page/WorkoutPlan";
import configureStore from "./state";

const initialState = InitialState;
const store = configureStore(initialState);
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
    <Provider store={store}>
      <ThemeProvider theme={masterTheme}>
        <WorkoutPlan/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
