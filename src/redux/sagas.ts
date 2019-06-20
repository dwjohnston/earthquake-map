import { FETCH_QUAKE_DATA_REQUEST, FetchDataRequestAction, FETCH_QUAKE_DATA_FAILURE, FETCH_QUAKE_DATA_SUCCESS } from "./actions";
import { all, call,put,  takeLeading } from "redux-saga/effects";
import { fetchQuakes } from "../services/EarthquakeService";
export function* fetchQuakeDataSaga(action: FetchDataRequestAction) {

    const { payload } = action;
    try {
        const result = yield call(fetchQuakes, payload);
        console.log(result);
        yield put({
            type: FETCH_QUAKE_DATA_SUCCESS,
            payload: result
        })
    }
    catch (err) {

        console.error(err);
        yield put({
            type: FETCH_QUAKE_DATA_FAILURE,
            payload: err
        });
    }
};



export function* fetchQuakeDataSagaWatcher() {
    yield takeLeading(FETCH_QUAKE_DATA_REQUEST, fetchQuakeDataSaga);
}

export default function* rootSaga() {
    yield all([
        fetchQuakeDataSagaWatcher(),
    ])
}