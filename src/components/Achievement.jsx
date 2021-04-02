import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import Header from "./Shared/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  achievement: {
    width: '100%',
    overflow: 'auto',
    paddingBottom: '0px',
    paddingTop: '0px',
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
  ul: {
    padding: '0 15px'
  }
})
);

export default function Achievement() {
  const classes = useStyles();
  const achievementData = [
    {
      timeText: 'January',
      achievements: [
        {
          title: 'Ran 10km',
          icon: 'ran10km',
          // time: '2020-01-19T17:00:00.000Z'
          time: '20 January, 2020'
        }
      ]
    },
    {
      timeText: 'February',
      achievements: [
        {
          title: 'Burn 1000 calories',
          icon: 'burn1000cal',
          time: '10 February, 2020'
        },
        {
          title: 'First boxing workout',
          icon: 'firstboxing',
          time: '29 February, 2020'
        }
      ]
    },
    {
      timeText: 'April',
      achievements: [
        {
          title: 'Did workout without a miss',
          icon: 'workoutstreak',
          time: 'March, 2020 - April, 2020'
        }
      ]
    },
  ];
  return (
    <div className={classes.root}>
      <Header title="Your Achievements"/>
      <List className={classes.achievement} subheader={<li />}>
        {achievementData.map((monthData, index) => (
          <li key={`achievement-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader color="primary" className={classes.subheader}>{monthData.timeText}</ListSubheader>
              {monthData.achievements.map((achievement, detailIndex) => (
                <ListItem key={`achievement-detail-${index}-${detailIndex}`}>
                  <ListItemText primary={achievement.title} secondary={achievement.time} />
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
}
