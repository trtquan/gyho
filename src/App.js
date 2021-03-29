import React from "react";
import Alert from "@material-ui/lab/Alert";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import "./App.css";
import Caution from "./components/Shared/Caution";
import KaoAccordion from "./components/Shared/KaoAccordion";
import KaoButton from "./components/Shared/KaoButton";

function App() {
  return (
    <>
      <KaoAccordion summary={"quan"} children={<Caution message={"test"} />} />
      <KaoButton />
    </>
  );
}

export default App;
