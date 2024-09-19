import { Stack, Link } from 'expo-router';
import { changeIcon, getIcon, resetIcon } from 'react-native-change-icon';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { StyleSheet, Text, View, FlatList, Image, Pressable, Alert } from 'react-native';
import { BareIcon, DrummerIcon, Gutarist, HarpIcon } from '~/svg/Icons';
import { useState } from 'react';

export const LOGOS = [
  {
    iconName: 'DrummerIcon',
    iconSvg: <Image source={require('images/DrummerIcon.png')} width={120} height={120} />,
  },
  {
    iconName: 'SingerIcon',
    iconSvg: <Image source={require('images/BareIcon.png')} width={120} height={120} />,
  },
  {
    iconName: 'Gutarist',
    iconSvg: <Image source={require('images/Guitarist.png')} width={120} height={120} />,
  },
  {
    iconName: 'HarpIcon',
    iconSvg: <Image source={require('images/HarpIcon.png')} width={120} height={120} />,
  },
];

export default function Home() {
  const [presentIcons, setPresetIcon] = useState('');
  const renderItem = ({ item }: any) => (
    <Pressable
      style={styles.item}
      onPress={async () => {
        let iconName = await getIcon();
        console.log(item.iconName, 'fac', iconName);
        if (item.iconName !== iconName) {
          changeIcon(item.iconName);
        } else {
          Alert.alert("That's your present icon");
        }
      }}>
      <Text>{item.iconName}</Text>
      {item.iconSvg}
    </Pressable>
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>Pick a new logo</Text>
            <View style={styles.separator} />
          </View>

          <FlatList
            data={LOGOS}
            renderItem={renderItem}
            keyExtractor={(item) => item.iconName}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          />
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#d1d5db',
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
