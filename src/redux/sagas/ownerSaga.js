import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchOwner() {
    try {
        const response = yield axios.get('/api/owner');
        yield put({ type: 'SET_OWNER', payload: response.data })
    } catch (error) {
        console.log('error in fetchOwner:', error)
    }
}

function* addOwner() {
    try {
        yield axios.post('/api/owner');
        yield put({ type: 'FETCH_PET'})
    } catch (error) {
        console.log('error in fetchPet:', error)
    }
}


function* ownerSaga() {
    yield takeLatest('FETCH_OWNER', fetchOwner);
    yield takeLatest('ADD_OWNER', addOwner)
}

export default ownerSaga;