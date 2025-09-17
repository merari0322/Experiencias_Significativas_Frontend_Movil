import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import CustomMenu from "../components/CustomMenu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

const cardsData = [
  {
    icon: require("../img/academico.png"),
    value: "2",
    label: "Número de experiencias registradas en la vigencia",
  },
  {
    icon: require("../img/ambiental.png"),
    value: "2",
    label: "Número de experiencias con plan de mejoramiento",
  },
  {
    icon: require("../img/arte.png"),
    value: "2",
    label: "Cantidad de docentes formados mediante las rutas a la significación",
  },
  {
    icon: require("../img/ciencia.png"),
    value: "2",
    label: "Número de experiencias que participan en eventos o convocatorias en la actual vigencia",
  },
  {
    icon: require("../img/comunicacion.png"),
    value: "2",
    label: "Instituciones educativas que registraron experiencias",
  },
  {
    icon: require("../img/deporte.png"),
    value: "2",
    label: "Crecimiento en la inscripción de experiencias nuevas en el proceso",
  },
  {
    icon: require("../img/flecha.png"),
    value: "2",
    label: "Crecimiento en la inscripción de experiencias. Actualización que continúan en el proceso",
  },
  {
    icon: require("../img/inclusion.png"),
    value: "25%",
    label: "Participación de eventos SEM",
  },
  {
    icon: require("../img/libros.png"),
    value: "2",
    label: "Experiencias significativas en estado de desarrollo naciente",
    sub: ["experiencias significativas en estado de desarrollo naciente"],
  },
  {
    icon: require("../img/mundo.png"),
    value: "2",
    label: "Experiencias significativas en estado de desarrollo creciente",
    sub: ["experiencias significativas en estado de desarrollo creciente"],
  },
  {
    icon: require("../img/coete.png"),
    value: "2",
    label: "Experiencias significativas en estado de desarrollo inspiradora",
    sub: ["experiencias significativas en estado de desarrollo inspiradora"],
  },
];

export default function Follow_upPage() {
  const [search, setSearch] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const filteredCards = cardsData.filter(card =>
    card.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleMenu = () => setMenuVisible(true);

  const handleNavigate = (screen: keyof RootStackParamList) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <SearchBar onSearch={setSearch} onMenu={handleMenu} />
      <CustomMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredCards.map((card, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={card.icon} style={styles.icon} />
              <Text style={styles.value}>{card.value}</Text>
            </View>
            <Text style={styles.label}>{card.label}</Text>
            {card.sub && (
              <View style={styles.subList}>
                {card.sub.map((s, i) => (
                  <Text key={i} style={styles.subItem}>✓ {s}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 10,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
    resizeMode: "contain",
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginLeft: "auto",
  },
  label: {
    fontSize: 15,
    color: "#444",
    marginBottom: 4,
  },
  subList: {
    marginTop: 6,
    marginLeft: 10,
  },
  subItem: {
    fontSize: 14,
    color: "#009CFF",
    marginBottom: 2,
  },
});

type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  // Agrega aquí tus pantallas
};