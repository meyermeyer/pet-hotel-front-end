const owners = [
	{id: 1,
	name: 'Tony'},
	{id: 2,
	name: 'Heena'},
	{id:3,
	name:'Rachel'},
	{id:4,
	name:'Meyer'}
]

const ownerReducer = (state=owners, action) => {
	switch(action.type){
		case 'SET_OWNER':
			return action.payload;
		default:
			return state
	}
}



export default ownerReducer;