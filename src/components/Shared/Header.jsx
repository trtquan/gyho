import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF',
    boxShadow: 'none'
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: '800'
  }
}));

export default function Header({ title }) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Toolbar>
        <IconButton color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" color="primary" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
