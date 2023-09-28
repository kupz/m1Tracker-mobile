import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import m1Tracker from "../assets/m1TrackerLogo.png";
// import useGetUsers from "../hooks/useGetUsers";
import { useMutation, useQuery } from "react-query";
import { getUsers, loginAccount } from "../api/newUsersApi";

export default function HomeScreen({ navigation }) {
  const data = { username: "kupz", password: "Password123" };

  const users = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (users.isLoading) {
    console.log("users data fetching....");
  } else {
    console.log(users.data);
  }

  return (
    <View className="bg-slate-800 min-h-full">
      <View className=" min-h-screen bg-slate-800 justify-center items-center gap-4 p-5">
        <Image
          source={m1Tracker}
          style={{ width: 250, height: 250, resizeMode: "cover" }}
        />
        <Text className="font-bold text-xl text-slate-400">
          Welcome to M1 Tracker!
        </Text>
        <Text className="font-bold text-2xl text-slate-200 text-center">
          Take Charge. Be Your own personal money manager.
        </Text>
        <TouchableOpacity
          className="bg-yellow-200 px-7 py-2 rounded-lg "
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text className="font-bold text-slate-800">Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
