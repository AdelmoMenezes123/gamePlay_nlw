import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignSelf: 'center'
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 13,
        marginRight: 24
    },
    fotter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dataInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    PlayersInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    data: {
        fontFamily: theme.fonts.title500,
        color:theme.colors.heading,
        fontSize:13,
        marginLeft:7
    },
    players: {
        fontFamily: theme.fonts.title500,
        fontSize:13,
        marginLeft:7,
        marginRight:24
    },
    name: {

    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    }
})