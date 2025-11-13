import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-gray-900">
      <Text className="font-bold text-3xl text-gray-900 leading-8 dark:text-gray-100">
        This is a modal
      </Text>
      <Link href="/" dismissTo className="mt-4 py-4">
        <Text className="text-base text-blue-600 leading-7 underline dark:text-blue-400">
          Go to home screen
        </Text>
      </Link>
    </View>
  );
}
