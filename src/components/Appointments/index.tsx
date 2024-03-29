import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { styles } from './styles';
import { categories } from '../../Utils/Categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string,
    date: string,
    description: string
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointments({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild
    const { primary, on } = theme.colors

    return (
        <RectButton {...rest}>
            <View style={styles.container} >
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {/* {data.guild.name} */}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.fotter}>
                        <View style={styles.dataInfo}>
                            <CalendarSvg />

                            <Text style={styles.data}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.PlayersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text style={[
                                styles.players, { color: owner ? primary : on }
                            ]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </RectButton>
    );
}