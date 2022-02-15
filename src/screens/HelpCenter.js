import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { Separator, Faq } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../contants";

const HelpCenter = ({ navigation }) => {
    const [faq, setFaq] = useState([
        { id: 1, title: "Terms and Condition", icon: "alert-circle" },
        { id: 2, title: "Rules and Regulation", icon: "airplane-sharp" },
        { id: 3, title: "Payment Management", icon: "alarm" },
        { id: 4, title: "Service Management", icon: "albums" },
        { id: 5, title: "Need Help", icon: "build" },
      ]);
    return (
        <View style={styles.container}>
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons
                name="arrow-back-outline"
                size={24}
                color="#fff"
                onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>FAQs</Text>
            </View>
            <ScrollView>
                {faq.map((item) => (
                <Faq {...item} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_LIGHT,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      headerContainer: {
        backgroundColor: Colors.DEFAULT_BLUE,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        color: "#fff",
        paddingLeft: 15,
        fontSize: 16,
        lineHeight: 20 * 1.4,
        width: 200,
      },
})

export default HelpCenter
