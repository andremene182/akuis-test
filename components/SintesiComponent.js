import React, {Component} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { BleManager } from "react-native-ble-plx";

class Sintesi extends Component{

    constructor(props){
        super(props);
        this.state = {
            isConnected: false,
            bleManager: new BleManager()
        };
        
    }

    render(){

        const connectToSintesi = () => {
            //const bleManager = new BleManager();
        }

        const RenderConnectToSintesi = () => {
            return(
                <Card>
                    <Card.Image source={require('./images/sintesi.png')}>
                    <Button 
                        buttonStyle={{ backgroundColor:"black", borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 50}}
                        title=' Connect to Sintesi' onPress={connectToSintesi()} />
                    </Card.Image>
                
                </Card>

            );
        }


        return(
            <RenderConnectToSintesi/>
        )

    }
}


export default Sintesi;