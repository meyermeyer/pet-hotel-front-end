import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchPet(action){
	try{
		console.log('fetchpet action.payload:', action.payload)
		const response = yield axios.get('/pet');
		yield put({type: 'SET_PET', payload: response.data})
	}catch(error){
		console.log('error in fetchPet:', error)
	}
}

function* addPet(action) {
	try{
		yield axios.post('/pet', action.payload)
		yield put({type: 'FETCH_PET'});
	}catch(error){
		console.log('error in addPet:', error)
	}
}

function* updatePet(action) {
	try{
		yield axios.put(`/pet/${action.payload}`)
		yield put({type: 'FETCH_PET'})
	}catch(error){
		console.log('error in updatePet:', error)
	}
}

function* deletePet(action){
	try { 
        console.log('delete from saga',action.payload)
        yield axios.delete(`/pet/${action.payload}`)
        yield put({type: 'FETCH_PET'})
    }
    catch(error) {
    console.log('error in deletePet:', error)
  }
}

function* petSaga() {
	yield takeLatest('FETCH_PET', fetchPet);
	yield takeLatest('ADD_PET', addPet);
	yield takeLatest('UPDATE_PET', updatePet);
	yield takeLatest('DELETE_PET', deletePet);
}

export default petSaga;