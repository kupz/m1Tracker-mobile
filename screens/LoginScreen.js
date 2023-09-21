import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import m1Tracker from "../assets/m1TrackerLogo.png";

export default function Loginpage({ navigation }) {
  return (
    <View className="gap-5 justify-center items-center min-h-full p-10 bg-slate-800">
      <Image source={m1Tracker} className="max-w-full aspect-square scale-75" />
      <Text className="font-medium -translate-y-20 text-white">
        {" "}
        Welcome back!
      </Text>
      <Text className="font-medium -translate-y-20 text-white">
        Be your own money manager.
      </Text>
      <View className="gap-3 w-full -translate-y-20">
        <TextInput
          placeholder="Email"
          className="border p-2 border-yellow-200 bg-white"
        />
        <TextInput
          placeholder="Password"
          className="border p-2 border-yellow-200 bg-white"
          textContentType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          className="items-center bg-yellow-200 py-3 rounded-lg"
          onPress={() => {
            navigation.navigate("welcome");
          }}
        >
          <Text className="font-bold text-slate-900 text-md">Login</Text>
        </TouchableOpacity>
        <View className="flex-row gap-2 justify-center">
          <Text className="font-medium text-slate-300">
            don't have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <Text className="text-blue-600 font-medium">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
