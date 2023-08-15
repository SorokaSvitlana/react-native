import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
} from "react-native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegistration = () => {
    console.log("Email:", email.trim());
    console.log("Password:", password.trim());
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/BG.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-260}
          >
            <View style={styles.formContainer}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <TouchableOpacity
                  onPress={() => console.log("Перехід до сторінки логіну")}
                >
                  <Text style={styles.showHideText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleRegistration}
              >
                <Text style={styles.submitButtonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Перехід до сторінки логіну")}
              >
                <Text style={styles.loginText}>
                  Немає акаунту?{" "}
                  <Text style={styles.loginLink}>Зареєструватися</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    position: "absolute",
    display: "flex",
    gap: 16,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,
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
  title: {
    marginBottom: 33,
    color: "#20232a",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
  },
  input: {
    width: "100%",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    padding: 16,
  },
  showHideText: {
    position: "absolute",
    bottom: 16,
    right: 16,
    transform: [{ translateY: -4 }],
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#1B4371",
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 16,

    color: "#FFFFFF",
  },
  loginText: {
    textAlign: "center",
    color: "#1B4371",
  },
  loginLink: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#1B4371",
  },
});
export default LoginScreen;