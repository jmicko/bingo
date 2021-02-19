import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getNumbers(action) {
    try {
        const response = yield axios.get(`/api/numbers`)
        console.log('++++++ Response from GET route', response);
        yield put( {type: 'SET_NUMBERS', payload: response.data})
    } catch (error) {
        console.log('error with the get request for the TASK', error);
    }
}

function* getNewNumbers(action) {
    try {
        const response = yield axios.post(`/api/numbers`)
        console.log('-------THE RESPONSE',response.data);
        yield put( {type: 'SET_NUMBERS', payload: response.data})
    } catch (error) {
        console.log('error with the UPDATE_TASK request in the task.saga file', error);
    }
}

function* taskSaga() {
    yield takeLatest('FETCH_NUMBERS', getNumbers);
    yield takeLatest('UPDATE_NUMBERS', getNewNumbers);
}

export default taskSaga;
