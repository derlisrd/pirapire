import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext,useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}) {

    const [isLogged,setIsLogged] = useState(false)
    const [loading,setLoading] = useState(true)
    const initialUserData = {
        token:null,
        email:null,
        name:null
    }
    const [userData,setUserData] = useState(initialUserData)

    const setearLogin = async()=>{
      
      //await AsyncStorage
    }

    useEffect(()=>{
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('userData');
              if (value !== null) {
                setUserData(JSON.parse(value))
              }
            } catch (e) {
              console.log(e);
            }
          };
          getData();
    },[])

    const values = {userData,loading,isLogged,setIsLogged};

    return (<AuthContext.Provider value={values}>{children}</AuthContext.Provider>  );
}
function useAuthProvider() {
  const {userData,loading,isLogged,setIsLogged} = useContext(AuthContext)
  return {userData,loading,isLogged,setIsLogged}
}

export {AuthProvider,useAuthProvider}

