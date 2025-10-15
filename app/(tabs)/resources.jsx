import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, Text, View } from "react-native";

const Resources = () => {
  return (
    <ScrollView className="flex-1 bg-[#f6f7f8] px-5 ">
      <Text className="mt-5 text-2xl font-bold">Guides</Text>
      <View className="mt-5">
        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md ">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="heart-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Self-care</Text>
            <Text className="text-sm text-black/60">
              Learn how to manage stress and anxiety
            </Text>
          </View>
        </View>

        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="shield-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Crisis Support</Text>
            <Text className="text-sm text-black/60">
              Get immediete help in crisis
            </Text>
          </View>
        </View>

        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <MaterialCommunityIcons
              name="lightbulb-on-20"
              size={24}
              color="#3b82f6"
            />
          </View>
          <View>
            <Text className="mb-1 font-bold">Mental Health Tips</Text>
            <Text className="text-sm text-black/60">
              Tips for maintaining good mental health
            </Text>
          </View>
        </View>
      </View>

      <Text className="mt-5 text-2xl font-bold">Articles</Text>
      <View className="mt-5">
        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md ">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="book-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Burnout</Text>
            <Text className="text-sm text-black/60">
              Understanding and coping with burnout
            </Text>
          </View>
        </View>

        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="book-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Anxiety</Text>
            <Text className="text-sm text-black/60">
              Strategies for managing anxiety
            </Text>
          </View>
        </View>

        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="book-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Stress</Text>
            <Text className="text-sm text-black/60">
              Techniques for reducing stress
            </Text>
          </View>
        </View>

        <Text className="mb-5 mt-5 text-2xl font-bold">Hotlines</Text>
        <View className="mb-4 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="book-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Stress</Text>
            <Text className="text-sm text-black/60">
              Techniques for reducing stress
            </Text>
          </View>
        </View>

        <View className="mb-10 h-20 w-full flex-row items-center gap-4 rounded-lg bg-white px-4 shadow-md">
          <View className="rounded-full bg-[#e0f2fe] p-3">
            <Ionicons name="book-outline" size={24} color="#3b82f6" />
          </View>
          <View>
            <Text className="mb-1 font-bold">Stress</Text>
            <Text className="text-sm text-black/60">
              Techniques for reducing stress
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Resources;
