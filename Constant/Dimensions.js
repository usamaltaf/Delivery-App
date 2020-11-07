import React from 'react'
import {Dimensions} from 'react-native'

/**
 * To get the Dimensions of the mobile Screen So design Fits according to the Diemsion
 */
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;

export{
    windowHeight,
    windowWidth
}