import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';

import Home from './HomeComponent';


const HomeNavigator = createStackNavigator();



function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <HomeNavigator.Screen
                name="SINTESI"
                component={Home}
            />                
        </HomeNavigator.Navigator>
    );
}


const Drawer = createDrawerNavigator();

function MainNavigator() {
    return(

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Sintesi" component={HomeNavigatorScreen} /> 
        </Drawer.Navigator>

    );
}

{/** Navigation Part 2 - Home, Contact, About and Drawer Navigation */}


/*
const Drawer = createDrawerNavigator();

function MainNavigator() {
    return(

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
          <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
          <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
          <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
        </Drawer.Navigator>

    );
}*/
  
class Main extends Component {

  render() {
 
    return (
      <NavigationContainer>   
        <MainNavigator />
      </NavigationContainer>
    );
  }
}


  
export default Main;