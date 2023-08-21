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
import { useNavigation, useRoute } from "@react-navigation/native";
import AppContext from "./Components/AppContext";

import { useDispatch } from "react-redux";

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const { params } = useContext(AppContext);
  const dispatch = useDispatch();


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
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <View>
          <TouchableOpacity
            style={styles.logOutBtn}
            onPress={() => console.log("")}
          >
            <Ionicons name="log-out-outline" size={24} />
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
          {posts.length > 0 && (
            <ScrollView >
              {posts.map((item, index) => (
                <View style={styles.post} key={index}>
                  <Image
                    style={styles.postImage}
                    source={{ uri: item.photoUri }}
                  />
                  <Text style={styles.postName}>{item.name}</Text>
                  <View style={styles.postThumb}>
                    <TouchableOpacity
                      style={styles.postInfo}
                      onPress={() =>
                        navigation.navigate("Comments", getImage())
                      }
                    >
                      <Ionicons
                        name="chatbubbles-outline"
                        size={24}
                        color="#BDBDBD"
                      />
                      <Text>{item.comments.length}</Text>
                    </TouchableOpacity>

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
                      <Text style={styles.postAddress}>{item.address}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 55,
    paddingBottom: 11,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "#FFFFFF",
  },

  logOutBtn: {
    position: "absolute",
    bottom: 0,
    right: 20,
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
    paddingHorizontal: 16,
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
  listContent: {
    flexGrow: 1,
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
    marginTop: 11,
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
});

export default PostsScreen;