import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import CustomMenu from "../components/CustomMenu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";

const iconBgColors: Record<string, string> = {
  "document-text-outline": "#E3F0FF",
  "trending-up-outline": "#E3FFE6",
  "time-outline": "#FFF5DB",
  "school-outline": "#E3F0FF",
  "calendar-outline": "#E3F0FF",
  "business-outline": "#E3F0FF",
  "people-outline": "#E3FFE6",
};

const iconColors: Record<string, string> = {
  "document-text-outline": "#009CFF",
  "trending-up-outline": "#00B53B",
  "time-outline": "#FFB200",
  "school-outline": "#009CFF",
  "calendar-outline": "#00B53B",
  "business-outline": "#009CFF",
  "people-outline": "#00B53B",
};

const cardsData = [
  {
    icon: "document-text-outline",
    value: "2",
    label: "Número de experiencias registradas en la vigencia",
  },
  {
    icon: "trending-up-outline",
    value: "2",
    label: "Crecimiento en la inscripción de experiencias. Actualización que continúan en el proceso",
  },
  {
    icon: "time-outline",
    value: "2",
    label: "Número de experiencias con plan de mejoramiento",
  },
  {
    icon: "trending-up-outline",
    value: "2",
    label: "Crecimiento en la inscripción de experiencias nuevas en el proceso",
  },
  {
    icon: "school-outline",
    value: "2",
    label: "Cantidad de docentes formados mediante las rutas a la significación",
  },
  {
    icon: "calendar-outline",
    value: "2",
    label: "Número de experiencias que participan en eventos o convocatorias en la actual vigencia",
  },
  {
    icon: "business-outline",
    value: "2",
    label: "Instituciones educativas que registraron experiencias",
  },
  {
    icon: "people-outline",
    value: "25%",
    label: "Participación de eventos SEM",
  },
  {
    value: "2",
    label: "Experiencias significativas en estado de desarrollo naciente",
    sub: ["experiencias significativas en estado de desarrollo naciente"],
  },
  {
    value: "2",
    label: "Experiencias significativas en estado de desarrollo creciente",
    sub: ["experiencias significativas en estado de desarrollo creciente"],
  },
  {
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
              {card.icon && (
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: iconBgColors[card.icon] || "#E3F0FF" },
                  ]}
                >
                  <Ionicons
                    name={card.icon}
                    size={26}
                    color={iconColors[card.icon] || "#009CFF"}
                  />
                </View>
              )}
              <Text style={[styles.value, !card.icon && { marginLeft: 0 }]}>{card.value}</Text>
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
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
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