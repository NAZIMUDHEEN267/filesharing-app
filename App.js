import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import Main from './Components/Main';


export default function App() {
  const [clr, setClr] = useState("red");

  return (
    <View style={{ backgroundColor: "rgba(0, 0, 0, .2)", height: "100%" }}>
      <StatusBar style='auto'></StatusBar>
      <View style={styles.navBar}>
        <Text style={[styles.headline, { backgroundColor: clr }]}>File sharing</Text>
      </View>
      <View style={styles.container}>
        <Main btnStyle={styles.btn} />
      </View>
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
    color: "white",
    fontWeight: "600"
  },
  container: {
    flex: .8,
    alignItems: "center",
    justifyContent: 'center',
  },
  btn: {
    paddingLeft: "35%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "green",
    padding: 20,
    marginTop: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  }
})