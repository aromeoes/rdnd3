import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class DoQuiz extends Component{
	componentDidMount(){
		clearLocalNotification()
		.then(setLocalNotification)
	}
	state={
		correct:0,
		total:0,
		question:true,
	}
	onPressCorrect = () =>{
		console.log(this.state.correct,this.state.total,'ref')
		this.setState(()=>({
			correct:this.state.correct+1,
			total:this.state.total+1,
			question:true,
		}))
	}
	onPressIncorrect = () =>{
		console.log(this.state.correct,this.state.total,'ref')
		this.setState(()=>({
			correct:this.state.correct,
			total:this.state.total+1,
			question:true,
		}))
	}
	onPressInvert = () =>{
		this.setState(()=>({
			question:!this.state.question
		}))
	}
	resetQuiz = () =>{
		this.setState(()=>({
			correct:0,
			total:0,
			question:true,
		}))
	}
	render(){
		if (this.props.cards.cards.length<1){
			return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Not possible, add cards please</Text></View>)
		}
		if (this.state.total==this.props.cards.cards.length){
			return(
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>Quiz finished. You had {this.state.correct} Correct over {this.state.total}</Text>
					<Button
					  onPress={this.resetQuiz}
					  title="Do Quiz once again"
					  color="#841584"
					  accessibilityLabel="Learn more about this purple button"
					/>
				</View>)
		}
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			  <Text>Answered:{this.state.total}, Total Cards:{this.props.cards.cards.length}</Text>
			  <Text>You are looking at card number: {this.state.total}</Text>
		      <Text style={{fontSize:30}}>{(this.state.question) ? this.props.cards.cards[this.state.total]['question']: this.props.cards.cards[this.state.total]['answer']}</Text>
		      <Button
		        title={(this.state.question) ? "See Answer": "See Question"}
		        onPress={this.onPressInvert}
		      />
		      <Button
		      	color='#006200'
		        title="Correct"
		        onPress={this.onPressCorrect}
		      />
		      <Button
		      	color='#8B0000'
		        title="Incorrect"
		        onPress={this.onPressIncorrect}
		      />
		    </View>
			)
	}
}

function mapStateToProps({decks},{route}) {
	const cards = decks[route.params.deckId]
	return{
		cards,
	}

}

export default connect(mapStateToProps)(DoQuiz)