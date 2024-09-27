import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Animated, { ZoomIn, ZoomOut, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleSignIn = () => {
  
    if (email && password) {
      Alert.alert('Success', 'Signed in successfully!');
      
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
      <Animated.View style={styles.logoContainer}>
      <Animated.View entering={ZoomIn} exiting={ZoomOut}>
        <Image source={require('../../assets/Logo.png')} style={styles.image} />
      </Animated.View>

      <Animated.Text entering={FadeInUp} style={styles.text}>
        DataHaul
      </Animated.Text>
    </Animated.View>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack() }>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    
    backgroundColor: '#f6f6f6',
  },
  logoContainer:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -110,
    height: 200, 
  },
  
  image: {
    width: 250,
    height: 250,
    top: 0,
    marginTop: -120,
  
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
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,  
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10, 
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#007bff',
    textAlign: 'center',
  },
});
