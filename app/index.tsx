import { Stack, Link } from 'expo-router';
import { changeIcon, getIcon, resetIcon } from 'react-native-change-icon';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />

        <Button
          onPress={() => {
            changeIcon('Gutarist');
          }}
          title="Show Details"
        />
      </Container>
    </>
  );
}
