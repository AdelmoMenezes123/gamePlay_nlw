import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';

export type GuildProps = {
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string,
    date: string,
    description: string
}

type Props = RectButtonProps & {
    date: AppointmentProps;
}

export function Apointman({ date, ...rest }: Props) {
    return (
        <RectButton {...rest}>
            <View style={styles.container} >
                {/* <GuildIcon></GuildIcon> */}
            </View>

        </RectButton>
    );
}