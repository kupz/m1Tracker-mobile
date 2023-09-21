import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function BasicNeedsScreen() {
  const [basicNeeds, setBasicNeeds] = useState([
    { title: "sample1", budget: 100 },
  ]);
  const [modalActive, setModalActive] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    budget: 0,
  });

  const handleInputChange = (text, name) => {
    console.log(newItem);
    if (name === "budget") {
      const numericValue = text.replace(/[^0-9]/g, "");
      setNewItem((prev) => {
        return { ...prev, [name]: numericValue };
      });
    } else {
      setNewItem((prev) => {
        return { ...prev, [name]: text };
      });
    }
  };

  const handleAddNeeds = () => {
    setBasicNeeds((prev) => {
      return [newItem, ...prev];
    });
    setNewItem({});
    setModalActive(false);
    console.log(basicNeeds);
  };

  const sumOfBasicNeeds = basicNeeds.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.budget);
  }, 0);

  console.log(sumOfBasicNeeds);

  return (
    <View className="flex-1 p-3">
      <View className="mt-10 flex-row justify-between items-center ">
        <Text className="text-lg font-bold">Basic Needs</Text>
        <TouchableOpacity
          onPress={() => {
            setModalActive(true);
          }}
        >
          <Text className="text-3xl px-3 py-1 rounded-full bg-green-400">
            +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="mt-10 ">
        {basicNeeds.length
          ? basicNeeds.map((item) => {
              return (
                <TouchableOpacity
                  key={item.title}
                  className="flex-row justify-between p-3 bg-green-200 rounded-lg mt-2"
                >
                  <Text className="font-medium text-slate-800">
                    {item.title}
                  </Text>
                  <Text className="font-medium text-slate-800">
                    {new Intl.NumberFormat().format(item.budget)}
                  </Text>
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
      <View className="flex-row p-3 justify-between bg-yellow-200 rounded-lg">
        <Text className="font-bold">Total</Text>
        <Text className="font-bold">
          {new Intl.NumberFormat().format(sumOfBasicNeeds)}
        </Text>
      </View>
      {/* modal */}
      {modalActive && (
        <View className="w-screen h-screen justify-center items-center bg-slate-500/50 absolute ">
          <View className="bg-white rounded-lg w-5/6 p-5 items-center gap-3 ">
            <Text className="text-lg font-bold">Budget allocation</Text>
            <View className="gap-3 items-center">
              <TextInput
                placeholder="Title"
                className="border-green-300 border p-2 "
                style={{ width: 200 }}
                value={newItem.title}
                onChangeText={(text) => {
                  handleInputChange(text, "title");
                }}
              />
              <TextInput
                placeholder="Budget"
                className="border-green-300 border p-2 "
                style={{ width: 200 }}
                value={newItem.budget}
                onChangeText={(text) => {
                  handleInputChange(text, "budget");
                }}
              />

              <TouchableOpacity
                className="bg-green-400 px-4 py-2 rounded-lg justify-center items-center"
                style={{ width: 200 }}
                onPress={handleAddNeeds}
              >
                <Text className="font-medium text-white">Confirm</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-red-400 px-4 py-2 rounded-lg justify-center items-center"
                style={{ width: 200 }}
                onPress={() => {
                  setModalActive(false);
                }}
              >
                <Text className="font-medium text-white">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
