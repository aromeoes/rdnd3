import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckScreen extends Component{
	
	render(){
		const decks = this.props.allDecks.map((deck)=>
			deck.deck
			)
		
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>See list of decks here</Text>
				<FlatList 
					data={this.props.allDecks} 
					renderItem={({item})=>
						<View
						//key={item.deck}
						style={{backgroundColor:'#2196F3',alignItems:'center',width:300,borderWidth:2,padding:4,margin:10}}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('SingleDeck', {deckId:item.deck,cardCount:item.count})}>
						      	<Text style={{color:'white',fontWeight:'bold'}}>{item.deck}</Text>
						      	<Text style={{color:'white',fontWeight:'bold'}}>{item.count} cards in this deck</Text>
					    	</TouchableOpacity>
					    </View>
					}
					keyExtractor={item=> item.deck}
				/>
			</View>
			)
	}
}

function mapStateToProps({decks}){
	let allDecks = []
	if (decks){
		const deckList = Object.keys(decks)
		allDecks = deckList.map((deck)=>({deck:deck,count:decks[deck].cards.length}))
		//const allDecks = deckList.map((deck)=>{deck})

	}
	//const decklist = Object.keys(decks)
	//const allDecks = decklist.map(deck=> deck, deck.cards.length)
	//console.log(allDecks)
	return{
		allDecks
	}
}

export default connect(mapStateToProps)(DeckScreen)