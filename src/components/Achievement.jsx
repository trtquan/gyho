import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, BottomNavigation, BottomNavigationAction, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from "@material-ui/core";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ImageIcon from '@material-ui/icons/Image';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from "./Shared/Header";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return ({
    root: {
      width: '100%'
    },
    workoutList: {
      height: '200px',
      width: '100%',
      overflow: 'auto'
    }
  })}
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
      <Header title="Your Workout Plan"/>
      <List className={classes.workoutList} subheader={<li />}>
        {achievementData.map((monthData, index) => (
          <li key={`achievement-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{monthData.timeText}</ListSubheader>
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
