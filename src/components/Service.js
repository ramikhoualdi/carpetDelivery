import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../contants'

const Service = ({service, date, status}) => {
    return (
        <View style={styles.serviceContainer}>
            <Text style={styles.serviceTitle}>{service.name}</Text>
            <Text style={styles.serviceDate}>{date}</Text>
            <Text style={styles.textLight}>Status: <Text style={styles.serviceStatus}>*{status}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    serviceContainer: {
        width: 350,
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    serviceTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.DEFAULT_BLACK,
        marginLeft: 20,
    },
    serviceDate: {
        color: Colors.DEFAULT_BLACK,
        marginLeft: 20,
    },
    textLight: {
        color: Colors.DEFAULT_LIGHT_GREY,
        marginLeft: 20,
    },
    serviceStatus: {
        fontWeight: 'bold',
        color: 'green',
    }
})

export default Service
