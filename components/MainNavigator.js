import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsScreen from './TabsScreen'
import SingleDeck from './SingleDeck'
import AddQue from './AddQue'
import DoQuiz from './DoQuiz'
import { receiveDecks, handleInitialData } from '../actions'
import { connect } from 'react-redux'
import { setLocalNotification } from '../utils/helpers'

const Stack = createStackNavigator();

class MainNavigator extends Component{
	componentDidMount(){
		handleInitialData().then((result)=>this.props.dispatch(receiveDecks(result)))
		setLocalNotification()
	  	//this.props.dispatch(receiveDecks())
	  }
	render(){
		return(
			<NavigationContainer>
		     <Stack.Navigator>
		        <Stack.Screen name="Home" component={TabsScreen} />
		        <Stack.Screen name="SingleDeck" component={SingleDeck} />
		        <Stack.Screen name="Add Card" component={AddQue} />
		        <Stack.Screen name="Do Quiz" component={DoQuiz} />
		      </Stack.Navigator>
		    </NavigationContainer>
    		)
	}
}

export default connect()(MainNavigator)