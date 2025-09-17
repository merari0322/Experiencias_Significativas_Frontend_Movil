import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Image 
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
  { id: "10", empty: true }, 
];


const dataExperiencias = [
  { id: "1", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
  { id: "2", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
  { id: "3", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
  { id: "4", title: "Visitar Experiencia", image: require("../img/experiencia.png") },
];

export default function AdmPage({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleSearch = (query) => {
    console.log("Buscando:", query);
  };

  const handleMenu = () => {
    setMenuVisible(true); 
  };

  const handleCloseMenu = () => {
    setMenuVisible(false); 
  };

  const handleNavigate = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  const renderEje = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.card, { backgroundColor: "transparent", elevation: 0, shadowOpacity: 0 }]} />;
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
      <View style={styles.containerr}>
        <SearchBar onSearch={handleSearch} onMenu={handleMenu} />
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>Ejes temáticos</Text>
        <FlatList
          data={dataEjes}
          renderItem={renderEje}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>Experiencias</Text>
        <FlatList
          data={dataExperiencias}
          renderItem={renderExperiencia}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>

      <CustomMenu 
        visible={menuVisible} 
        onClose={handleCloseMenu} 
        onNavigate={handleNavigate} 
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
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
    marginTop: -5,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#009CFF",
    marginBottom: 15,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 5,
    minHeight: 140,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  iconLarge: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
  },
  button: {
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
});
