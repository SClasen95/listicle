
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const IOS_CLIENT_ID = ''
const GOOGLE_WEB_CLIENT_ID='125858223879-fj12qtqvdkf5c2u79lsvfbb6s9edbk4o.apps.googleusercontent.com'
function App(): JSX.Element {
  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []) 
  return (
    <SafeAreaView>
      {/* <Splash/> */}
      <SignIn/>
    </SafeAreaView>
  );
}

export default App;
