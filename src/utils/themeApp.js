import { extendTheme } from "native-base";

export const themeApp = extendTheme({
  fonts:{
    body:"Montserrat",
    heading:"Montserrat",
    mono:"Montserrat",
  },
  config:{
    initialColorMode:'light'
  }
});

