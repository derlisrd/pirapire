import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './loginform';
import RegisterForm from './registerform';
import InitialStack from './initialstack';
const Stack = createNativeStackNavigator();

function AuthStacks() {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen name="Initial" options={{ headerShown: false }} component={InitialStack} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginForm} />
      <Stack.Screen name="Register" component={RegisterForm} />
    </Stack.Navigator>
  );
}

export default AuthStacks;
