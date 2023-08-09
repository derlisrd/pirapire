import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './loginform';
import RegisterForm from './registerform';
const Stack = createNativeStackNavigator();

function AuthStacks() {
    return ( <Stack.Navigator initialRouteName="Login"
      screenOptions={{ 
        
       }}
    >
    <Stack.Screen name="Login" options={{ headerShown:false }} component={LoginForm} />
    <Stack.Screen name="Register" component={RegisterForm} />
  </Stack.Navigator> );
}

export default AuthStacks;