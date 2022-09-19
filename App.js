import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Sem from './src/screens/Sem';
import Notice from './src/screens/Notice';

import { 
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans'
import { 
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';
import SemDetails from './src/screens/SemDetails';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  let[fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
  });

  if(!fontsLoaded){
    <AppLoading /> 
  }

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    
    {/* Home Screen */}
      {/* <Stack.Screen name="Home" component={Home}/> */}
    <Stack.Screen name='Home' options={{
      headerShown:false,
    }}>
       {(props)=><Home {...props} siteName={"Graphic Era Hill University"}/> }
    </Stack.Screen>
     
     {/* About Screen */}
     <Stack.Screen name = "About" component={About} options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold_Italic",
      },
      headerTitle:"About Us",
      headerTitleAlign:"center",

     }}/>

    {/* Contact Screen */}
    <Stack.Screen name = "Contact" component={Contact} options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold_Italic",
      },
      headerTitle:"Contact Us",
      headerTitleAlign:"center",

     }}/>

    {/* Sem Screen It Indicates to chexk the info of the sem you choose*/}
    <Stack.Screen name = "Sem" component={Sem} options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold_Italic",
      },
      headerTitle:"Semester",
      headerTitleAlign:"center",

     }}/>

    {/* Notice Screen It Displays all the notices*/}
    <Stack.Screen name = "Notice" component={Notice} options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold_Italic",
      },
      headerTitle:"Notice",
      headerTitleAlign:"center",

     }}/>

     {/* Semester Details Screen It Displays all the details about Semester*/}
    <Stack.Screen 
    name = "SemDetails" 
    component={SemDetails} 
    options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold_Italic",
      },
      headerTitle:"Semester Details",
      headerTitleAlign:"center",
     }}/>
    
    </Stack.Navigator>
  </NavigationContainer>
  );
} 

  


// {
//   "name": "mini6",
//   "version": "1.0.0",
//   "main": "node_modules/expo/AppEntry.js",
//   "scripts": {
//     "start": "expo start",
//     "android": "expo start --android",
//     "ios": "expo start --ios",
//     "web": "expo start --web",
//     "eject": "expo eject"
//   },
//   "dependencies": {
//     "@expo-google-fonts/josefin-sans": "^0.2.2",
//     "@expo-google-fonts/nunito": "^0.2.2",
//     "@react-navigation/native": "^6.0.10",
//     "@react-navigation/native-stack": "^6.6.2",
//     "expo": "~45.0.0",
//     "expo-app-loading": "~2.0.0",
//     "expo-status-bar": "~1.3.0",
//     "react": "17.0.2",
//     "react-dom": "17.0.2",
//     "react-native": "0.68.2",
//     "react-native-openanything": "^0.0.6",
//     "react-native-safe-area-context": "4.2.4",
//     "react-native-screens": "~3.11.1",
//     "react-native-web": "0.17.7",
//     "expo-checkbox": "~2.1.0",
//     "expo-updates": "~0.13.2"
//   },
//   "devDependencies": {
//     "@babel/core": "^7.12.9"
//   },
//   "private": true
// }





// {
//   "expo": {
//     "name": "Btech CSE App",
//     "slug": "mini6",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/icon.png",
//     "userInterfaceStyle": "light",
//     "splash": {
//       "image": "./assets/splash.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#ffffff"
//     },
//     "updates": {
//       "fallbackToCacheTimeout": 0
//     },
//     "assetBundlePatterns": [
//       "**/*"
//     ],
//     "ios": {
//       "bundleIdentifier":"com.mridul.btechcse",
//       "supportsTablet": true
//     },
//     "android": {
//       "bundleIdentifier":"com.mridul.btechapppk",
//       "buildNumber":"1.0.0",
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/adaptive-icon.png",
//         "backgroundColor": "#FFFFFF"
//       }
//     },
//     "web": {
//       "favicon": "./assets/favicon.png"
//     }
//   }
// }



