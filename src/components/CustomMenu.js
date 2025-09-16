import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CustomMenu({ visible, onClose, onNavigate }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.menu}>

          <View style={styles.header}>
            <Image
              source={require("../img/coetesolo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>
              Gestión de Experiencias Significativas
            </Text>
          </View>


          <View style={styles.userSection}>
            <Image
              source={require("../img/persona.png")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.userName}>Juan Perdomo</Text>
              <Text style={styles.userRole}>Admin</Text>
            </View>
          </View>


          <TouchableOpacity
            onPress={() => onNavigate("AdmPage")}
            style={styles.item}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="home-outline" size={24} color="black" />{" "}
            </View>
            <Text style={styles.text}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onNavigate("MenuPage")}
            style={styles.item}
          >
            <View style={styles.iconCircle}>
              <MaterialIcons name="computer" size={24} color="black" />{" "}
            </View>
            <Text style={styles.text}>Seguimiento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onNavigate("ExperienciaPage")}
            style={styles.item}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="document-text-outline" size={24} color="black" />{" "}
            </View>
            <Text style={styles.text}>Experiencia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onNavigate("EvaluacionPage")}
            style={styles.item}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="bar-chart-outline" size={22} color="#000" />
            </View>
            <Text style={styles.text}>Evaluación</Text>
          </TouchableOpacity>

          {/* Botón cerrar */}
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    marginBottom: 25,
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
  userRole: {
    fontSize: 14,
    color: "gray",
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
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    marginLeft: 12,
    color: "#000000ff",
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
