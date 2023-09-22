import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import budgetIcon from "../assets/budget.png";
import cashflow from "../assets/cashflow.png";
import settingsIcon from "../assets/settings.png";
import savingsIcon from "../assets/savings.png";
import BudgetTab from "./BudgetTab";
import CashflowTab from "./CashflowTab";
import SavingsTab from "./SavingsTab";
import SettingsTab from "./SettingsTab";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function ProfileScreen({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BudgetCalc"
        component={BudgetTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={budgetIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cashflow"
        component={CashflowTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={cashflow}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={SavingsTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={savingsIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={settingsIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
