import { TabNavigator } from 'react-navigation';

import {
  HomeScreen,
  SettingsScreen
} from '../screens';

export default TabNavigator({
  Home: {screen: HomeScreen },
  Settings: {screen: SettingsScreen }
});
