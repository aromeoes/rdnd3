import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, DELETE_DECK } from '../actions'

function decks (state={}, action){
	switch (action.type){
		case RECEIVE_DECKS:
			return{
				...state,
				...action.decks,
			}
		case ADD_DECK:
			console.log(state,action.deck)
			return{
				decks:{...state.decks, ...action.deck.decks},
			}
		case ADD_QUESTION:
			let newstate2 = state
			newstate2['decks'][action.question.deck]['cards'].push(action.question.card)
			return{
				...newstate2
			}
		case DELETE_DECK:
			let newstate = state
			newstate['decks'][action.deck.deck] = undefined
			delete newstate['decks'][action.deck.deck] 
			return{
				...newstate
			}
		default:
			return state
	}
}

export default decks