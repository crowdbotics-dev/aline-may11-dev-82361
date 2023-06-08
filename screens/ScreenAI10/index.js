import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Sign up button pressed');
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" autoCompleteType="username" />
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" autoCompleteType="email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry autoCapitalize="none" autoCompleteType="password" />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#b86565",
    color: "#edcaca"
  },
  signUpButton: {
    backgroundColor: '#2a9d8f',
    padding: 12,
    borderRadius: 8
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default SignUpScreen;