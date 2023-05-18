import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { custom, deepStyle } from "./styles";

const SimpleScreen = () => <View style={page.container}>
    <Text style={[page.text, custom.font]}>Hello World!</Text>
    <Text>The title above is an external stylesheet and a local one.</Text>
    <Text style={deepStyle}>Single object from external file.</Text>
    <Text style={custom.background}>Normal stylesheet from external file.</Text>
    <Text style={[page.text, deepStyle]}>
      Merging local and single object from external file.
    </Text>
    <Text style={[page.text, deepStyle, page.ldLMSOTA]}>
      Merging local and single object from external file and inline.
    </Text>
    <Text style={[deepStyle, page.MDqIshca]}>Deep external and inline.</Text>
    <Text style={[custom.background, page.XhZYALfA]}>
      Normal external from stylesheet and inline.
    </Text>
    <Text style={[page.text, page.QBdsEBQV]}>Local style and inline</Text>
  </View>;

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  ldLMSOTA: {
    fontSize: 20
  },
  MDqIshca: {
    fontSize: 15
  },
  XhZYALfA: {
    fontSize: 20,
    marginTop: 10
  },
  QBdsEBQV: {
    fontSize: 20,
    marginTop: 10
  }
});
export default SimpleScreen;