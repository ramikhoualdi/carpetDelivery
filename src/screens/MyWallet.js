import React ,{ useEffect, useState} from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Images } from "../contants";

const earningURL = 'http://carpet.spphotography.info/api/user';

const MyWallet = ({ navigation }) => {
  const bearer = 'Bearer ' + global.bearerToken;

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUser = () => {
    fetch(earningURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': bearer
        }
    })
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
      getUser();
  }, []);

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
        <Text style={styles.headerTitle}>My Wallet</Text>
      </View>
      <View style={styles.headerDownBar}>
        <Image
          source={Images.WALLET}
          resizeMode="contain"
          style={styles.walletIcon}
        />
        <View style={styles.cash}>
          <Text style={styles.textBold}>ME CASH</Text>
          <Text style={styles.textLight}>Applicable on all services</Text>
        </View>
        <Text style={styles.textBold}>$ {user.balance}</Text>
      </View>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Have a question ?</Text>
      </View>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Wallet activity</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  walletIcon: {
    height: 50,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 24,
  },
  textLight: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.DEFAULT_LIGHT_GREY,
  },
  cash: {
    marginHorizontal: 15,
  },
  questionBox: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "#fff",
    marginVertical: 2,
  },
  questionText: {
    color: Colors.DEFAULT_LIGHT_GREY,
    fontWeight: "600",
  },
});

export default MyWallet;
