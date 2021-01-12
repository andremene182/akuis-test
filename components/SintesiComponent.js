import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { BleManager } from "react-native-ble-plx";


class Sintesi extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
        //this.bleManager = new BleManager() 
    }

    //Connect to Sintesi Device via BLE
    connectToSintesi(){
        //Here there'll be the bleManager logic to connect the app to the Sintesi Device via BLE

        /*Simulation*/
        var isConnected = true;
        this.props.connectToSintesi(isConnected);

        //Generate random data
        this.props.strengthData(this.generateRandomData(60,3,50));
        this.props.positionData(this.generateRandomData(60,0,2000));
    }
    
    //Generate Random Data
    generateRandomData(maxSeconds,minRange,maxRange){

        var minVal=Math.floor(Math.random() * (maxRange - minRange) + minRange);
        var maxVal=Math.floor(Math.random() * (maxRange - minVal) + minVal);

        var i=0;
        var rndData=[];
        for(i;i<=maxSeconds;i++){
            var y = Math.floor(Math.random() * (maxVal - minVal) + minVal);
            rndData.push({ x: i, y: y });
        }        
        return(rndData);
    }


    render(){

        //Render the Connect to Sintesi button
        const RenderConnectToSintesi = () => {
            return(
                <Button
                onPress={() => this.connectToSintesi()}
                title={this.props.isConnected ? 'Sintesi is Connected ' : 'Connect to Sintesi '} 
                icon={this.props.isConnected ? <Icon name='bluetooth-connect' size={24} /> : <Icon name='bluetooth-off' size={24}  />}
                iconRight={true}
                titleStyle={{color: 'black'}}
                buttonStyle={{marginRight: 15,backgroundColor:'white'}}/>
                
            );
        }


        return(
            <RenderConnectToSintesi/>
        )

    }
}


export default Sintesi;