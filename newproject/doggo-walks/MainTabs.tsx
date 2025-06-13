import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ParksScreen from "./screens/ParksScreens";
import SavedRoutesScreen from "./screens/SavedRoutesScreen";
import SharedRoutesScreen from "./screens/SharedRoutesScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Parks" component={ParksScreen} />
            <Tab.Screen name="Routes" component={SharedRoutesScreen} />
            <Tab.Screen name="Saved Routes" component={SavedRoutesScreen} options={{ title: "Saved Routes" }}/>
        </Tab.Navigator>
    )
}