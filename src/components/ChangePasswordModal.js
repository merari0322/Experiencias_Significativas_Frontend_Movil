import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChangePasswordModal({
  visible,
  onClose,
  onSave,
  currentPassword,
  newPassword,
  confirmPassword,
  onChangeCurrent,
  onChangeNew,
  onChangeConfirm,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={28} color="#222" />
          </TouchableOpacity>
          <View style={styles.iconCircle}>
            <Ionicons name="lock-closed-outline" size={40} color="#33AFFF" />
          </View>
          <Text style={styles.title}>Cambiar contraseña</Text>
          <Text style={styles.subtitle}>
            Ingresa tu contraseña actual y crea una nueva
          </Text>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.label}>Contraseña actual</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña actual"
              secureTextEntry
              value={currentPassword}
              onChangeText={onChangeCurrent}
              autoCapitalize="none"
            />
            <Text style={styles.label}>Nueva contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu nueva contraseña"
              secureTextEntry
              value={newPassword}
              onChangeText={onChangeNew}
              autoCapitalize="none"
            />
            <Text style={styles.label}>Confirmar nueva contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirma tu nueva contraseña"
              secureTextEntry
              value={confirmPassword}
              onChangeText={onChangeConfirm}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.securityBox}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 3 }}>
              <Ionicons name="shield-checkmark-outline" size={18} color="#33AFFF" />
              <Text style={styles.securityTitle}>Seguridad:</Text>
            </View>
            <Text style={styles.securityText}>• Usa al menos 8 caracteres</Text>
            <Text style={styles.securityText}>• Incluye mayúsculas, minúsculas y números</Text>
            <Text style={styles.securityText}>• Al menos un número</Text>
          </View>
          {/* Botones */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
              <Text style={styles.saveText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(44, 44, 44, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 22,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    right: 14,
    top: 14,
    zIndex: 10,
    padding: 4,
  },
  iconCircle: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: "#E8F5FF",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 2,
    marginBottom: 2,
    color: "#222",
  },
  subtitle: {
    color: "#666",
    marginBottom: 10,
    fontSize: 15,
    textAlign: "left",
  },
  label: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 7,
    height: 40,
    paddingHorizontal: 12,
    fontSize: 15,
    marginBottom: 2,
  },
  securityBox: {
    backgroundColor: "#F3F7FA",
    borderRadius: 8,
    padding: 12,
    marginTop: 18,
    marginBottom: 10,
  },
  securityTitle: {
    fontWeight: "bold",
    color: "#222",
    marginLeft: 6,
    fontSize: 15,
  },
  securityText: {
    color: "#555",
    fontSize: 14,
    marginLeft: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 7,
    paddingVertical: 12,
    marginRight: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "#222",
    fontWeight: "500",
    fontSize: 16,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#009CFF",
    borderRadius: 7,
    paddingVertical: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});