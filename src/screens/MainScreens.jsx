import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenMaster from './ScreenMaster';

const Stack = createNativeStackNavigator();

function MainScreens() {
  return (
    <Stack.Navigator initialRouteName="Master"
      screenOptions={{ 
        
       }}
    >
      <Stack.Screen options={{ headerShown:false }} name="Master" component={ScreenMaster} />
    </Stack.Navigator>
  );
}

export default MainScreens;
