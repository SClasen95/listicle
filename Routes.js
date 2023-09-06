import React, { useContext, useEffect, useState } from "react";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import SignIn from "./src/screens/auth/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/utils/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Home from "./src/screens/app/Home";
import { Image } from "react-native";
import ProductDetails from "./src/screens/app/ProductDetails";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";
import MyListings from "./src/screens/app/MyListings";
import { UserContext } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTokenToAxios } from "./src/utils/request";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="CreateListing" component={CreateListing} />
      <Stack.Screen name="MyListings" component={MyListings} />
    </Stack.Navigator>
  );
};

const Tabs = () => (
  //Por que carajo aca es con () en vez de {} nunca lo sabremos
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === "Home") {
          icon = focused
            ? require("./src/assets/tabs/home_focused.png")
            : require("./src/assets/tabs/home.png");
        } else if (route.name === "ProfileStack") {
          icon = focused
            ? require("./src/assets/tabs/profile_focused.png")
            : require("./src/assets/tabs/profile.png");
        } else if (route.name === "Favorites") {
          icon = focused
            ? require("./src/assets/tabs/favorites_focused.png")
            : require("./src/assets/tabs/favorites.png");
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        borderTopColor: colors.lightGrey,
        backgroundColor: colors.white,
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const Routes = () => {
  const {user, setUser} = useContext(UserContext);
  
  console.log("user context",user);

  useEffect(() =>{
    (async () => {
        const token = await AsyncStorage.getItem('auth_token')
        addTokenToAxios(token)
        setUser({token})
    })()
  }, [])

  useEffect(() => {
    if(user?.token){
        addTokenToAxios(user?.token)
    }
  }, [user])

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.token ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(Routes);
