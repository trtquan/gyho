import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Header from "../components/Shared/Header";
import { connect } from "react-redux";
import { WorkoutPlanActionTypes } from "../state/ducks/WorkoutPlan/WorkoutPlan.actions";

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
    },
    navBar: {
      marginTop: 'auto'
    }
  })
);

function WorkoutPlan(props) {
  const classes = useStyles();
  const { workoutPlanData, fetchWorkoutPlanData } = props;

  const [currentNav, setNav] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setNav(newValue);
  };

  React.useEffect(() => {
    fetchWorkoutPlanData();
  }, [fetchWorkoutPlanData]);

  return (
    <div className={classes.root}>
      <Header title="Your Workout Plan"/>
      <List className={classes.workoutList}>
        {workoutPlanData.data.map((week, index) => (
          <li key={`workout-${index}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader color="primary" className={classes.subheader}>{`Week ${index + 1}`}</ListSubheader>
              {week.days.map((item, itemIndex) => (
                <ListItem key={`workout-item-${index}-${itemIndex}`}>
                  <ListItemText primary={`Day ${itemIndex + 1}`} secondary={item.exercise}/>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
      <BottomNavigation value={currentNav} onChange={handleChange} className={classes.navBar}>
        <BottomNavigationAction value="recents" icon={<PersonOutlineOutlinedIcon />} />
        <BottomNavigationAction value="favorites" icon={<SearchOutlinedIcon />} />
        <BottomNavigationAction value="nearby" icon={<FlashOnOutlinedIcon />} />
        <BottomNavigationAction value="folder" icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    workoutPlanData: state.workoutPlan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkoutPlanData: () => dispatch({ type: WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_REQUEST })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPlan);
