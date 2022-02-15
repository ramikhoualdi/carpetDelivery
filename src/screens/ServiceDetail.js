import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from '../contants';

const ServiceDetail = ({navigation, route: {params: {selectedService}}}) => {
    const bearer = 'Bearer ' + global.bearerToken;
    const createBooking = () => {
        fetch('http://carpet.spphotography.info/api/createBooking', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                service_id: selectedService.id,
            })
        });
        navigation.navigate('Booking');
    }
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
                <Text style={styles.headerTitle}>{selectedService.name}</Text>
            </View>
            <Image 
                source={{ uri: 'http://carpet.spphotography.info/storage/'+selectedService.image }}
                style={styles.serviceImage}
            />
            <Text style={styles.serviceTitle}>{selectedService.name}</Text>
            <Text style={styles.serviceDescription}>{selectedService.description}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceValue}>${selectedService.price}</Text>
            </View>
            <TouchableOpacity style={styles.bookButton} activeOpacity={0.8} onPress={createBooking}>
                <Text style={styles.btnText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
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
    serviceImage: {
        height: 200,
        alignSelf: 'center',
    },
    serviceTitle: {
        marginVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
    serviceDescription: {
        textAlign: 'center',
        fontSize: 14,
        padding: 5,
    },
    priceContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'center'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    priceValue: {
        fontSize: 24,
        marginLeft: 100,
    },
    bookButton: {
        width: 300,
        padding: 18,
        marginVertical: 20,
        marginHorizontal: 30,
        backgroundColor: Colors.DEFAULT_BLUE,
        borderRadius: 10,
      },
      btnText: {
        color: "white",
        fontSize: 15,
        textAlign: 'center',
        fontWeight: "700",
      },
})

export default ServiceDetail
