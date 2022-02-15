import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Colors } from '../contants'

const Faq = ({title, icon}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons
                name={icon}
                size={24}
                color={Colors.DEFAULT_GREY}
                />
            <Text style={styles.profileText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 3,
    },
    profileText: {
        color: Colors.DEFAULT_BLACK,
        marginLeft: 25,
        fontWeight: 'bold'
    }
})

export default Faq
