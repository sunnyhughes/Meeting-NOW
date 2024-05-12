// InitialScreen.js
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const InitialScreen = () => {
  return (
    <View style={styles.container}>
        {/* Logo Image */}
        <Image
         source={require('./assests/logo.png')} 
         style={styles.logo}
         />
        {/* App Name */}
        <Text style={styles.appName}>Meeting NOW</Text>

        {/* Welcome message */}
      <Text style={styles.welcomeMessage}>Welcome to Meeting NOW. Sign in to access your account.</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          />
      {/* Sign In Button*/}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Registration Message */}
      <TouchableOpacity>
        <Text style={styles.registrationMessage}>First time using the app? Click here to begin registration.</Text>
      </TouchableOpacity>
      {/* Company Name */}
      <Text style={styles.companyName}>Your Company Name</Text>

      {/* Add any additional content or components as needed */}
</View>
  );
};

export default InitialScreen;