import React from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import ProductFavoriteItem from "../../../components/ProductFavoriteItem";
import Header from "../../../components/Header/index";

const MyListings = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate("ProductDetails", { product: item });
    };
    return (
      <ProductFavoriteItem
        icon={require("../../../assets/garbage.png")}
        onPress={onProductPress}
        {...item}
      />
    );
  };
  return (
    <SafeAreaView>
      <Header
        showBack
        onBackPress={() => navigation.goBack()}
        style={styles.header}
        title={"My Listings"}
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
