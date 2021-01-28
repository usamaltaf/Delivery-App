import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export  default class Landingpage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Landingpage</Text>
            </View>
        );
    }
}
const  styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    curvedLine: {
        width: "20%",
        height: 100,
        position: "absolute",
        bottom: -25,
        left: "40%",
        borderRadius: 35,
        backgroundColor: "black",
        transform: [{ scaleX: 5 }, { scaleY: 1 }],
      },
});