import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Створити публікацію</Text>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.photoThumb}>
          <View style={styles.photoPlace}>
            <View style={styles.photoIcon}>
              <TouchableOpacity
                style={styles.iconCam}
                onPress={() => console.log()}
              >
                <Ionicons name="camera-outline" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.photoText}>Завантажте фото</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            keyboardType="email-address"
          />

          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.locationInput}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
            />
            <Ionicons
              name="location-outline"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
          </View>
          <TouchableOpacity
            style={styles.disabledButton}
            onPress={() => log}
            disabled
          >
            <Text style={styles.disabledButtonText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trashButton}>
          <Ionicons
            name="trash-outline"
            size={24}
            color="#DADADA"
            style={styles.trashIcon}
          />
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  goBackBtn: {
    position: "absolute",
    bottom: 10,
    left: 20,
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
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  photoThumb: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 32,
  },
  photoPlace: {
    position: "relative",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  photoText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  photoIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -0.5 * 60 }, { translateY: -0.5 * 60 }],
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },
  iconCam: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -0.5 * 24 }, { translateY: -0.5 * 24 }],
  },
  form: {
    display: "flex",
    gap: 22,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationInput: {
    width: "100%",
    paddingVertical: 15,
    paddingLeft: 26,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationIcon: {
    position: "absolute",
    bottom: "50%",
    left: 0,
    transform: [{ translateY: 0.5 * 24 }],
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
  submitButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  disabledButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#BDBDBD",
  },
  disabledButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  trashButton: {
    flex: 1,
    position: "absolute",
    width: 70,
    height: 40,
    bottom: 34,
    left: "50%",
    transform: [{ translateX: -0.3 * 70 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  trashIcon: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: [{ translateY: 0.5 * 24 }, { translateX: -0.5 * 24 }],
  },
});

export default CreatePostsScreen;