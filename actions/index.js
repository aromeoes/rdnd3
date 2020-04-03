import { AsyncStorage } from 'react-native'
import { db_key } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDecks(decks) {
	// body...
	return{
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(deck) {
	// body...
	return{
		type: ADD_DECK,
		deck
	}
}

export function addQuestion(question) {
	// body...
	console.log(question)
	return{
		type: ADD_QUESTION,
		question
	}
}

export function actionDeleteDeck(deck) {
	// body...
	return{
		type: DELETE_DECK,
		deck
	}
}



export function handleInitialData(){
	return AsyncStorage.getItem('@flashcard:v1')
	.then((result)=>({decks:JSON.parse(result)}))
	//AsyncStorage.getItem('@flashcard:v1')
	//.then((result)=>({result}))


	//get async storage decks
	//return AsyncStorage.getItem('@flashcard:v1')
	//.then( (data) => (JSON.parse(data)))
	////dispatch action to store
	//.then(console.log('handel initial'))
	//.then(function(initData){return 'a'})
}