import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { AsyncStorage } from 'react-native'

class AddDeck extends Component{
	state = {
		deckName:'',
	}
	handleTextChange = (newdeck) => {
		this.setState(()=>({deckName:newdeck}))
	}
	handleSubmit = () =>{
		const newdeck = this.state.deckName
		const empty = {cards:[]}
		//DB update
		submitDeck({newdeck:newdeck,empty:empty})
		.then(console.log(AsyncStorage.getItem('@flashcard:v1')))

		// Redux update
		this.props.dispatch(addDeck({decks:{[newdeck]:empty}}))
		//redirectaso
		return this.props.navigation.navigate('Decks')
	}
	render(){
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		      <Text>Add newz deck - Then deck landing</Text>
		      <TextInput
		        placeholder='insert new deck name'
		      	style={styles.txtinput}
		      	onChangeText={this.handleTextChange}
		      	value = {this.state.deckName}
		   	  />
		   	  <Button
		        title="Create New Deck"
		        onPress={this.handleSubmit}
		      />
		    </View>
			)
	}
}

const styles = StyleSheet.create({
  txtinput: {
    backgroundColor: "#FDFD96",
  },
})

function mapStateToProps({decks}){
	return 'a'
}

export default connect()(AddDeck)