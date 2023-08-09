import { useAuthProvider } from "./Providers/AuthProvider";
import MainScreens from "./screens/MainScreens";
import AuthStacks from "./screens/auth/AuthStacks";





function Main() {
  const {isLogged} = useAuthProvider()
  return isLogged ? <MainScreens /> : <AuthStacks />
}

export default Main;
