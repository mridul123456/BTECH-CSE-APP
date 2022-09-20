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

    {/* Sem Screen. It Indicates to check the info of the sem you choose*/}
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
