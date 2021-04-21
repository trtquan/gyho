import { all, fork } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import { WorkoutPlanReducer } from "./WorkoutPlan/WorkoutPlan.reducers";
import workoutPlanSaga from "./WorkoutPlan/WorkoutPlan.sagas";

export const rootReducer = combineReducers({
    workoutPlan: WorkoutPlanReducer
});
export function* rootSaga() {
	yield all([fork(workoutPlanSaga)]);
}