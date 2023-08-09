import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home';
import SettingScreen from './settings';

const Tab = createMaterialBottomTabNavigator();

const {Navigator, Screen} = Tab; 

function ScreenMaster() {
  return (
    <Navigator initialRouteName='Home'
    activeColor="#e91e63"
    inactiveColor='#000000'
    barStyle={{ fontFamily:'Montserrat' }}
    >
      <Screen name="Home" component={HomeScreen} 
        options={{
            tabBarLabel: 'Inicio',
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
      />
      <Screen name="Mov" component={SettingScreen}
        options={{
            tabBarLabel: 'Mov',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={26} />
            ),
          }}
      />
      <Screen name="Settings" component={SettingScreen}
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
      />
    </Navigator>
  );
}

export default ScreenMaster;