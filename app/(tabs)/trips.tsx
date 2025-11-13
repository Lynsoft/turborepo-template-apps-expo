import { ScrollView, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Text } from "@/components/ui/text";

export default function TripsScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      {/* Header */}
      <View className="px-6 pt-16 pb-8">
        <Text className="mb-2 font-semibold text-3xl text-gray-900 dark:text-white">Trips</Text>
        <Text className="text-base text-gray-600 dark:text-gray-400">
          Manage your reservations and past trips
        </Text>
      </View>

      {/* Tab Navigation */}
      <View className="mb-8 px-6">
        <View className="flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
          <TouchableOpacity className="flex-1 rounded-md bg-white py-3 dark:bg-gray-700">
            <Text className="text-center font-medium text-gray-900 dark:text-white">Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 rounded-md py-3">
            <Text className="text-center font-medium text-gray-500 dark:text-gray-400">Past</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Empty State */}
      <View className="flex-1 items-center justify-center px-6 py-12">
        <View className="mb-6 h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <IconSymbol name="airplane" size={32} color="#FF385C" />
        </View>

        <Text className="mb-3 text-center font-semibold text-gray-900 text-xl dark:text-white">
          No trips booked...yet!
        </Text>

        <Text className="mb-8 text-center text-base text-gray-600 leading-6 dark:text-gray-400">
          Time to dust off your bags and start planning your next adventure
        </Text>

        <TouchableOpacity className="rounded-lg bg-gray-900 px-8 py-4 dark:bg-white">
          <Text className="font-medium text-base text-white dark:text-gray-900">
            Start searching
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View className="px-6 pb-8">
        <View className="border-gray-200 border-t pt-6 dark:border-gray-700">
          <Text className="text-center text-gray-500 text-sm dark:text-gray-400">
            Can&apos;t find your reservation here? Visit the Help Center
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
