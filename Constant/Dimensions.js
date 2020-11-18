import React from 'react'
import {Dimensions} from 'react-native'

/**
 * To get the Dimensions of the mobile Screen So design Fits according to the Diemsion
 */
const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height;

export default{

window:{
 height,
 width,
},
isSmallDevice:width<375
};