import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';

function* fetchOwner() {
    try {
        const response = yield axios.get('/api/owner');
        yield put({type: 'SET_OWNER', payload: response.data})
    } catch (error) {
        console.log('error in fetchOwner:', error)
    }
}

function* addOwner(action) {
    try {
        console.log('addOwner', action.payload)
        yield axios.post('/api/owner');
        yield put({type: 'FETCH_OWNER'})
    } catch (error) {
        console.log('error in fetchPet:', error)
    }
}

function* deleteOwner(action){
	try { 
        yield axios.delete(`/api/owner/${action.payload}`)
        yield put({type: 'FETCH_OWNER'})
    }
    catch(error) {
    console.log('error in deleteOwner:', error)
  }
}


function* ownerSaga() {
    yield takeEvery('FETCH_OWNER', fetchOwner);
    yield takeEvery('ADD_OWNER', addOwner);
    yield takeEvery('DELETE_OWNER', deleteOwner);
}

export default ownerSaga;