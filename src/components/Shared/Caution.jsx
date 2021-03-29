import React from "react";
import Alert from "@material-ui/lab/Alert";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';


function Caution({message}) {
  return (
    <Alert variant="outlined" icon={<ErrorOutlineOutlinedIcon fontSize="inherit" />}  severity="warning">
      {message ? message : 'This is a warning alert — check it out!'}
    </Alert>
  );
}

export default Caution;
