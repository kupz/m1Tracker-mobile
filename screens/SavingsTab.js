import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import savingsIcon from "../assets/savings.png";

export default function SavingsTab() {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center p-3 bg-green-400">
        <Image source={savingsIcon} style={{ tintColor: "white" }} />
        <Text className="text-xl font-extrabold text-white"> 1, 000</Text>
      </View>
      <ScrollView className="p-3">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-medium">+ 1999</Text>
            <Text>From January Freecash</Text>
          </View>
          <Text>May 24, 2023</Text>
        </View>
      </ScrollView>
      <View className="flex-row justify-end p-3">
        <TouchableOpacity className="px-5 py-3 bg-green-700 rounded-full">
          <Text className="text-3xl text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
