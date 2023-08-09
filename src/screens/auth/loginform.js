import { Input, Icon, Pressable, Box, Button,HStack,Spinner } from 'native-base';
import { SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ApiLogin } from '../../Services/api';
import { useState } from 'react';
import { useAuthProvider } from '../../Providers/AuthProvider';

function LoginForm({navigation}) {
  const [show, setShow] = useState(false);
  const {setIsLogged} = useAuthProvider()
  const [loading,setLoading] = useState(false)
  const [form, setForm] = useState({
    identifier: null,
    password: null,
  });

  const changeText = (name,value)=>{
    setForm({...form,[name]:value})
  }

  const tryLogin = async () => {
    setLoading(true)
    let res = await ApiLogin(form);
    console.log(res);
    if(res.response){
      setIsLogged(true)
    }
    setLoading(false)
  };

  if(loading){
    return <HStack space={8} flex={1} justifyContent="center" alignItems="center">
    <Spinner size="lg" />
  </HStack>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} alignItems="center" justifyContent="center" mx={5}>
        <Input
          mx={3}
          p={3}
          my={2}
          w="100%"
          onChangeText={(text)=>{ changeText('identifier',text)}}
          placeholder="Email"
          InputLeftElement={<Icon marginLeft={3} as={<MaterialIcons name="person" />}  />}
        />
        <Input
          mx={3}
          p={3}
          my={2}
          w="100%"
          placeholder="Password"
          type={show ? 'text' : 'password'}
          onChangeText={(text)=>{ changeText('password',text)}}
          InputLeftElement={<Icon marginLeft={3} as={<MaterialIcons name="lock" />}  />}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                size="md" marginRight={3}
              />
            </Pressable>
          }
        />
        <Button onPress={tryLogin}>LOGIN</Button>
      </Box>
    </SafeAreaView>
  );
}

export default LoginForm;
