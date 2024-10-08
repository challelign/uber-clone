import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import fakeStore, { Product } from "@/data/fakeStore";
import st from "@/utils/style";

const ArrayObject = () => {
  const ListItem = ({ item }: { item: Product }) => {
    return (
      <View>
        <Text style={st.categoryStyle}>category {item.category} </Text>
        <Text>{item.description}</Text>
        <Image source={{ uri: item?.image }} />
      </View>
    );
  };
  return (
    <View>
      <Text>ArrayObject ONE</Text>

      <FlatList
        keyExtractor={(item, index) => item.product_id.toString()}
        data={fakeStore}
        renderItem={({ item }) => (
          <Text style={st.textStyle}>
            {item.name} category {item.category} with comment✍️{" "}
            {item.reviews?.[0].comment}
          </Text>
        )}
      />
      <Text>ArrayObject Two</Text>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fakeStore}
        renderItem={ListItem}
      />
    </View>
  );
};

export default ArrayObject;
