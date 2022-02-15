import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { Separator } from '../components'
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import { Colors } from "../contants"
import PaymentIcon from 'react-native-ico-payment-method'

const PaymentOption = ({ navigation }) => {
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
                <Text style={styles.headerTitle}>Payment</Text>
            </View>
            <Text style={styles.pageTitile}>Select Payment Method</Text>
            <TouchableOpacity style={styles.paymentCard}>
                <View style={styles.cardLeft}>
                    <Text style={styles.cardHeading}>Wallet</Text>
                    <Text style={{ color: Colors.DEFAULT_LIGHT_GREY }}>Caurrent balance: <Text style={{ color: Colors.DEFAULT_BLACK, fontSize: 15, fontWeight: 'bold' }}>$60</Text></Text>
                </View>
                <Fontisto 
                name='angle-right'
                size={24}
                color={Colors.DEFAULT_LIGHT_GREY}
                style={{ marginLeft: 110 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentCard}>
                <PaymentIcon name='paypal' height="50" width="50" />
                <View style={styles.cardLeft}>
                    <Text style={styles.cardHeading}>Paypal</Text>
                    <Text style={{ color: Colors.DEFAULT_LIGHT_GREY }}>thebuddyman@hotmail.com</Text>
                </View>
                <Fontisto 
                name='angle-right'
                size={24}
                color={Colors.DEFAULT_LIGHT_GREY}
                style={{ marginLeft: 20 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentCard}>
                <PaymentIcon name='visa' height="50" width="50" />
                <View style={styles.cardLeft}>
                    <Text style={styles.cardHeading}>Visa</Text>
                    <Text style={{ color: Colors.DEFAULT_LIGHT_GREY }}>**** **** **** 4141</Text>
                </View>
                <Fontisto 
                name='angle-right'
                size={24}
                color={Colors.DEFAULT_LIGHT_GREY}
                style={{ marginLeft: 80}}/>
            </TouchableOpacity>
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
      pageTitile: {
        color: Colors.DEFAULT_LIGHT_GREY,
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: "bold"
      },
      paymentCard: {
        marginHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
      },
      cardLeft: {
        paddingHorizontal: 10,
      },
      cardHeading: {
        fontWeight: 'bold',
        fontSize: 18,
      },
})

export default PaymentOption
