// ClientRegistrationPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ClientRegistrationPage = () => {
  return (
      <View style={styles.clientRegistrationContainer}>
          {/* Full Name Input */}
          <TextInput
              style={styles.clientRegistrationInput}
              placeholder="Full Name"
          />
          {/* Email Address Input */}
          <TextInput
              style={styles.clientRegistrationInput}
              placeholder="Email Address"
              keyboardType="email-address"
          />
          {/* Username Input */}
          <TextInput
              style={styles.clientRegistrationInput}
              placeholder="Username"
          />
          {/* Password Input */}
          <TextInput
              style={styles.clientRegistrationInput}
              placeholder="Password"
              secureTextEntry={true}
          />
          {/* Organization Code Input */}
          <TextInput
              style={styles.clientRegistrationInput}
              placeholder="Organization Code"
          />
          {/* Register Now Button */}
          <TouchableOpacity style={styles.clientRegistrationButton}>
              <Text style={styles.clientRegistrationButtonText}>Register Now</Text>
          </TouchableOpacity>
      </View>
  );
};

export default ClientRegistrationPage;