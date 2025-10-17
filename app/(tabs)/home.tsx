import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-[#f6f7f8] px-5">
      <View className="mt-5">
        <Text className=" text-3xl font-bold text-[#1F2937]">
          Hey, how are you feeling {'\n'}today?
        </Text>
        <ImageBackground
          source={require('../../assets/images/calm.png')}
          className="mt-5 h-[170px] w-full justify-end overflow-hidden rounded-[30px]"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
            className="absolute inset-0"
          />
          <Text className="px-4 text-2xl font-bold text-white">
            Today&apos;s Mood
          </Text>
          <Text className="px-4 pb-6 text-white font-extralight">
            You&apos;ve logged your mood as calm. Keep up the positive vibes!
          </Text>
        </ImageBackground>
        <ImageBackground
          source={require('../../assets/images/qoute.png')}
          className="mt-5 h-[170px] w-full justify-end overflow-hidden rounded-[30px]"
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
            className="absolute inset-0"
          />
          <Text className="px-4 text-2xl font-bold text-white">
            Quote of the Day
          </Text>
          <Text className="px-4 pb-6 text-white font-extralight">
            The only way to do great work is to love what you do. - Steve Jobs
          </Text>
        </ImageBackground>
        <View>
          <Text className="mt-10 text-2xl font-bold text-[#1F2937]">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-around w-full gap-6 px-2 mt-5 mb-10">
            <Link href="/chat" asChild>
              <Pressable className="relative h-[100px] w-40 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-lg">
                <View className="absolute p-2 bg-white rounded-full shadow-lg -top-3">
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={24}
                    color="#4799eb"
                  />
                </View>
                <Text className="mt-2 text-center font-bold text-[#1F2937]">
                  Chat with a Volunteer
                </Text>
              </Pressable>
            </Link>
            <Link href="/resources" asChild>
              <Pressable className="relative h-[100px] w-40 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-lg">
                <View className="absolute p-2 bg-white rounded-full shadow-lg -top-3">
                  <Ionicons name="book-outline" size={24} color="#4799eb" />
                </View>
                <Text className="mt-2 text-center font-bold text-[#1F2937]">
                  Access Resources
                </Text>
              </Pressable>
            </Link>
            <Link href="/mood" asChild>
              <Pressable className="relative h-[100px] w-40 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-lg">
                <View className="absolute p-2 bg-white rounded-full shadow-lg -top-3">
                  <Ionicons name="heart-outline" size={24} color="#4799eb" />
                </View>
                <Text className="mt-2 text-center font-bold text-[#1F2937]">
                  Track Your Mood
                </Text>
              </Pressable>
            </Link>
            <Link href="/resources" asChild>
              <Pressable className="relative h-[100px] w-40 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-lg">
                <View className="absolute p-2 bg-white rounded-full shadow-lg -top-3">
                  <Ionicons name="people-outline" size={24} color="#4799eb" />
                </View>
                <Text className="mt-2 text-center font-bold text-[#1F2937]">
                  Join a Support Group
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
