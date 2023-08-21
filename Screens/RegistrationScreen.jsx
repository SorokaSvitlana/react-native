import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch} from "react-redux";



const RegistrationScreen = () => {

  const dispatch = useDispatch();

  const initialState = {
    nickname: "",
    email: "",
    password: "",
    avatar: null,
  };
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.cancelled) {
      const response = await fetch(result.uri);
      const blob = await response.blob();
  
      dispatch(uploadAvatarToStorage(blob)); 
    }
  };

  const handleRegistration = async () => {
    try {
      dispatch(registerUser(state)); 
      setState(initialState);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("../images/BG.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-100}
        >
          <View style={styles.formContainer}>
            <View style={styles.profileIcon}>
              <TouchableOpacity onPress={() => console.log("")}>
                <Image
                  source={require("../images/add.png")}
                  style={styles.addPicture}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                value={name}
                onChangeText={setName}
              />
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
            </View>
            {!keyboardOpen && (
              <>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={styles.submitButtonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.loginText}>
                    Вже є акаунт?{" "}
                    <Text
                      style={styles.loginLink}
                      onPress={() => navigation.navigate("Login")}
                    >
                      Увійти
                    </Text>
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  formContainer: {
    marginTop: "auto",
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
  title: {
    marginBottom: 33,
    color: "#20232a",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
  },
  form: {
    display: "flex",
    gap: 16,
    marginBottom: 43,
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
    marginBottom: 16,
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
export default RegistrationScreen;