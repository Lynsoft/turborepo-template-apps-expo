import { ScrollView, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Text } from "@/components/ui/text";

export default function MessagesScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      {/* Header */}
      <View className="px-6 pt-16 pb-8">
        <Text className="mb-2 font-semibold text-3xl text-gray-900 dark:text-white">Messages</Text>
        <Text className="text-base text-gray-600 dark:text-gray-400">
          Stay connected with hosts and guests
        </Text>
      </View>

      {/* Empty State */}
      <View className="flex-1 items-center justify-center px-6 py-12">
        <View className="mb-6 h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <IconSymbol name="message" size={32} color="#FF385C" />
        </View>

        <Text className="mb-3 text-center font-semibold text-gray-900 text-xl dark:text-white">
          No messages yet
        </Text>

        <Text className="mb-8 text-center text-base text-gray-600 leading-6 dark:text-gray-400">
          When you book a trip or host an experience, messages from your Host or guests will show up
          here.
        </Text>

        <TouchableOpacity className="rounded-lg bg-gray-900 px-8 py-4 dark:bg-white">
          <Text className="font-medium text-base text-white dark:text-gray-900">Explore</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
