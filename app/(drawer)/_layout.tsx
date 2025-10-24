// app/(drawer)/_layout.tsx
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        overlayColor: "rgba(0,0,0,0.25)",
        drawerStyle: {
          width: 300,
          backgroundColor: "#fff",
          borderTopRightRadius: 28,
          borderBottomRightRadius: 28,
        },
        drawerItemStyle: {
          borderRadius: 999,
          marginVertical: 6,
          marginHorizontal: 12,
        },
        drawerLabelStyle: { fontSize: 15, fontWeight: "600" },
        drawerActiveBackgroundColor: "#FEE2E2",
        drawerActiveTintColor: "#EF4444",
        drawerInactiveTintColor: "#6B7280",
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ paddingTop: 0 }}
        >
          <SafeAreaView edges={["top", "left", "right"]}>
            <View
              style={{
                backgroundColor: "#FFE4E6",
                marginHorizontal: 12,
                marginTop: 12,
                marginBottom: 6,
                padding: 16,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="videocam" size={28} color="#EF4444" />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: "#EF4444" }}
              >
                Joyts
              </Text>
            </View>
          </SafeAreaView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          title: "Inicio",

          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="popular/index"
        options={{
          title: "Populares",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="top/index"
        options={{
          title: "Mejores calificadas",
          drawerIcon: ({ color, size }) => (
            <Feather name="thumbs-up" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="upcoming/index"
        options={{
          title: "Próximamente en cines",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="all-movies/index"
        options={{
          title: "Todas las películas",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="ticket-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="about/index"
        options={{
          title: "Acerca de Joyts",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}
