import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@demo.com" && password === "1234") {
      Alert.alert("✅ Login correcto");
      navigation.navigate("Home");
    } else {
      Alert.alert("❌ Usuario o contraseña incorrectos");
    }
  };
  

  return (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]} // azul hasta el 20%, blanco empieza en 80%
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      ></ImageBackground>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
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
        onPress={() => navigation.navigate("RecoverPassword")}
        style={{ color: "#009CFF", textDecorationLine: "underline" }}>¿Se te olvidó tu contraseña?</Text>

      <Text
        onPress={() => navigation.navigate("RegisterPage")}
        style={{ color: "#009CFF", textDecorationLine: "underline" }}>Crea tu cuenta</Text>
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
    transform: [
      { scale: 5.5 }, // lo hace más grande
      { rotate: "-15deg" }, // lo inclina en diagonal
    ],
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
});
