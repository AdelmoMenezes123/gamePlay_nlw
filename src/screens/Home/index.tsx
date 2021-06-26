import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtoAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointments } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');
    const apointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Legendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '26/06 as 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Legendarios',
                icon: null,
                owner: false
            },
            category: '1',
            date: '26/06 as 20:00h',
            description: 'É hoje que vamos chegar ao challenger sem uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content} >
                <ListHeader
                    title="Partida agendadas"
                    subtitle="Total 6"
                />
                <FlatList
                    data={apointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointments data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}