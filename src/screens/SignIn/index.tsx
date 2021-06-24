import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Illustration from "../../assets/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";


export function SignIn() {
    const navegation = useNavigation()

    function handleSignIn(){
        navegation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image
                source={Illustration}
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize{`\n`}
                    suas jogatinas{`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos  para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title="Entrar com Discord"
                    onPress={handleSignIn}
                />
            </View>
        </View>

    )
}
