import React, { useState } from "react";

import removeIcon from "../assets/removeIcon.png";
import editIcon from "../assets/editIcon.png";
import checkIcon from "../assets/checkIcon.png";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";

export default function BasicNeedsScreen() {
  const [basicNeeds, setBasicNeeds] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  const itemTemplate = {
    title: "",
    budget: 0,
    isDone: false,
    remove: function () {
      setBasicNeeds((prev) => {
        return prev.filter((item) => {
          return item.title !== this.title;
        });
      });
    },
    done: function () {
      console.log(this.title);
      setBasicNeeds((prev) =>
        prev.map((item) => {
          if (item.title === this.title) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        })
      );
    },
  };

  const [newItem, setNewItem] = useState({
    ...itemTemplate,
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
    setNewItem({ ...itemTemplate });
    setModalActive(false);
    console.log(basicNeeds);
  };

  const sumOfBasicNeeds = basicNeeds.reduce((accumulator, currentValue) => {
    return (
      accumulator + (currentValue.isDone ? 0 : parseFloat(currentValue.budget))
    );
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
                <View
                  key={item.title}
                  className={`flex-row justify-between p-3  rounded-lg mt-2 items-center ${
                    item.isDone ? "bg-green-300" : "bg-red-300"
                  } `}
                >
                  <Text className="font-medium text-slate-800">
                    {item.title}
                  </Text>

                  <View className="flex-row gap-3">
                    <Text className="font-medium text-slate-800">
                      {new Intl.NumberFormat().format(item.budget)}
                    </Text>
                    <TouchableOpacity
                      className="relative"
                      onPress={() => item.remove()}
                    >
                      <Image
                        source={removeIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity className="relative">
                      <Image
                        source={editIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="relative"
                      onPress={() => item.done()}
                    >
                      <Image
                        source={checkIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
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
