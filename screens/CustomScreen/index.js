import { Text, View, StyleSheet } from "react-native";

function HelloWorld() {
  return <View style={styles.container}>
      <Text style={[styles.paragraph, styles.colors]}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  colors: {
    color: "#FF0000"
  }
});
export default HelloWorld;