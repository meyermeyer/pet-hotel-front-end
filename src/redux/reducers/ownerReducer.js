const ownerReducer = (state={}, action) => {
	switch(action.type){
		case 'SET_OWNER':
			return action.payload;
		default:
			return state
	}
}

export default ownerReducer;