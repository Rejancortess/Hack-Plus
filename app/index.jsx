import { ActivityIndicator, View } from 'react-native';

export default function index() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
