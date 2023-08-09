import { Box, Button, Text } from 'native-base';

function InitialStack({navigation}) {
  return (
    <Box flex={1} justifyContent="flex-end" alignItems="center" backgroundColor="gray.200">

      <Button marginY={30} pad width="3/4" backgroundColor="#000000" onPress={()=>{ navigation.navigate('Login')}} rounded={'lg'} size={'lg'}>
        LOGIN
      </Button>
      <Text marginBottom={100} fontSize={16}>
        No tienes una cuenta? <Text fontWeight="bold"> Registrate</Text>{' '}
      </Text>
    </Box>
  );
}





export default InitialStack;
