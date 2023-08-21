// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDHUD_P_cX7XBJrrQV6tkNw6j6y2_i1d9E",
    authDomain: "my-app-c8efc.firebaseapp.com",
    databaseURL: "https://my-app-c8efc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-app-c8efc",
    storageBucket: "my-app-c8efc.appspot.com",
    messagingSenderId: "674677226622",
    appId: "1:674677226622:web:6df253692ad2b684d5ac2f",
    measurementId: "G-DSW0RTXVJC"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);