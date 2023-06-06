import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";
const products = [{
  id: 1,
  name: "Product 1",
  price: "$10"
}, {
  id: 2,
  name: "Product 2",
  price: "$20"
}, {
  id: 3,
  name: "Product 3",
  price: "$30"
}, {
  id: 4,
  name: "Product 4",
  price: "$40"
}, {
  id: 5,
  name: "Product 5",
  price: "$50"
}];

const StoreApp = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        {products.map(product => <View key={product.id} style={styles.product}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  product: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20
  },
  productName: {
    fontSize: 16
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default StoreApp;