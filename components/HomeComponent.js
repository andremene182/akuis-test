import React, {Component} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';



import Sintesi from './SintesiComponent';


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){

        return(
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Sintesi/>
                </View>
            </ScrollView>
        )

    }
}


export default Home;