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

    /*
    scanAndConnect(deviceName) {
        this.bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                //error during the scan
                return
            }
    
            if (device.name === deviceName) {
                
                //Sintesi was found, so stopDeviceScan()
                this.manager.stopDeviceScan();
                
                //Promise for device connection
                device.connect()
                    .then((device) => {
                        //Discovering Services and Characteristics
                        return device.discoverAllServicesAndCharacteristics()
                    })
                    .then((device) => {
                        //work with services and charateristics
                    })
                    .catch((error) => {
                        // Handle errors
                    });
            }
        });
    }
    */


    //Connect to Sintesi Device via BLE
    connectToSintesi(){
        //Here there'll be the bleManager logic to connect the app to the Sintesi Device via BLE
        //this.scanAndConnect('SINTESI');
       
        /*Simulation*/
        this.props.connectToSintesi(!this.props.isConnected);

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