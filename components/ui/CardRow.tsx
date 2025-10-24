import React from "react";
import { FlatList, Text, View } from "react-native";
import MovieCard from "./MovieCard";

type Movie = {
  id: string | number;
  title: string;
  poster: any;
};

type Props = {
  title: string;
  data: Movie[];
  onPressItem?: (m: Movie) => void;
};

export default function CardRow({ title, data, onPressItem }: Props) {
  return (
    <View className="mt-6">
      <Text className="text-base font-semibold text-neutral-900 mb-3 px-4">
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={onPressItem} />
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}
