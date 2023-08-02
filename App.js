
import { NativeBaseProvider} from "native-base";
import Main from "./src/main";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}

