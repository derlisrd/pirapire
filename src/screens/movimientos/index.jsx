import { Box, Button, Center, FlatList, Skeleton, Stack,Text } from 'native-base';
import { useEffect,useCallback, useState } from 'react';
import Icono from 'react-native-vector-icons/AntDesign';
import { ApiMovimientos } from '../../Services/api';

function MovimientosScreen() {
    const [lista,setLista] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const getLista = useCallback(async()=>{
        setIsLoading(true)
        let res = await ApiMovimientos();
        if(res.response){
            setLista(res.results)
        }
        setIsLoading(false)
      },[])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {getLista();}
        return () => {isActive = false; ca.abort();};
      }, [getLista]);

  return (
    <Box safeArea>
        {
            isLoading ? <Esqueleto />
        :
      <FlatList
        data={lista}
        renderItem={({ item, index }) => <Renderizado item={item} key={index} />}
      />
        }
    </Box>
  );
}

const Esqueleto = ()=>(
<Center w="100%">
      <Stack w="90%" maxW="400"  space={8} rounded="md"  p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <Stack flex="3" space="4">
          <Skeleton.Text />
          <Stack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </Stack>
        </Stack>
      </Stack>
    </Center>
);

const Renderizado = ({ item }) => (
  <Stack space={2} marginTop={5} marginX={4} alignItems="center" justifyContent="space-between" direction="row">
    <Stack direction="row" alignItems='center' space={2}>
      <Icono name={item.tipo==='ingreso'? 'profile' : 'filetext1'} color={item.tipo==='ingreso'? 'green' : 'red'} size={30} />
      <Stack direction="column">
        <Text fontSize={12}>{item.detalles}</Text>
        <Text fontSize={12}>{item.fecha}</Text>
      </Stack>
    </Stack>

    <Box>
      <Text fontSize={12}>{item.tipo}</Text>
      <Text fontSize={12}>{item.valor}</Text>
    </Box>
  </Stack>
);

export default MovimientosScreen;
