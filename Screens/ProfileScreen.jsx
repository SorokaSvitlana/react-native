import React, { useState } from "react";

import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";




const ProfileScreen = () => {

  return (

    <View style={styles.container}>

      <Image

        source={require("../images/BG.jpg")}

        resizeMode="cover"

        style={styles.backgroundImage}

      />




      <View style={styles.userContainer}>

        <TouchableOpacity

          style={styles.logOutBtn}

          onPress={() => console.log("")}

        >

          <Ionicons name="log-out-outline" size={24} />

        </TouchableOpacity>

        <View style={styles.profileIcon}>

          <TouchableOpacity onPress={() => console.log("")}>

            <Image

              source={require("../images/add.png")}

              style={styles.addPicture}

            />

          </TouchableOpacity>

        </View>




        <Text style={styles.title}>Natali Romanova</Text>

      </View>

    </View>

  );

};




const styles = StyleSheet.create({

  container: {

    flex: 1,

  },




  backgroundImage: {

    width: "100%",

    position: "absolute",

  },




  userContainer: {

    marginTop: "auto",

    height: "84%",

    paddingHorizontal: 16,

    paddingTop: 92,

    paddingBottom: 78,




    borderTopLeftRadius: 25,

    borderTopRightRadius: 25,




    backgroundColor: "#FFFFFF",

  },




  profileIcon: {

    position: "absolute",

    top: -60,

    left: "50%",

    transform: [{ translateX: -0.4 * 120 }],

    width: 120,

    height: 120,

    borderRadius: 16,

    backgroundColor: "#F6F6F6",

  },




  addPicture: {

    position: "absolute",

    bottom: -105,

    right: -12.5,

  },

  logOutBtn: {

    position: "absolute",

    top: 24,

    right: 20,

  },

  title: {

    marginBottom: 33,




    color: "#20232a",




    fontFamily: "Roboto-Medium",

    textAlign: "center",

    fontSize: 30,

  },

});




export default ProfileScreen;