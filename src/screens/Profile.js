import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, Linking, Share } from "react-native";
import { Separator, ProfileEdit } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../contants";

const Profile = ({ navigation }) => {
  const bearer = 'Bearer ' + global.bearerToken;

  const [phone, setPhone] = useState('+1 8822882288')
  const [profileEdit, setProfileEdit] = useState([
    { id: 1, name: "Call Us", icon: "ios-logo-whatsapp" },
    { id: 2, name: "Help Center", icon: "ios-help-circle" },
    { id: 3, name: "Manage Address", icon: "ios-location-sharp" },
    { id: 4, name: "Pricing", icon: "ios-pricetag" },
    { id: 5, name: "Settings", icon: "ios-settings" },
    { id: 6, name: "Schedule Booking", icon: "ios-calendar" },
    { id: 7, name: "Payment Option", icon: "ios-card-sharp" },
    { id: 8, name: "Rate Us", icon: "ios-star" },
    { id: 9, name: "Reviews", icon: "ios-eye" },
    { id: 10, name: "Share Michelangelo Enterprises", icon: "ios-share-social" },
    { id: 11, name: "Log Out", icon: "md-log-out-outline" },
  ]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
        url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const scheduleBooking = () => {
    fetch('http://carpet.spphotography.info/api/logout', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    });
    navigation.navigate('PhoneRegister');
  }

  const chooseScreen = (key) => {
    if(key.id == 1){
      let phoneNumber = '';
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${+1 8822882288}';
      }
      else {
        phoneNumber = 'telprompt:${+1 8822882288}';
      }
      Linking.openURL(phoneNumber);
    }
    if (key.id == 2){
      navigation.navigate('HelpCenter');
    }
    if (key.id == 3){
      navigation.navigate('ManageAddress');
    }
    if (key.id == 6){
      navigation.navigate('ScheduleBooking');
    }
    if (key.id == 7){
      navigation.navigate('PaymentOption');
    }
    if (key.id == 10){
      onShare();
    }
    if (key.id == 11){
      scheduleBooking();
    }
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
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      <View style={styles.headerDownBar}>
        <View>
          <Text style={styles.textBold}>John Parker</Text>
          <Text style={styles.textLight}>{phone}</Text>
        </View>
        <Ionicons
          name="ios-pencil"
          size={30}
          style={styles.editIcon}
          color={Colors.DEFAULT_LIGHT_GREY}
        />
      </View>
      <ScrollView>
        {profileEdit.map((item) => (
          <ProfileEdit {...item} onPress={(key) => chooseScreen(key)} />
        ))}
      </ScrollView>
    </View>
  );
};

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
  headerDownBar: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 5,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 24,
  },
  textLight: {
    color: Colors.DEFAULT_LIGHT_GREY,
    fontWeight: "bold",
  },
  editIcon: {
    textAlign: "right",
    paddingRight: 40,
    marginLeft: 120,
  },
});

export default Profile;
