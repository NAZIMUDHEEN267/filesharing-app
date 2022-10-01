import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.navBar}>
        <Text style={styles.headline}>File sharing</Text>
      </View>
      <TouchableOpacity onPress={() => alert("Hello World!!")} style={styles.btn}>
        <Text style={styles.btnText}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "red",
    padding: 15,
    borderWidth: 6,
    borderColor: "red",
    display: "flex",
    justifyContent: "center",
    marginTop: 30
  },
  headline: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  },
  btn: {
    backgroundColor: "blue",
    padding: 20,
    marginTop: 20
  },
  btnText: {
    backgroundColor: "red", 
    color: "white", 
    fontSize: 20
  }
})