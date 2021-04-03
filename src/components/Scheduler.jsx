import React from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Shared/Header";
import Analysis from "./Shared/Analysis"
import ImageIcon from '@material-ui/icons/Image';
import { Image } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#dbd9d5'
    },
    exercise: {
      alignSelf: 'center',
      width: '90%',
      margin: '15px 0px',
      overflow: 'auto',
      paddingBottom: '0px',
      paddingTop: '0px',
      backgroundColor: '#fff',
      borderRadius: '50px',
      "& .MuiListItemText-primary": {
        color: theme.palette.primary.main,
        fontWeight: '600',
        fontSize: '1.1rem'
      },
      "& .MuiListItemText-secondary": {
        color: theme.palette.secondary.main,
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
    items: {
      // backgroundColor: '#333',
    },
    ul: {
      padding: '0 15px'
    }
  })
);

export default function Scheduler() {
  const classes = useStyles();

  const exerciseData = [
    {
      data: [
        { icon: <Avatar></Avatar> },
        { title: 'Bicep curls' },
        { reps: '15 reps' }
      ]
    },
    {
      data: [
        { icon: 'bench-press' },
        { title: 'Bench press' },
        { reps: '15 reps' }
      ]
    },
    {
      data: [
        { icon: 'back-pull' },
        { title: 'Back pull' },
        { reps: '15 reps' }
      ]
    },
    {
      data: [
        { icon: 'tricep-extension' },
        { title: 'Tricep extension' },
        { reps: '15 reps' }
      ]
    },
    {
      data: [
        { icon: 'chest-press' },
        { title: 'Chest press' },
        { reps: '15 reps' }
      ]
    },
    {
      data: [
        { icon: 'shoulder-press' },
        { title: 'Shoulder press' },
        { reps: '15 reps' }
      ]
    },
  ];

  return (
    <div className={classes.root}>
      <Header title="Cardio + Yoga"/>
      <Analysis />
      <List className={classes.exercise} subheader={<li />}>
        {exerciseData.map((exercise, index) => (
          <li key={`exercise-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader color="primary" className={classes.subheader}></ListSubheader>
              {exercise.data.map((item, itemIndex) => (
                <ListItem key={`exercise-detail-${index}-${itemIndex}`}>
                  <ListItemAvatar>
                    <Avatar>
                      {/* <Image /> */}
                      {item.icon}
                    </Avatar>
                    {/* {item.icon} */}
                  </ListItemAvatar>
                  <ListItemText className={classes.items} primary={item.title} secondary={item.reps} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
}
