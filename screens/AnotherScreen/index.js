import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { custom } from "./styles";

const StyleSheetScreen = () => <View style={page.container}>
    <Text style={flattenStyle}>React Native - this is React native</Text>
    <Text>Flatten Style</Text>
    <Text style={[page.code, page.MIgLOWpE]}>{JSON.stringify(flattenStyle, null, 2)}</Text>
    <Text style={[page.text, typography.header, custom.font]}>This is Studio parsed result</Text>
    <Text>The whole point of this screen is to detect disparities of merging styles from codegen and React original merge strategy.</Text>
  </View>;

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea'
  },
  MIgLOWpE: {
    marginBottom: 30
  }
});
const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36
  }
});
const flattenStyle = StyleSheet.flatten([page.text, typography.header, custom.font]);
export default StyleSheetScreen;