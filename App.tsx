
import React, { useEffect, useState } from 'react';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Home from './src/screens/app/Home';
import { Image } from 'react-native';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';


const IOS_CLIENT_ID = ''
const GOOGLE_WEB_CLIENT_ID='125858223879-fj12qtqvdkf5c2u79lsvfbb6s9edbk4o.apps.googleusercontent.com'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="CreateListing" component={CreateListing}/>
    </Stack.Navigator>
  )
}

const Tabs = () => (//Por que carajo aca es con () en vez de {} nunca lo sabremos
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let icon;

      if (route.name === 'Home') {
        icon = focused
          ? require('./src/assets/tabs/home_focused.png')
          : require('./src/assets/tabs/home.png');
      } else if (route.name === 'ProfileStack') {
        icon = focused  
        ? require('./src/assets/tabs/profile_focused.png')
        : require('./src/assets/tabs/profile.png');
      }
      else if (route.name === 'Favorites') {
        icon = focused  
        ? require('./src/assets/tabs/favorites_focused.png')
        : require('./src/assets/tabs/favorites.png');
      }

      // You can return any component that you like here!
      return <Image style={{width: 24, height: 24}} source={icon}/>;
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      borderTopColor: colors.lightGrey,
      backgroundColor: colors.white
    }
  })}>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Favorites" component={Favorites} />
  <Tab.Screen name="ProfileStack" component={ProfileStack} />
</Tab.Navigator>
)

function App(): JSX.Element {
  var isSignedIn = true;
  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []) 

  const theme = {
    colors: {
      background: colors.white,
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash}/>
              <Stack.Screen name="SignIn" component={SignIn}/>
              <Stack.Screen name="Signup" component={Signup}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
