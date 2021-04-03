import React from 'react';
import { Box, List, ListItem, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TimerIcon from '@material-ui/icons/Timer';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF',
    boxShadow: 'none'
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: '800'
  },
  box: {
    backgroundColor: "#e75f0c",
    color: "#fff"
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center'
  },
  items: {
    justifyContent: 'center'
  },
  icon: {
      fontSize: "40px"
  },
  data: {
      fontSize: "20px",
      fontWeight: "bolder"
  }
}));

export default function Analysis({ title }) {
  const classes = useStyles();

  const analysisData = [
    {
      data: [
        { icon: <FitnessCenterIcon className={classes.icon}></FitnessCenterIcon>},
        { info: 'Weight Lost'},
        { data: '0.75 Kgs' },
      ]
    },
    {
      data: [
        { icon: <TimerIcon className={classes.icon}></TimerIcon>},
        { info: 'Time Taken'},
        { data: '120 mins' }
      ]
    },
    {
      data: [
        { icon: <WhatshotIcon className={classes.icon}></WhatshotIcon>},
        { info: 'Calories Burnt'},
        { data: '240' }
      ]
    }
  ];

  return (
    <Box className={classes.box}>
        <List className={classes.list}>
        {analysisData.map((analysis, index) => (
          <li key={`workout-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader color="primary" className={classes.subheader}></ListSubheader>
              {analysis.data.map((item, itemIndex) => (
                <ListItem className={classes.items} key={`workout-item-${index}-${itemIndex}`}>
                  {item.icon}
                  <Typography className={classes.info}>{item.info}</Typography>
                  <Typography className={classes.data}>{item.data}</Typography>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        </List>
    </Box>
  );
}
