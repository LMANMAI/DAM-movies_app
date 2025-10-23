import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor: "#EDE9FE",
        drawerActiveTintColor: "#5B21B6",
        drawerInactiveTintColor: "#6B7280",
        drawerItemStyle: {
          borderRadius: 999,
          marginVertical: 6,
          marginHorizontal: 12,
        },
        drawerLabelStyle: { fontWeight: "600" },
        drawerStyle: {
          width: 300,
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ paddingTop: 0 }}
        >
          {/* Header morado con avatar */}
          <View
            style={{
              backgroundColor: "#5B21B6",
              margin: 12,
              marginTop: 16,
              borderRadius: 20,
              padding: 16,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 72,
                height: 72,
                borderRadius: 999,
                backgroundColor: "#FFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#5B21B6", fontWeight: "800", fontSize: 18 }}
              >
                JD
              </Text>
            </View>
          </View>

          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="productos/(tabs)"
        options={{
          drawerLabel: "Productos",
          title: "Productos",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="sucursales/index"
        options={{
          drawerLabel: "Sucursales",
          title: "Sucursales",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="usuario/index"
        options={{
          drawerLabel: "Usuario",
          title: "Mi cuenta",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="about/index"
        options={{
          drawerLabel: "About",
          title: "Acerca de la tienda",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
