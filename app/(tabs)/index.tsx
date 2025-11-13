import { useColorScheme } from "nativewind";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Text } from "@/components/ui/text";

export default function ExploreScreen() {
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black" showsVerticalScrollIndicator={false}>
      {/* Header with Search */}
      <View className="px-6 pt-24 pb-6">
        <TouchableOpacity className="flex-row items-center rounded-full border border-gray-200 bg-white px-6 py-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <IconSymbol
            name="magnifyingglass"
            size={20}
            color={colorScheme === "dark" ? "#717171" : "#717171"}
          />
          <Text className="ml-4 text-base text-gray-500 dark:text-gray-400">Start your search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
