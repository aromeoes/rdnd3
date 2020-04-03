import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import DeckScreen from './DeckScreen'
import AddDeck from './AddDeck'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

class TabsScreen extends Component{
	render(){
		return(
			<Tab.Navigator
		        screenOptions={({ route }) => ({
		          tabBarIcon: ({ focused, color, size }) => {
		            let iconName;

		            if (route.name === 'Decks') {
		              iconName = 'ios-albums';
		            } else if (route.name === 'Add Deck') {
		              iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
		            }

		            // You can return any component that you like here!
		            return <Ionicons name={iconName} size={size} color={color} />;
		          },
		        })}
		        tabBarOptions={{
		          activeTintColor: 'tomato',
		          inactiveTintColor: 'gray',
		        }}
		      >
		        <Tab.Screen name="Decks" component={DeckScreen} />
		        <Tab.Screen name="Add Deck" component={AddDeck} />
		    </Tab.Navigator>
			)
	}
}

export default TabsScreen



