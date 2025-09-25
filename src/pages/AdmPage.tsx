import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchBar from "../components/SearchBar";
import CustomMenu from "../components/CustomMenu";

const dataEjes = [
  { id: "1", title: "Educación Ambiental", image: require("../img/ambiental.png") },
  { id: "2", title: "Ciencia y Tecnología", image: require("../img/ciencia.png") },
  { id: "3", title: "Interculturalidad\nBilingüismo", image: require("../img/libros.png") },
  { id: "4", title: "Arte, Cultura y", image: require("../img/arte.png") },
  { id: "5", title: "Habilidades\nComunicativas", image: require("../img/comunicacion.png") },
  { id: "6", title: "Académica Curricular", image: require("../img/academico.png") },
  { id: "7", title: "Inclusión Diversidad", image: require("../img/inclusion.png") },
  { id: "8", title: "Convivencia Escolar\n(Ciencias Sociales)", image: require("../img/mundo.png") },
  { id: "9", title: "Danza, Deporte y Recreación", image: require("../img/deporte.png") },
];

const dataExperiencias = [
  { id: "1", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
  { id: "2", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
];

// Utilidad para agregar la card fantasma si es necesario
const getEjesWithGhost = (data) => {
  const isOdd = data.length % 2 !== 0;
  if (isOdd) {
    return [...data, { id: "ghost", isGhost: true }];
  }
  return data;
};

export default function AdmPage({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ejes"); // "ejes" o "experiencias"

  const handleSearch = (query) => {
    console.log("Buscando:", query);
  };

  const handleMenu = () => setMenuVisible(true);
  const handleCloseMenu = () => setMenuVisible(false);

  const handleNavigate = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  const renderEje = ({ item }) => {
    // Si el item es fantasma, renderiza una card invisible
    if (item.isGhost) {
      return <View style={[styles.card, styles.cardGhost]} />;
    }
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={item.image} style={styles.icon} resizeMode="contain" />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderExperiencia = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.iconLarge} resizeMode="contain" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      {/* Barra de búsqueda y menú */}
      <View style={styles.containerr}>
        <SearchBar onSearch={handleSearch} onMenu={handleMenu} />
      </View>

      {/* Filtros */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === "ejes" && styles.filterButtonSelected,
          ]}
          onPress={() => setSelectedFilter("ejes")}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilter === "ejes" && styles.filterTextSelected,
            ]}
          >
            Ejes temáticos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === "experiencias" && styles.filterButtonSelected,
          ]}
          onPress={() => setSelectedFilter("experiencias")}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilter === "experiencias" && styles.filterTextSelected,
            ]}
          >
            Experiencias
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista filtrada */}
      {selectedFilter === "ejes" ? (
        <View style={styles.container}>
          <FlatList
            data={getEjesWithGhost(dataEjes)}
            renderItem={renderEje}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.verticalList}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={dataExperiencias}
            renderItem={renderExperiencia}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.verticalList}
          />
        </View>
      )}

      {/* Menú personalizado */}
      <CustomMenu
        visible={menuVisible}
        onClose={handleCloseMenu}
        onNavigate={handleNavigate}
        onLogout={undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  containerr: {
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 14,
    top: -15,
  },
  filterButton: {
    backgroundColor: "#e7e7e7",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 22,
  },
  filterButtonSelected: {
    backgroundColor: "#009CFF",
  },
  filterText: {
    fontSize: 16,
    color: "#009CFF",
    fontWeight: "bold",
  },
  filterTextSelected: {
    color: "#fff",
  },
  container: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    marginTop: -20,
    flex: 1,
    marginLeft: 10,
    paddingTop: 7,
  },
  verticalList: {
    paddingBottom: 30,
    paddingTop: 5,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    minWidth: 140,
    minHeight: 140,
    flex: 1,
  },
  cardGhost: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowColor: "transparent",
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  iconLarge: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    width: 125,
  },
  button: {
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 125,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
});