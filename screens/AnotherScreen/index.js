import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { custom, deepStyle } from "./styles";

const StyleSheetScreen = () => (
  <View style={page.container}>
    <Text style={flattenStyle}>React Native - this is React native</Text>
    <Text>Flatten Style</Text>
    <Text style={[page.code, { marginBottom: 30 }]}>{JSON.stringify(flattenStyle, null, 2)}</Text>
    <Text style={[page.text, typography.header, custom.font]}>This is Studio parsed</Text>
    <Text style={deepStyle}>Deep imported works.</Text>


  </View>
);

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36,
  },
});

const flattenStyle = StyleSheet.flatten([page.text, typography.header, custom.font]);

export default StyleSheetScreen;
