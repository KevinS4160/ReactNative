import { Image, StyleSheet, Platform, Linking, Text, } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/KUKA_Collaborative_Robot.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Team8 GabAI</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Introduction</ThemedText>
        <ThemedText>
          Experience seamless collaboration with our 
          state of the art Cobot, designed to work side-by-side with humans in real-time
          </ThemedText>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">This App</ThemedText>
        <ThemedText>
          Our app allows you to intuitively control and monitor the Cobot 
          as it learnes from human demonstration.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Lagao Miles Joshua D. </ThemedText>
        <ThemedText>
          I'm a 4th-Year student at the Technological Institute of the Philippines, and my track
          elective is System Administrator. </ThemedText>
            <ThemedText>Here is my Link of my Facebook:
            <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100001569941216')}>
          Miles Facebook Profile
          </Text>
        </ThemedText>

        <ThemedText type="subtitle">Sumaya Kevin Roi A.</ThemedText>
        <ThemedText>
          I'm a Computer Engineering student from Antipolo city, currently focused o exploring 
          advanced technology and engineering concept.</ThemedText>
          <ThemedText>Here is my Link of my Facebook: 
            <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com/Kevinajero.Sumaya/')}>
             Kevin's Facebook Profile"
          </Text>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 500,
    bottom: 0 ,
    left: 0,
    position: 'absolute',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
