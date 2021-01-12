import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Sintesi from './SintesiComponent';
import Charts from './ChartsComponent';



class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        isConnected: false,
        sintesiStrengthData:[],
        sintesiPositionData:[]
    };
  }





  render() {

    //Connect to Sintesi 
    //Function triggered from SintesiComponent 
    const connectToSintesi = (isConnected) => {
      this.setState({
        isConnected: isConnected
      })
    }

    //Get Sintesi Strength Data
    //Get Strength Data from SintesiComponent
    const getSintesiStrengthData = (sintesiStrengthData) => {
      this.setState({
        sintesiStrengthData: sintesiStrengthData
      })
    }

    //Get Sintesi Position Data
    //Get Position Data from SintesiComponent
    const getSintesiPositionData = (sintesiPositionData) => {
      console.log(sintesiPositionData);
      this.setState({
        sintesiPositionData: sintesiPositionData
      })
    }
    

    /** HOME NAVIGATOR **/
    const HomeNavigator = createStackNavigator();

    const MenuIcon = (props) => {
      return(
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => props.navigation.toggleDrawer()} />
      );
    }

    const HomeNavigatorScreen = () => {
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
                    },
                    headerRight: () => (
                      <Sintesi positionData={getSintesiPositionData.bind(this)} strengthData={getSintesiStrengthData.bind(this)} connectToSintesi={connectToSintesi.bind(this)} isConnected={this.state.isConnected} />),
                }} >

                <HomeNavigator.Screen
                    name="SINTESI"
                    options = {
                      ({navigation}) => ({
                        headerLeft: () => <MenuIcon navigation={navigation} />
                      })
                    } >    
                  {(props) => <Charts  {...props} isConnected={this.state.isConnected} strengthData={this.state.sintesiStrengthData} positionData={this.state.sintesiPositionData} />}   
                  </HomeNavigator.Screen>         
                </HomeNavigator.Navigator>
        );
    }

    /**DRAWER NAVIGATOR **/
    const Drawer = createDrawerNavigator();

    function MainNavigator() {
        return(

            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Sintesi" component={HomeNavigatorScreen} />
              
              {/*Dummy Drawer Screens*/}
              <Drawer.Screen name="Settings" component={HomeNavigatorScreen} />
              <Drawer.Screen name="User" component={HomeNavigatorScreen} /> 
              <Drawer.Screen name="Logout" component={HomeNavigatorScreen} /> 

            </Drawer.Navigator>

        );
    }
 
    return (
      <NavigationContainer>   
        <MainNavigator />
      </NavigationContainer>
    );
  }
}


  
export default Main;