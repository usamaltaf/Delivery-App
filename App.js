import React from "react";
import WelcomeScreen from "./Navigation/Index";
import { createAppContainer} from "react-navigation";


export default function App() 
{
  return <WelcomeScreen />; //WE can only pass One screen Because Return only return one thing
}

export default createAppContainer(WelcomeScreen);

