import { Input, Icon, Pressable, Box, Button, HStack, Spinner, Text, Alert } from 'native-base';
import Icono from 'react-native-vector-icons/Octicons';
import { SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ApiLogin } from '../../Services/api';
import { useState } from 'react';
import { useAuthProvider } from '../../Providers/AuthProvider';

function LoginForm({ navigation }) {
  const [show, setShow] = useState(false);
  const [error,setError] = useState({active:false,message:''})
  const { setIsLogged } = useAuthProvider();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    identifier: null,
    password: null,
  });

  const changeText = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const tryLogin = async () => {
    setLoading(true);
    let res = await ApiLogin(form);
    //console.log(res);
    if (res.response) {
      setIsLogged(true);
    }else{
      setError({active:true,message:"Errores de credenciales"})
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <HStack space={8} flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
      </HStack>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} alignItems="center" justifyContent="center" mx={5}>
        <Box justifyContent="center" alignItems="center" marginY={5}>
          <Icono name="feed-person" size={90} color="#000" />
        </Box>
        {error.active && <Alert status='error' variant='outline' colorScheme='error' width='3/4' >
          {error.message}
        </Alert>}
        <Input
          mx={3}
          p={3}
          my={2}
          w="100%"
          fontFamily="body"
          onChangeText={(text) => {
            changeText('identifier', text);
          }}
          placeholder="Email"
          InputLeftElement={<Icon marginLeft={3} as={<MaterialIcons name="person" />} />}
        />
        <Input
          mx={3}
          p={3}
          my={2}
          w="100%"
          fontFamily="body"
          placeholder="Password"
          type={show ? 'text' : 'password'}
          onChangeText={(text) => {
            changeText('password', text);
          }}
          InputLeftElement={<Icon marginLeft={3} as={<MaterialIcons name="lock" />} />}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                size="md"
                marginRight={3}
              />
            </Pressable>
          }
        />
        <Button
          marginY={30}
          pad
          width="3/4"
          backgroundColor="#000000"
          onPress={tryLogin}
          rounded={'lg'}
          size={'lg'}>
          ENTRAR
        </Button>

          <Pressable
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text fontSize={16} fontWeight="bold">No tienes cuenta? Registrate</Text>
          </Pressable>
      </Box>
    </SafeAreaView>
  );
}

export default LoginForm;
