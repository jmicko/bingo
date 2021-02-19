import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getNumbers(action) {
    try {
        const response = yield axios.get(`/api/numbers/${action.payload}`)
        // yield put({ type: 'SET_TASK', payload: response.data})
    } catch (error) {
        console.log('error with the get request for the TASK', error);
    }
}

function* getNewNumbers(action) {
    try {
        yield axios.put(`/api/numbers`)
        // yield put({ type: 'FETCH_PROJECT_TASKS', payload: action.payload.project_id })
    } catch (error) {
        console.log('error with the UPDATE_TASK request in the task.saga file', error);
    }
}

function* taskSaga() {
    yield takeLatest('FETCH_NUMBERS', getNumbers);
    yield takeLatest('UPDATE_NUMBERS', getNewNumbers);
}

export default taskSaga;
