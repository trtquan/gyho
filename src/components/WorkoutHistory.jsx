import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from "./Shared/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  workoutList: {
    width: '100%',
    overflow: 'auto',
    paddingBottom: '0px',
    paddingTop: '0px',
    "& .MuiListItemText-primary": {
      color: theme.palette.secondary.main,
      fontWeight: '600',
      fontSize: '1.1rem'
    },
    "& .MuiListItemText-secondary": {
      color: theme.palette.primary.main,
      fontWeight: '500',
      fontSize: '1.1rem'
    },
    
  },
  subheader: {
    fontSize: '1rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    background: theme.palette.background.grey,
    lineHeight: '36px',
    borderRadius: '10px'
  },
  ul: {
    padding: '0 15px'
  }
})
);

export default function WorkoutHistory() {
  const classes = useStyles();
  const workoutHistoryData = [
    {
      title: 'Week 1',
      days: [
        { exercise: 'Workout + Cardio' },
        { exercise: 'Weight Lifing' }
      ]
    },
    {
      title: 'Week 2',
      days: [
        { exercise: 'Weight Lifing' },
        { exercise: 'Cardio + Crossfit' }
      ]
    },
    {
      title: 'Other workout',
      days: [
        { exercise: 'Cardio + Weight Lifing' },
        { exercise: 'Cardio + Crossfit' }
      ]
    }
  ];

  return (
    <div className={classes.root}>
      <Header title="Your Workout Plan"/>
      <List className={classes.workoutList}>
        {workoutHistoryData.map((week, index) => (
          <li key={`workout-hystory-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader color="primary" className={classes.subheader}>{week.title}</ListSubheader>
              {week.days.map((item, itemIndex) => (
                <ListItem key={`workout-hystory-item-${index}-${itemIndex}`} button>
                  <ListItemText primary={`Day ${itemIndex + 1}`} secondary={item.exercise} />
                  <ArrowForwardIosIcon />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
}
