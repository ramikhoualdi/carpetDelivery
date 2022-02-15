import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountryFlag from 'react-native-country-flag';
import { Colors } from '../contants';

const FlagItem = ({code, name, dial_code, onPress}) => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => onPress({code, name, dial_code})}>
            <CountryFlag isoCode={code} size={17} style={styles.flagIcon}/>
            <Text style={styles.flagText}>{dial_code}</Text>
            <Text style={styles.flagText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    flagIcon: {
        marginRight: 10,
    },
    flagText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        marginRight: 10,
    }
})

export default FlagItem;

