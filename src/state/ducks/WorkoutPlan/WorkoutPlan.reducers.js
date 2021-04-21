import { WorkoutPlanActionTypes } from "./WorkoutPlan.actions";

const initialState = {
	data: [],
	errors: [],
	loading: false
};

export const WorkoutPlanReducer = (state = initialState, action) => {
	switch (action.type) {
		case WorkoutPlanActionTypes.FETCH_WORKOUTPLAN: {
			return { ...state, loading: true };
		}
		case WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_SUCCESS: {
			return { ...state, data: action.payload, loading: false };
		}
		case WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_ERROR: {
			return { ...state, loading: false };
		}
		default:
			return state;
	}
};