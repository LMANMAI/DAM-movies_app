import ActionButton from "@/components/ui/ActionButton";
import CardRow from "@/components/ui/CardRow";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const POPULARES = [
  {
    id: 1,
    title: "El Conjuro 4",
    poster: "https://image.tmdb.org/t/p/w342/iRAZIEAqQATbXVqTuZPvnL0UQ2.jpg",
  },
  {
    id: 2,
    title: "La Princesa Perdida",
    poster: "https://image.tmdb.org/t/p/w342/mG8bY3YfX5R32rVQvV3G0MyoVoR.jpg",
  },
  {
    id: 3,
    title: "Vengador Tóxico",
    poster: "https://image.tmdb.org/t/p/w342/6Gk5CmvF2CqYwqSDSBxPTsCkXz8.jpg",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="h-20 w-20 bg-red-500" />
        <View className="px-4 pt-2">
          <View className="rounded-3xl overflow-hidden">
            <Image
              source={require("@/assets/hero.png")}
              className="w-full h-48"
              resizeMode="cover"
            />
          </View>
          <View className="mt-3 items-center">
            <Text className="text-2xl font-bold text-neutral-900">Joyts</Text>
            <Text className="text-base text-neutral-700">
              Portal de Películas
            </Text>
          </View>
        </View>

        <View className="px-4 mt-5">
          <View className="bg-[#EF4444] rounded-3xl p-3">
            <View className="flex-row gap-3">
              <ActionButton
                label="Populares"
                icon={
                  <MaterialIcons name="grid-view" size={18} color="white" />
                }
                onPress={() => {}}
              />
              <ActionButton
                label="Mejores calificadas"
                icon={<Feather name="thumbs-up" size={18} color="white" />}
                onPress={() => {}}
              />
            </View>

            <View className="h-3" />

            <View className="flex-row gap-3">
              <ActionButton
                label="Próximamente en cines"
                icon={
                  <MaterialCommunityIcons
                    name="calendar-month-outline"
                    size={18}
                    color="white"
                  />
                }
                onPress={() => {}}
              />
              <ActionButton
                label="Todas las películas"
                icon={
                  <MaterialCommunityIcons
                    name="ticket-outline"
                    size={18}
                    color="white"
                  />
                }
                onPress={() => {}}
              />
            </View>
          </View>
        </View>

        <CardRow title="Populares" data={POPULARES} onPressItem={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}
