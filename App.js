import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './Navigation/RootStackNavigator';

const App =()=>{
  return(
    <NavigationContainer>
    <RootStackScreen navigation={WelcomeScreen} />
    </NavigationContainer>
  )
}
export default App;

