import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "MindLink",
            tabBarLabel: "Home",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#f6f7f8",
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#1F2937",
            },
            headerRight: () => (
              <Pressable>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color="#1F2937"
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),

            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="mood"
          options={{
            title: "Mood Tracker",
            tabBarLabel: "Mood",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#f6f7f8",
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
            headerTintColor: "#1F2937",
            headerLeft: () => (
              <MaterialIcons
                name="arrow-back"
                size={30}
                color="black"
                marginLeft={15}
                onPress={() => router.back()}
              />
            ),
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "happy" : "happy-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarLabel: "Chat",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#f6f7f8",
            },
            headerTintColor: "#1F2937",

            headerLeft: () => (
              <MaterialIcons
                name="arrow-back"
                size={30}
                color="black"
                marginLeft={15}
                onPress={() => router.back()}
              />
            ),
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  focused
                    ? "chatbubble-ellipses"
                    : "chatbubble-ellipses-outline"
                }
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="motivation"
          options={{
            title: "Motivation",
            tabBarLabel: "Motivation",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#f6f7f8",
            },
            headerTintColor: "#1F2937",

            headerLeft: () => (
              <MaterialIcons
                name="arrow-back"
                size={30}
                color="black"
                marginLeft={15}
                onPress={() => router.back()}
              />
            ),
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <MaterialIcons
                name="star-purple500"
                size={30}
                color="black"
                marginRight={15}
              />
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "bulb-sharp" : "bulb-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: "Resources",
            tabBarLabel: "Resources",
            headerStyle: {
              elevation: 0,
              backgroundColor: "#f6f7f8",
              borderBottomWidth: 1,
              shadowOpacity: 0,
              borderBottomColor: "#4799eb",
            },
            headerTintColor: "#1F2937",

            headerLeft: () => (
              <MaterialIcons
                name="arrow-back"
                size={30}
                color="black"
                marginLeft={15}
                onPress={() => router.back()}
              />
            ),
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "bookmarks" : "bookmarks-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
