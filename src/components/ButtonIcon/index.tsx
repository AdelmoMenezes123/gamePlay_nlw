import React from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { styles } from "./styles";

type Props = TouchableOpacity & {
    title: string;
}
export function ButtonIcon({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.iconWrapper} {...rest}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}