import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "../api/Services/AuthService";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ⚡ Función para enviar las credenciales al backend
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    try {
      const response = await login({ username, password });
      Alert.alert("Bienvenido", `Token: ${response.data.token}`);
      navigation.navigate("AdmPage");
    } catch (error) {
      console.log(error);
      let message = "Usuario o contraseña incorrectos";
      if (error.response) {
        if (error.response.status === 401) {
          message = "Credenciales inválidas. Verifica tu usuario y contraseña.";
        } else if (error.response.status === 500) {
          message = "Error interno del servidor. Intenta más tarde.";
        } else if (error.response.data && error.response.data.message) {
          message = error.response.data.message;
        }
      } else if (error.message) {
        message = error.message;
      }
      Alert.alert("Error de inicio de sesión", message);
    }
  };

  return (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Imagen de fondo */}
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      />

      {/* Tarjeta de login */}
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>

      <Text
        onPress={() => navigation.navigate("recover_password")}
        style={styles.link}
      >
        ¿Se te olvidó tu contraseña?
      </Text>

      <Text
        onPress={() => navigation.navigate("RegisterPage")}
        style={styles.link}
      >
        Crea tu cuenta
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  coete: {
    width: 220,
    height: 220,
    position: "absolute",
    top: 440,
    right: 360,
    transform: [{ scale: 5.5 }, { rotate: "-15deg" }],
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  button: {
    backgroundColor: "#009CFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    color: "#009CFF",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
