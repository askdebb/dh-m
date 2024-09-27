import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn, ZoomOut, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => 
          navigation.navigate('GetStarted') 
        , 5000);
        return () => clearTimeout(timer);
      }, [])
  return (
    <Animated.View style={styles.container}>
      <Animated.View entering={ZoomIn} exiting={ZoomOut}>
        <Image source={require('../../assets/Logo.png')} style={styles.image} />
      </Animated.View>
      <Animated.Text entering={FadeInUp} style={styles.text}>
        DataHaul
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6fdf7',
    gap: 0,
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: -70,
    resizeMode: 'contain',
  },
  text: {
    
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});

export default SplashScreen;
