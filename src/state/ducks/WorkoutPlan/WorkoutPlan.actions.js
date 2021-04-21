export const WorkoutPlanActionTypes = {
    FETCH_WORKOUTPLAN_REQUEST: 'WorkoutPlan/fetching_request',
    FETCHING_WORKOUTPLAN: 'WorkoutPlan/fetching',
    FETCH_WORKOUTPLAN_SUCCESS: 'WorkoutPlan/fetch_success',
    FETCH_WORKOUTPLAN_ERROR: 'WorkoutPlan/fetch_error'
}
export const fetchSuccess = (data) => { 
    return { type: WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_SUCCESS, payload: data };
}
export const fetchError = (message) => { 
    return { type: WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_ERROR, payload: message };
}