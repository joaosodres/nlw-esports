import { useState, useEffect } from 'react';

import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [discordDuoSelected, setDiscordDuoSelected] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    async function getDiscordUser(adsId: string) {
        fetch(`http://10.0.0.103:3333/ads/${adsId}/discord`)
            .then(response => response.json())
            .then(data => setDiscordDuoSelected(data.discord))
            ;
    }

    useEffect(() => {
        fetch(`http://10.0.0.103:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data))
            ;

    }, []);



    return (
        <Background>
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}

                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.right}>

                    </View>


                </View>

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar"
                />

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />

                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (

                        <DuoCard
                            data={item}
                            onConnect={() => getDiscordUser(item.id)}
                        />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContext]}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyList}>
                            N??o h?? an??ncios publicados ainda
                        </Text>
                    )}
                />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={() => setDiscordDuoSelected('')}
                />

            </SafeAreaView>
        </Background>

    );
}