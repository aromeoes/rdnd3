import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Button, TextInput } from 'react-native';
import { AsyncStorage } from 'react-native'
import { apiAddCard } from '../utils/api'
import { addQuestion } from '../actions'
import { connect } from 'react-redux'

class AddQue extends Component{
	state={
		question:'',
		answer:'',
	}
	handleTextChange(name){
		return (text) => {
			this.setState({[name]:text})
		}
	}
	handleSubmit = (deck) =>{
		const card = {question:this.state['question'],answer:this.state['answer']};
		//Add to DB
		apiAddCard({card:card,deck:deck});
		//Redux
		this.props.dispatch(addQuestion({card,deck}))
		return this.props.navigation.navigate('SingleDeck', {deckId:deck,cardCount:this.props.route.params.cardCount+1})
	}
	render(){
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		      <Text>Add Q for deck: {this.props.route.params.deckId}</Text>
		      <TextInput
		        placeholder='insert new question'
		      	style={styles.txtinput}
		      	onChangeText={this.handleTextChange('question')}
		      	value = {this.state.question}
		   	  />
		   	  <TextInput
		        placeholder='insert Answer'
		      	style={styles.txtinput}
		      	onChangeText={this.handleTextChange('answer')}
		      	value = {this.state.answer}
		   	  />
		   	  <Button
		        title="ADD Card"
		        onPress={() => this.handleSubmit(this.props.route.params.deckId)}
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


export default connect()(AddQue)