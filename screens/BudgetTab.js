import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import Investment from "../assets/investment.png";
import wallet from "../assets/digital-wallet.png";
export default function BudgetTab({ navigation }) {
  const budget = [
    {
      name: "Basic Needs",
      total: 1000,
      action: () => {
        navigation.navigate("basicNeeds");
      },
    },
    {
      name: "Obligations",
      total: 5000,
      action: null,
    },
    {
      name: "Liabilities",
      total: 3000,
      action: null,
    },
  ];
  return (
    <>
      <ScrollView className="p-4">
        <View className="flex-1 max-w-full items-center">
          <Image
            source={Investment}
            className="bg-blue-300 max-w-full aspect-square "
            style={{ width: 300, height: 300 }}
          />
          <Text className="text-green-500 font-bold text-lg">
            Your budget is Healthy
          </Text>
          <View className="flex-row justify-between w-full p-2 bg-purple-400 rounded-lg items-center mb-4 shadow-lg">
            <View className="items-center">
              <Image
                source={wallet}
                className="  aspect-square "
                style={{ width: 30, height: 30 }}
              />
              <Text className="font-medium text-white">Wallet</Text>
            </View>
            <Text className="font-bold text-white">2,000,000</Text>
          </View>
          <View className="w-full gap-2">
            {budget.map((item) => {
              return (
                <TouchableOpacity
                  key={item.name}
                  onPress={item.action}
                  className="bg-blue-500 p-3 rounded-lg flex-row justify-between shadow-lg"
                >
                  <Text className="text-white font-bold">{item.name}</Text>
                  <Text className="text-white font-bold">{item.total} </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View className="bg-yellow-200 p-3 w-full flex-row justify-between mb-2  ">
        <Text className="font-medium">Free Cash this month</Text>
        <Text className="font-medium">5,000</Text>
      </View>
    </>
  );
}
