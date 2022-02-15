import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Images } from '../contants';
import firebase from "../firebase";

const authURL = 'http://carpet.spphotography.info/api/register';

const Verification = ({navigation, route: {params: {phoneNumber, confirm}}}) => {
  global.bearerToken = '';
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});

  //confirm code
  const { auth } = firebase();
  const confirmCode = async () => {
    try {
      await confirm.confirm(otp);
      register();
      if(bearerToken != ''){
        navigation.navigate("HomeNav", { bearerToken });
      }
      else{
        return;
      }
    } catch (error) {
      Alert.alert('Alert', JSON.stringify(error));
      return;
    }
  }

  const register = async () => {
    await fetch(authURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: phoneNumber,
        })
    })
    .then(response => response.json())
    .then(data => global.bearerToken = data.token);
    // if(bearerToken != ''){
    //   navigation.navigate("HomeNav", { bearerToken });
    // }
    // else{
    //   return;
    // }
}

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          onPress={() => navigation.goBack() }
        />
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <Text style={styles.textBold}>Enter Verification Code</Text>
      <Text style={styles.textLight}>We have sent you a 4 digit verification code on</Text>
      <Text style={styles.textNumber}>{phoneNumber}</Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              text ? fifthInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fifthInput}
            onChangeText={text => {
              setOtp({...otp, 5: text});
              text ? sixthInput.current.focus() : fourthInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={sixthInput}
            onChangeText={text => {
              setOtp({...otp, 6: text});
              !text && fifthInput.current.focus();
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.login} activeOpacity={0.8}
        onPress={
          () => confirmCode() 
          // register
          }>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 20 * 1.4,
    width: 200,
  },
  textBold: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 24,
    textAlign: 'center',
  },
  textLight: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 25,
    color: Colors.DEFAULT_LIGHT_GREY,
    textAlign: 'center',
  },
  textNumber: {
    fontWeight: "700",
    marginVertical: 10,
    textAlign: 'center',
  },
  otpContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  login: {
    marginTop: 20,
    width: 300,
    padding: 18,
    backgroundColor: Colors.DEFAULT_BLUE,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "700",
  },
});

export default Verification;