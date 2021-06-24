import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";

import { SignIn } from "./src/screens/SignIn";

import AppLoad from "expo-app-loading";

export default function App() {
    const [fontsReload] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    });

    if (!fontsReload) {
        <AppLoad />
    }
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <SignIn />
        </>
    )
}
