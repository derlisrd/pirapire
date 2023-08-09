import { Box, Fab,Icon } from 'native-base';
import { AntDesign } from "@expo/vector-icons";


function HomeScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">

      <Fab renderInPortal={false} shadow={2} size="lg" icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
    </Box>
  );
}

export default HomeScreen;
