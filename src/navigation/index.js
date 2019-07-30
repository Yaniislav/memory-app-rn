import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

const appNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  },
}, {
  headerMode: 'none',
});

export default createAppContainer(appNavigator);
