import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ChangePasswordModal from "./ChangePasswordModal"; // Asegúrate que la ruta sea correcta

export default function CustomMenu({ visible, onClose, onNavigate, onLogout }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCloseMenu = () => {
    setShowUserMenu(false); 
    onClose();              
  };

  const handleSavePassword = () => {
    setPasswordModalVisible(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Modal visible={visible} transparent animationType="fade">
        <Pressable
          style={styles.overlay}
          onPress={handleCloseMenu}
        >
          <Pressable style={styles.menu} onPress={(e) => e.stopPropagation()}>
            <View style={styles.header}>
              <Image
                source={require("../img/coetesolo.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>
                Gestión de Experiencias Significativas
              </Text>
            </View>
            <View style={{ alignItems: "center", marginBottom: 18 }}>
              <TouchableOpacity
                style={styles.userSection}
                onPress={() => setShowUserMenu(!showUserMenu)}
                activeOpacity={0.8}
              >
                <Image
                  source={require("../img/persona.png")}
                  style={styles.avatar}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.userName}>Juan Perdomo</Text>
                  <Ionicons
                    name={showUserMenu ? "chevron-up-outline" : "chevron-down-outline"}
                    size={18}
                    color="#555"
                    style={{ marginLeft: 6 }}
                  />
                </View>
              </TouchableOpacity>
              {showUserMenu && (
                <View style={styles.userMenu}>
                  <TouchableOpacity
                    style={styles.userMenuItem}
                    onPress={() => setPasswordModalVisible(true)}
                  >
                    <Text style={styles.userMenuText}>Cambiar tu contraseña</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userMenuItem}>
                    <Text style={styles.userMenuText}>Ayuda</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={onLogout}
                  >
                    <Text style={styles.logoutText}>Finalizar sesión</Text>
                    <Ionicons name="power-outline" size={18} color="#fff" style={{ marginLeft: 5 }} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => onNavigate("AdmPage")}
              style={styles.item}
            >
              <View style={styles.iconCircle}>
                <Ionicons name="home-outline" size={24} color="black" />
              </View>
              <Text style={styles.text}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onNavigate("Follow_upPage")}
              style={styles.item}
            >
              <View style={styles.iconCircle}>
                <MaterialIcons name="computer" size={24} color="black" />
              </View>
              <Text style={styles.text}>Seguimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onNavigate("ExperiencePage")}
              style={styles.item}
            >
              <View style={styles.iconCircle}>
                <Ionicons name="document-text-outline" size={24} color="black" />
              </View>
              <Text style={styles.text}>Experiencia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseMenu} style={styles.closeBtn}>
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>

      <ChangePasswordModal
        visible={passwordModalVisible}
        onClose={() => setPasswordModalVisible(false)}
        onSave={handleSavePassword}
        currentPassword={currentPassword}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        onChangeCurrent={setCurrentPassword}
        onChangeNew={setNewPassword}
        onChangeConfirm={setConfirmPassword}
      />
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
  menu: {
    width: "70%",
    maxWidth: 280,
    height: "85%",
    backgroundColor: "#ECECEC",
    borderRadius: 16,
    marginTop: 20,
    marginLeft: 85,
    padding: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    width: 120,
    height: 120,
    marginLeft: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#009CFF",
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    marginBottom: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  userMenu: {
    backgroundColor: "#fff",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    paddingVertical: 6,
    minWidth: 180,
    elevation: 2,
    zIndex: 2,
  },
  userMenuItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  userMenuText: {
    color: "#222",
    fontSize: 15,
  },
  logoutBtn: {
    marginTop: 8,
    backgroundColor: "#F5222D",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    marginLeft: 12,
    color: "#000",
  },
  closeBtn: {
    marginTop: 30,
    paddingVertical: 12,
    backgroundColor: "#009CFF",
    alignItems: "center",
    borderRadius: 8,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});