import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Colors, Images, CountryCode } from "../contants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CountryFlag from "react-native-country-flag";
import { FlatList } from "react-native-gesture-handler";
import FlagItem from "../components/FlagItem";
import firebase from "../firebase";

const getDropdownStyle = (y) => ({ ...styles.countryDropdown, top: y + 60 });

const PhoneRegister = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find((country) => country.name == "Pakistan")
  );
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const closeDropdown = (pageX, pageY) => {
    if (isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x ||
        pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y ||
        pageY > dropdownLayout?.y + dropdownLayout?.height
      ) {
        setIsDropdownOpen(false);
      }
    }
  };
  // Firebase Mobile Auth
  const [phoneNumber, setPhoneNumber] = useState("");

  // const [confirm, setConfirm] = useState(null);
  const { auth } = firebase();
  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirm = await auth().signInWithPhoneNumber(phoneNumber);
    navigation.navigate("Verification", { phoneNumber, confirm })
  };
  
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={({ nativeEvent: { pageX, pageY } }) =>
        closeDropdown(pageX, pageY)
      }
    >
      <Image source={Images.LOGO} resizeMode="contain" style={styles.logo} />
      <Text style={styles.textBold}>Your Carpet Service Expert</Text>
      <Text style={styles.textLight}>Affordable • Trusted</Text>
      <View
        style={styles.inputsContainer}
        onLayout={({
          nativeEvent: {
            layout: { y },
          },
        }) => setInputsContainerY(y)}
      >
        <TouchableOpacity
          style={styles.countryListContainer}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <CountryFlag isoCode={selectedCountry.code} size={14} />
          <Text style={styles.countryCodeText}>
            {selectedCountry.dial_code}
          </Text>
          <MaterialIcons name="keyboard-arrow-down"></MaterialIcons>
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={Colors.DEFAULT_LIGHT_GREY}
            keyboardType="number-pad"
            onFocus={() => setIsDropdownOpen(false)}
            onChangeText={(text) =>
              setPhoneNumber(selectedCountry?.dial_code + text)
            }
          />
        </View>
      </View>
      {isDropdownOpen && (
        <View
          style={getDropdownStyle(inputsContainerY)}
          onLayout={({
            nativeEvent: {
              layout: { x, y, height, width },
            },
          }) => setDropdownLayout({ x, y, height, width })}
        >
          <FlatList
            data={CountryCode}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <FlagItem
                {...item}
                onPress={(country) => {
                  setSelectedCountry(country);
                  setIsDropdownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.continue}
        activeOpacity={0.8}
        onPress={ () => {
          if(phoneNumber < 12){
              Alert.alert('Alert', 'Enter a valid Phone Number')
              return;
          }
          else{  
              // navigation.navigate("Verification", { phoneNumber, confirm });
              () => signInWithPhoneNumber(phoneNumber)
          }
        }}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <Image
        source={Images.CLEANER_VECTOR}
        resizeMode="contain"
        style={styles.cleaner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
    // paddingTop: 180,
  },
  logo: {
    marginTop: 100,
    width: 300,
    marginHorizontal: 30,
  },
  textBold: {
    fontWeight: "700",
    fontSize: 18,
    paddingTop: 30,
    marginHorizontal: 70,
  },
  textLight: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.DEFAULT_LIGHT_GREY,
    marginHorizontal: 110,
  },
  continue: {
    width: 300,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: Colors.DEFAULT_BLUE,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
  },
  cleaner: {
    height: 185,
    width: 199,
    marginHorizontal: 80,
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  countryListContainer: {
    backgroundColor: Colors.DEFAULT_LIGHT,
    width: 80,
    marginRight: 10,
    borderRadius: 8,
    height: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREY,
    flexDirection: "row",
  },
  phoneInputContainer: {
    backgroundColor: Colors.DEFAULT_LIGHT,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: "center",
    flex: 1,
  },
  countryDropdown: {
    backgroundColor: Colors.DEFAULT_LIGHT,
    position: "absolute",
    width: 300,
    height: 200,
    marginLeft: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREY,
    zIndex: 3,
  },
});

export default PhoneRegister;
