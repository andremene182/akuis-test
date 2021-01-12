import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Dimensions } from "react-native";
import { Card, ButtonGroup } from 'react-native-elements';


import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'


class Charts extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedChart: 0,
            
        };
        this.selectChart = this.selectChart.bind(this)

    }


    

    //Select the chart, user action
    selectChart (selectedIndex) {
        this.setState({
            selectedChart: selectedIndex})
    }

    render(){


        //Renders chart selectors
        const RenderSelector = () => {
            const buttons = ['Strength', 'Position']
            return (
                <ButtonGroup
                    onPress={this.selectChart}
                    selectedIndex={this.state.selectedChart}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />
            )
        }

    
        //Design a Chart, based on react-native-responsive-linechart library
        const DesignChart = (props) =>{
            
            const sintesiData = props.sintesiData;
            const color = props.color;
            const yLabel = props.yLabel;
            var maxValue= Math.max.apply(Math, sintesiData.map(function(o) { return o.y; }))
            var minValue= Math.min.apply(Math, sintesiData.map(function(o) { return o.y; }))

            return (
                <Chart
                    style={{ height: Dimensions.get("window").height-200, width: '100%' }}
                    data={sintesiData}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: 60 }}
                    yDomain={{ min: minValue, max: maxValue }}
                >
                <VerticalAxis tickCount={20} theme={{ labels: { formatter: (v) => v.toFixed(0) + ' ' + yLabel } }} />
                <HorizontalAxis tickCount={5} theme={{ labels: { formatter: (v) => v.toFixed(1) + ' sec' } }}/>
                <Area smoothing='bezier' theme={{ gradient: { from: { color: color }, to: { color: color, opacity: 0.4 } }}} />
                <Line smoothing='bezier' theme={{ stroke: { color: color, width: 1 }, scatter: { default: { width: 1, height: 4, rx: 2 }} }} />
                </Chart>
            )

        }

        //Render charts conditionally
        const RenderChart = () => {
            
                if (this.state.selectedChart == 0){
                    return(
                        <DesignChart sintesiData={this.props.strengthData} color='#ffa502' yLabel='kg'/>
                    )
                } else {
                    return(
                        <DesignChart sintesiData={this.props.positionData} color='#1980ff' yLabel='mm'/>
                    )
                }
            
            
        }

        if(this.props.isConnected){

            return(
                <View style={{flex:1}}>
                    <RenderSelector/>
                    <Card>
                        <RenderChart/>
                    </Card>
                
            </View>
            )
        } else {
                return(
                <View>
                    <Card>
                        <Text>Sintesi is not connected.</Text>
                    </Card>
                </View>)
            
        }

    }
}


export default Charts;