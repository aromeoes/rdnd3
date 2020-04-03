import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import { deleteDeck } from '../utils/api'
import { actionDeleteDeck } from '../actions'
import { connect } from 'react-redux'

class SingleDeck extends Component{
	onDeleteDeck({}){
		const deck = this.props.route.params.deckId
		//DB Update
		deleteDeck({deck})
		//Redux Update
		this.props.dispatch(actionDeleteDeck({deck}))
		return this.props.navigation.navigate('Decks')

	}
	
	onStartQuiz(){
		console.log('start quiz')
	}
	render(){
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		      <Text>Deck Name: {this.props.route.params.deckId}</Text>
		      <Text>Cards Total:   {this.props.route.params.cardCount}</Text>
		      <Button
				  onPress={() => this.props.navigation.navigate('Add Card', {deckId:this.props.route.params.deckId,cardCount:this.props.route.params.cardCount})}
				  title="Add Card"
				  color='#2196F3'
				  accessibilityLabel="Learn more about this purple button"
				/>
			  <Button
				  onPress={() => this.onDeleteDeck({})}
				  title="Delete Deck"
				  color="#f194ff"
				  accessibilityLabel="Learn more about this purple button"
			  />
			  <Button
				  onPress={() => this.props.navigation.navigate('Do Quiz', {deckId:this.props.route.params.deckId})}
				  title="Start Quiz"
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>
		    </View>
			)
	}
}


export default connect()(SingleDeck)