import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 32,
        marginTop: 28,
        justifyContent: 'space-between',
    },
    logo: {
        width: 72,
        height: 40
    },
    right: {
        width: 20,
        height: 20
    },
    cover: {
        width: 328,
        height: 160,
        borderRadius: 8,

    },
    containerList: {
        width: '100%',
        marginTop: 16,
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 16,
        alignItems: 'flex-start'
    },
    emptyList: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontfamily: THEME.FONT_FAMILY.REGULAR
    },
    emptyListContext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});