import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { fetchWorkoutPlan } from "../../../api/WorkoutPlanAPI";
import { WorkoutPlanActionTypes, fetchError, fetchSuccess } from "./WorkoutPlan.actions";

function* handleFetchWorkout(action) {
    console.log(action);
    yield put({ type: WorkoutPlanActionTypes.FETCHING_WORKOUTPLAN });
	try {
        const data = yield call(fetchWorkoutPlan, true);
        yield put(fetchSuccess(data))
	} catch (err) {
        console.log(err);
		if (err) {
			yield put(fetchError(err));
		} else {
			yield put(fetchError("An unknown error occured."));
		}
	}
}

function* watchFetchRequest() {
	yield takeEvery(WorkoutPlanActionTypes.FETCH_WORKOUTPLAN_REQUEST, handleFetchWorkout);
}

export default function* workoutPlanSaga() {
	yield all([fork(watchFetchRequest)]);
}