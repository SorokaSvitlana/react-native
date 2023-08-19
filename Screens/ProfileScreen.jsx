import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Components/AppContext";


const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const { params } = useContext(AppContext);

  const navigation = useNavigation();

  useEffect(() => {
    if (params) {
      setPosts((state) => [...state, ...params]);
    }
  }, [params]);

  const getImage = () => {
    return params[0].photoUri;
  };

  const getLocation = () => {
    return params[0].location;
  };

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
        {posts.length > 0 ? (
          <ScrollView>
            {posts.map((el, index) => {
              return (
                <View key={index} style={styles.post}>
                  <Image
                    style={styles.postImage}
                    source={{ uri: el.photoUri }}
                  />
                  <Text style={styles.postName}>{el.name}</Text>
                  <View style={styles.postThumb}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 27,
                        marginTop: 11,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Comments", getImage())
                        }
                        style={styles.postInfo}
                      >
                        <Ionicons
                          name="chatbubbles-outline"
                          size={24}
                          color="#BDBDBD"
                        />
                        <Text>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => console.log()}
                        style={styles.postInfo}
                      >
                        <Ionicons
                          name="thumbs-up-outline"
                          size={24}
                          color="#BDBDBD"
                        />
                        <Text>0</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Map", getLocation())}
                      style={styles.postInfo}
                      disabled={getLocation() === null}
                    >
                      <Ionicons
                        name="location-outline"
                        size={24}
                        color="#BDBDBD"
                      />

                      <Text style={styles.postAddress}>{el.address}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        ) : null}
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
  post: {
    marginBottom: 34,
  },
  postImage: {
    width: "100%",
    height: 240,

    borderWidth: 1,
    borderRadius: 8,
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },
  postThumb: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  postInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
  },
  postAddress: {
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  postAddressDisable: {
    fontSize: 16,
    lineHeight: 19,
  },
});

export default ProfileScreen;