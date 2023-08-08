import { useEffect } from "react";
import { createContext,useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}) {

    const [loading,setLoading] = useState(true)
    const initialUserData = {
        token:null,
        login:false,
        email:null,
        name:null
    }
    const [userData,setUserData] = useState(initialUserData)


    useEffect(()=>{
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('userData');
              if (value !== null) {
                setUserData(JSON.parse(value))
              }
            } catch (e) {
              // error reading value
            }
          };
          getData();
    },[])

    const values = {userData,loading};

    return (<AuthContext.Provider value={values}>{children}</AuthContext.Provider>  );
}

export default AuthProvider;