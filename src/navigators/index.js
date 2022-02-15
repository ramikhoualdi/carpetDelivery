import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PhoneRegister, Verification, Home, Booking, MyWallet, Profile, ServiceDetail, PaymentOption, HelpCenter, ManageAddress, ScheduleBooking } from "../screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Booking') {
                    iconName = focused ? 'briefcase' : 'briefcase-outline';
                } else if (route.name === 'MyWallet') {
                    iconName = focused ? 'wallet' : 'wallet-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Tab.Screen options={{headerShown: false}} name="Booking" component={Booking} />
            <Tab.Screen options={{headerShown: false}} name="MyWallet" component={MyWallet} />
            <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
const Navigators = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="PhoneRegister" component={PhoneRegister} /> */}
                {/* <Stack.Screen name="Verification" component={Verification} /> */}
                <Stack.Screen name="HomeNav" component={HomeNav} />
                <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
                <Stack.Screen name="PaymentOption" component={PaymentOption} />
                <Stack.Screen name="HelpCenter" component={HelpCenter} />
                <Stack.Screen name="ManageAddress" component={ManageAddress} />
                <Stack.Screen name="ScheduleBooking" component={ScheduleBooking} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;