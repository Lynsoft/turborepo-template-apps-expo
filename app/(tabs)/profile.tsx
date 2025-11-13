import { ScrollView, TouchableOpacity, View } from "react-native";
import { ExternalLink } from "@/components/external-link";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Text } from "@/components/ui/text";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      {/* Header */}
      <View className="px-6 pt-16 pb-8">
        <Text className="mb-6 font-semibold text-3xl text-gray-900 dark:text-white">Profile</Text>

        {/* Profile Card */}
        <TouchableOpacity className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <View className="flex-row items-center">
            <View className="mr-4 h-16 w-16 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
              <IconSymbol name="person.circle" size={32} color="#717171" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 font-semibold text-gray-900 text-xl dark:text-white">
                Log in
              </Text>
              <Text className="text-gray-600 text-sm dark:text-gray-400">
                Log in to start planning your next trip
              </Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color="#717171" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View className="px-6">
        <View className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {/* Settings */}
          <TouchableOpacity className="flex-row items-center border-gray-100 border-b p-4 dark:border-gray-700">
            <View className="mr-4 h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
              <IconSymbol name="gearshape.fill" size={18} color="#717171" />
            </View>
            <Text className="flex-1 text-base text-gray-900 dark:text-white">Settings</Text>
            <IconSymbol name="chevron.right" size={16} color="#717171" />
          </TouchableOpacity>

          {/* Accessibility */}
          <TouchableOpacity className="flex-row items-center border-gray-100 border-b p-4 dark:border-gray-700">
            <View className="mr-4 h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
              <Text className="text-lg">♿</Text>
            </View>
            <Text className="flex-1 text-base text-gray-900 dark:text-white">Accessibility</Text>
            <IconSymbol name="chevron.right" size={16} color="#717171" />
          </TouchableOpacity>

          {/* Get help */}
          <TouchableOpacity className="flex-row items-center border-gray-100 border-b p-4 dark:border-gray-700">
            <View className="mr-4 h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
              <Text className="text-lg">❓</Text>
            </View>
            <Text className="flex-1 text-base text-gray-900 dark:text-white">Get help</Text>
            <IconSymbol name="chevron.right" size={16} color="#717171" />
          </TouchableOpacity>

          {/* Terms and Privacy */}
          <TouchableOpacity className="flex-row items-center p-4">
            <View className="mr-4 h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
              <Text className="text-lg">📄</Text>
            </View>
            <Text className="flex-1 text-base text-gray-900 dark:text-white">
              Terms and Privacy
            </Text>
            <IconSymbol name="chevron.right" size={16} color="#717171" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View className="px-6 py-8">
        <Text className="text-center text-gray-500 text-xs leading-4 dark:text-gray-400">
          <ExternalLink href="https://lynsoft.io">1.0.0 • Made with ❤️ by Lynsoft</ExternalLink>
        </Text>
      </View>
    </ScrollView>
  );
}
