import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import m1Tracker from "../assets/m1TrackerLogo.png";

export default function SignupScreen({ navigation }) {
  return (
    <View className="justify-center items-center min-h-full w-full bg-slate-800">
      <Image source={m1Tracker} className="scale-75 -translate-y-20" />
      <Text className="text-center text-lg font-bold -translate-y-20 text-white">
        Sign up
      </Text>
      <View className="gap-3 p-5 w-full -translate-y-20">
        <TextInput
          placeholder="Email"
          className="border p-2 border-yellow-200 bg-white"
        />
        <TextInput
          placeholder="Password"
          className="border p-2 border-yellow-200 bg-white"
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm Password"
          className="border p-2 border-yellow-200 bg-white"
          secureTextEntry={true}
        />
        <TouchableOpacity className="items-center bg-yellow-200 py-3 rounded-lg">
          <Text className="text-slate-950 font-bold text-md">Sign up</Text>
        </TouchableOpacity>
        <View className="gap-3 flex-row ">
          <Text className="font-medium text-slate-600">
            Already have an account ?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text className="font-bold text-blue-400">Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
