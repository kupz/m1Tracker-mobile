import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  const [checkBox, setCheckBox] = useState({
    employed: false,
    selfEmployed: false,
    investor: false,
    businessOwner: false,
    unemployed: false,
  });

  return (
    <SafeAreaView className=" min-h-full items-center bg-slate-800">
      <View className="mt-10">
        <Text className="text-center font-medium text-lg text-white">
          fill up additional information.
        </Text>
        <Text className="text-center text-slate-500">Please bare with us.</Text>

        <View className="gap-3 mt-10">
          <TextInput
            className="p-2 border border-yellow-200 bg-white"
            placeholder="First name"
            te
          />
          <TextInput
            className="p-2 border border-yellow-200 bg-white"
            placeholder="Middle name"
          />
          <TextInput
            className="p-2 border border-yellow-200 bg-white"
            placeholder="Last name"
          />
        </View>
        <View className=" gap-3 mt-5 mb-5">
          <Text className="font bold text-lg text-white">
            Cashflow Quadrant
          </Text>

          <View className="flex-row gap-2">
            <TouchableOpacity
              className="border border-white max-w-fit px-2"
              onPress={() => {
                setCheckBox((prev) => {
                  return {
                    ...checkBox,
                    employed: !checkBox.employed,
                  };
                });
              }}
            >
              {checkBox.employed && <Text className="text-white">✓</Text>}
            </TouchableOpacity>
            <Text className="text-white font-medium">Employed</Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity
              className="border border-white max-w-fit px-2"
              onPress={() => {
                setCheckBox((prev) => {
                  return {
                    ...checkBox,
                    selfEmployed: !checkBox.selfEmployed,
                  };
                });
              }}
            >
              {checkBox.selfEmployed && <Text className="text-white">✓</Text>}
            </TouchableOpacity>
            <Text className="text-white font-medium">Self Employed</Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity
              className="border border-white max-w-fit px-2"
              onPress={() => {
                setCheckBox((prev) => {
                  return {
                    ...checkBox,
                    investor: !checkBox.investor,
                  };
                });
              }}
            >
              {checkBox.investor && <Text className="text-white">✓</Text>}
            </TouchableOpacity>
            <Text className="text-white font-medium">Investor</Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity
              className="border border-white max-w-fit px-2"
              onPress={() => {
                setCheckBox((prev) => {
                  return {
                    ...checkBox,
                    businessOwner: !checkBox.businessOwner,
                  };
                });
              }}
            >
              {checkBox.businessOwner && <Text className="text-white">✓</Text>}
            </TouchableOpacity>
            <Text className="text-white font-medium">Business Owner</Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity
              className="border border-white max-w-fit px-2"
              onPress={() => {
                setCheckBox((prev) => {
                  return {
                    ...checkBox,
                    unemployed: !checkBox.unemployed,
                  };
                });
              }}
            >
              {checkBox.unemployed && <Text className="text-white">✓</Text>}
            </TouchableOpacity>
            <Text className="text-white font-medium">Unemployed</Text>
          </View>

          <TextInput
            placeholder="Your Basic Income"
            className="p-2 border border-yellow-200 bg-white "
          />
        </View>
        <TouchableOpacity
          className="bg-yellow-200 rounded-lg py-2"
          onPress={() => {
            navigation.navigate("profile");
          }}
        >
          <Text className="font-bold text-center">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
