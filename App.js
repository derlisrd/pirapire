import { NativeBaseProvider } from 'native-base';
import Main from './src/main';
import { AuthProvider } from './src/Providers/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { themeApp } from './src/utils/themeApp';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  return (
    <NativeBaseProvider theme={themeApp}>
      <NavigationContainer>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
