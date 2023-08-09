import { Box, Text,Button } from 'native-base';
import { useAuthProvider } from '../../Providers/AuthProvider';

function SettingScreen() {
  const {setIsLogged} = useAuthProvider()
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button onPress={()=>{ setIsLogged(false) }}>LOG OUT</Button>
    </Box>
  );
}

export default SettingScreen;
