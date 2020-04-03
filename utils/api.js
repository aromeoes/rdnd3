import { AsyncStorage } from 'react-native'


export const db_key = '@flashcard:v1'

export function submitDeck({newdeck,empty}){
	console.log(newdeck,empty)
	return AsyncStorage.mergeItem(db_key, JSON.stringify({
    [newdeck]:empty
    //[newdeck]: empty
  }))
}

export function deleteDeck({deck}){
	return AsyncStorage.getItem(db_key)
    .then((results) => {
      const data = JSON.parse(results)
      data[deck] = undefined
      delete data[deck]
      AsyncStorage.setItem(db_key, JSON.stringify(data))
    })

}  

export function apiAddCard({card,deck}){
	console.log(card,deck,'aca')
	return AsyncStorage.getItem(db_key)
    .then((results) => {
    	const data = JSON.parse(results)
    	data[deck]['cards'].push(card)
    	AsyncStorage.setItem(db_key,JSON.stringify(data))
    })
	
}
