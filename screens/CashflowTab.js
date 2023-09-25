import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function CashflowTab() {
  return (
    <View className="flex-1">
      <ScrollView className="gap-2">
        <View className="flex-row justify-between items-center bg-red-300 p-3">
          <View>
            <Text className="text-xl font-semibold text-slate-800">
              - 2,000
            </Text>
            <Text className="text-slate-800">Electric Bill</Text>
          </View>
          <Text className="text-slate-800">July 10, 2023</Text>
        </View>
        <View className="flex-row justify-between items-center bg-red-300 p-3">
          <View>
            <Text className="text-xl font-semibold text-slate-800">
              - 1,000
            </Text>
            <Text className="text-slate-800">Water Bill</Text>
          </View>
          <Text className="text-slate-800">July 10, 2023</Text>
        </View>
        <View className="flex-row justify-between items-center bg-red-300 p-3">
          <View>
            <Text className="text-xl font-semibold text-slate-800">
              - 1,500
            </Text>
            <Text className="text-slate-800">Internet Bill</Text>
          </View>
          <Text className="text-slate-800">July 10, 2023</Text>
        </View>
        <View className="flex-row justify-between items-center bg-green-300 p-3">
          <View>
            <Text className="text-xl font-semibold text-slate-800">
              + 10,500
            </Text>
            <Text className="text-slate-800">Payroll</Text>
          </View>
          <Text className="text-slate-800">July 10, 2023</Text>
        </View>
      </ScrollView>
    </View>
  );
}
