import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onSearch, onMenu }) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Buscar Experiencia"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() => onSearch && onSearch(search)}
      />


      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => onSearch && onSearch(search)}
      >
        <Ionicons
          name="search-outline"
          size={22}
          color="#009CFF"
          style={{ marginTop: 2 }} 
        />
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.menuButton} 
        onPress={onMenu}
      >
        <Ionicons name="menu-outline" size={22} color="#009CFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 20,
    marginTop: 40,
  },
  input: {
    flex: 1,
    width: 55,
    height: 45,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  iconButton: {
    marginLeft: -40, 
  },
  menuButton: {
    backgroundColor: "#ffffffff",
    width: 40,
    height: 40,
    marginLeft: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    left: 10,
  },
});
