import React from 'react';
import { StyleSheet } from 'react-native';

export const custom = StyleSheet.create({
  deep: {
    color: "pink", fontSize: 12, fontWeight: "bold"
  },
  font: {
    color: '#00ff00',
  },
});

export const deepStyle = custom.deep;
