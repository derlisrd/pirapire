import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home';
import SettingScreen from './settings';
import { backgroungPrimary, primaryColor, secondaryColor } from '../utils/colors';
import { useTheme } from "react-native-paper";
import MovimientosScreen from './movimientos';

const Tab = createMaterialBottomTabNavigator();

const { Navigator, Screen } = Tab;

function ScreenMaster() {
  const theme = useTheme();
   theme.colors.secondaryContainer = "transparent"
  return (
    <Navigator
      theme={theme}
      initialRouteName="Home"
      swipeEnabled={true}
      activeColor={primaryColor}
      inactiveColor={secondaryColor}
      labeled={false}
      barStyle={{ backgroundColor: backgroungPrimary, borderTopColor:'transparent' }}
      >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="home" color={color} focused={focused} size={26} />,
        }}
      />
      <Screen
        name="Mov"
        component={MovimientosScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
        }}
      />
    </Navigator>
  );
}

export default ScreenMaster;
