import { Box, Input,Icon, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function LoginForm() {
    return (<SafeAreaView style={{ flex:1 }}>
        <Box flex={1} alignItems='center' justifyContent='center' mx={5}>
            <Input mx='3' my='2' size='md' placeholder="Email" w="100%" 
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml={2} />}          
            />
            <Input mx='3' my='2' size='md' placeholder="Contraseña" w="100%" 
                InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml={2} />}
                type="password"          
            />
            <Button>
                LOGIN
            </Button>
        </Box>
    </SafeAreaView>  );
}

export default LoginForm;