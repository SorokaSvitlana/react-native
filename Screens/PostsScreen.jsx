import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <View>
          <TouchableOpacity
            style={styles.logOutBtn}
            onPress={() => console.log("")}
          >
            <Image
              source={require("../images/log-out.png")}
              style={styles.addPicture}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <View style={styles.user}>
            <View style={styles.avatar}></View>
            <View style={styles.thumb}>
              <View>
                <Text style={styles.name}>Natali Romanova</Text>
              </View>
              <View>
                <Text style={styles.email}>email@example.com</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <View>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => console.log("")}
          >
            <Image
              source={require("../images/grid.png")}
              style={styles.addPicture}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => console.log("")}
          >
            <Image
              source={require("../images/plus.png")}
              style={styles.addPicture}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => console.log("")}
          >
            <Image
              source={require("../images/user.png")}
              style={styles.addPicture}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 55,
    paddingBottom: 11,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  logOutBtn: {
    position: "absolute",
    bottom: 0,
    right: 16,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  thumb: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  navigation: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    flexDirection: "row",
    display: "flex",
    gap: 31,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    paddingVertical: 13.5,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PostsScreen;