import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const SCREENS = {
  RECOVER_PASSWORD: "RECOVER_PASSWORD",
  CREATE_NEW_PASSWORD: "CREATE_NEW_PASSWORD",
  REQUEST_CODE: "REQUEST_CODE",
  PASSWORD_SUCCESS: "PASSWORD_SUCCESS",
};

export default function PasswordRecoveryUnified() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.RECOVER_PASSWORD);

  // Shared states
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");

  // Password validations
  const hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const passwordValid = hasUpperLower && hasMinLength && hasNumber;

  // Screens
  const RecoverPassword = () => (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Fondo cohete */}
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setCurrentScreen(SCREENS.RECOVER_PASSWORD)}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Recuperar Contraseña</Text>

        <View style={styles.stepsRow}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNum}>1</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}>
            <Text style={styles.stepNum}>2</Text>
          </View>
        </View>

        <Text style={styles.desc}>
          Ingresa el correo registrado para enviarte un código de verificación.
        </Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen(SCREENS.CREATE_NEW_PASSWORD)}
        >
          <Text style={styles.buttonText}>Enviar código</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const CreateANewPassword = () => (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setCurrentScreen(SCREENS.RECOVER_PASSWORD)}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Crea una nueva contraseña</Text>

        <View style={styles.stepsRow}>
          <View style={styles.stepCircleChecked}>
            <Ionicons name="checkmark-sharp" size={22} color="#009CFF" />
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircle}>
            <Text style={styles.stepNum}>2</Text>
          </View>
        </View>

        <Text style={styles.desc}>
          Ingresa el código que te enviamos a tu correo y crea tu nueva contraseña.
        </Text>

        <View style={styles.codeRow}>
          {code.map((c, i) => (
            <TextInput
              key={i}
              style={styles.codeInput}
              value={c}
              onChangeText={(v) => {
                const newCode = [...code];
                newCode[i] = v.slice(0, 1);
                setCode(newCode);
              }}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.resendBtn}
          onPress={() => setCurrentScreen(SCREENS.REQUEST_CODE)}
        >
          <Text style={styles.resendText}>Reenviar Código</Text>
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginBottom: 10 }}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
          />
        </View>

        <View style={{ alignSelf: "stretch", marginBottom: 12 }}>
          <Text style={[styles.rule, { color: hasUpperLower ? "green" : "red" }]}>
            • Al menos una mayúscula y una minúscula
          </Text>
          <Text style={[styles.rule, { color: hasMinLength ? "green" : "red" }]}>
            • Mínimo 8 caracteres
          </Text>
          <Text style={[styles.rule, { color: hasNumber ? "green" : "red" }]}>
            • Al menos un número
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, !passwordValid && { backgroundColor: "#ccc" }]}
          disabled={!passwordValid}
          onPress={() => setCurrentScreen(SCREENS.PASSWORD_SUCCESS)}
        >
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const RequestCode = () => (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setCurrentScreen(SCREENS.CREATE_NEW_PASSWORD)}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Solicitar Código</Text>

        <Text style={styles.desc}>
          Ingresa el correo registrado para reenviarte un nuevo código de verificación.
        </Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen(SCREENS.CREATE_NEW_PASSWORD)}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const PasswordChangeSuccessful = () => (
    <LinearGradient
      colors={["#ffffffff", "#009CFF"]}
      locations={[0.2, 0.8]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ImageBackground
        source={require("../img/coete.png")}
        style={styles.coete}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setCurrentScreen(SCREENS.RECOVER_PASSWORD)}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Cambio de contraseña exitosa</Text>

        <View style={styles.stepsRow}>
          <View style={styles.stepCircleChecked}>
            <Ionicons name="checkmark" size={22} color="#009CFF" />
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepCircleChecked}>
            <Ionicons name="checkmark" size={22} color="#009CFF" />
          </View>
        </View>

        <Text style={styles.desc}>
          Actualización exitosa, el cambio de contraseña fue realizada correctamente.{"\n\n"}
          Vuelve a iniciar sesión para poder ingresar
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen(SCREENS.RECOVER_PASSWORD)}
        >
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  // OJO ACA HAY CONFUNSION
  switch (currentScreen) {
    case SCREENS.RECOVER_PASSWORD:
      return <RecoverPassword />;
    case SCREENS.CREATE_NEW_PASSWORD:
      return <CreateANewPassword />;
    case SCREENS.REQUEST_CODE:
      return <RequestCode />;
    case SCREENS.PASSWORD_SUCCESS:
      return <PasswordChangeSuccessful />;
    default:
      return <RecoverPassword />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  coete: {
    width: 220,
    height: 220,
    position: "absolute",
    top: 440,
    right: 360,
    transform: [{ scale: 5.5 }, { rotate: "-15deg" }],
  },
  card: {
    width: 340,
    padding: 28,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  backBtn: {
    position: "absolute",
    left: 18,
    top: 18,
    zIndex: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 18,
    marginTop: 8,
    textAlign: "center",
  },
  stepsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    justifyContent: "center",
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center",
  },
  stepCircleChecked: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    justifyContent: "center",
  },
  stepNum: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#888",
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: "#EAEAEA",
    marginHorizontal: 8,
  },
  desc: {
    fontSize: 15,
    color: "#444",
    marginBottom: 12,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    color: "#222",
    alignSelf: "flex-start",
    marginBottom: 4,
    marginLeft: 2,
  },
  input: {
    width: "100%",
    height: 44,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 18,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  rule: {
    fontSize: 14,
    marginBottom: 4,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  codeInput: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 4,
    backgroundColor: "#F8F8F8",
  },
  resendBtn: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  resendText: {
    color: "#009CFF",
    fontSize: 13,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#009CFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});