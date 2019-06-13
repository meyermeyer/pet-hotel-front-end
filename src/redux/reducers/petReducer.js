// let pets = [{
// 		id:1,
// 		name:'Ashley',
// 		owner_id:1,
// 		breed: 'Anaconda',
// 		color:'green spots',
// 		checked_in: true,
// 		dateIn: '06/12/2019'
// 	},
// 	{
// 		id: 2,
// 		name: 'Franklin',
// 		owner_id: 2,
// 		breed: 'Ball Python',
// 		color: 'brown spots',
// 		checked_in: true,
// 		dateIn: '06/06/2019'
// 	},
// 	{
// 		id: 3,
// 		name: 'Betsy',
// 		owner_id: 3,
// 		breed: 'Rattler',
// 		color: 'tan',
// 		checked_in: false,
		
// 	},
// 	{
// 		id: 4,
// 		name: 'Gaston',
// 		owner_id: 4,
// 		breed: 'Copper Head',
// 		color: 'red and black',
// 		checked_in: true,
// 		dateIn: '06/13/2019'
// 	},

// ]

const petReducer = (state=[], action) => {
	switch(action.type){
		case 'SET_PET':
			return action.payload;
		default:
			return state
	}
}

export default petReducer;