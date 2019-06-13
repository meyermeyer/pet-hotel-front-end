import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchPet(action){
	try{
		console.log('fetchpet action.payload:', action.payload)
		const response = yield axios.get('/api/day');
		yield put({type: 'SET_PET', payload: response.data})
	}catch(error){
		console.log('error in fetchPet:', error)
	}
}

function* removePet(action){
	try { 
        console.log('delete from saga',action.payload)
        yield axios.delete(`/api/day/${action.payload}`)
        yield put({type: 'FETCH_PET'})
    }
    catch(error) {
    console.log(error)
  }
}

function* petSaga() {
	yield takeLatest('FETCH_PET', fetchPet);
	yield takeLatest('DELETE_PET', removePet);
}

export default petSaga;