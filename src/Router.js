import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./pages/Welcome";
import MemberSign from "./pages/MemberSign";
import MemberInfo from "./pages/MemberInfo";
import { Screen } from "react-native-screens";

const Stack=createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>
        <Stack.Screen name="MemberSignScreen" component={MemberSign}/>
        <Stack.Screen name="MemberInfoScreen" component={MemberInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
