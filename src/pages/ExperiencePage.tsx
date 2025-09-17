import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import CustomMenu from "../components/CustomMenu";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define tus rutas aquí
type RootStackParamList = {
  AdmPage: undefined;
  Follow_upPage: undefined;
  ExperiencePage: undefined;
  // Agrega aquí las rutas que tengas en tu navegación
};

export default function ExperiencePage() {
	const [search, setSearch] = useState("");
	const [menuVisible, setMenuVisible] = useState(false);

	// Tipa el hook de navegación
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const experiences = [
		{ id: 1, icon: require("../img/experiencia.png"), name: "Visitar Experiencia" },
		{ id: 2, icon: require("../img/experiencia.png"), name: "Visitar Experiencia" },
	];

	const newExperiences = [
		{ id: 1, name: "Agregar Nueva Experiencia" },
		{ id: 2, name: "Agregar Nueva Experiencia" },
	];

	const handleMenu = () => {
		setMenuVisible(true);
	};

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
				<Text style={styles.sectionTitle}>Actualizar Experiencias</Text>
				<View style={styles.row}>
					{experiences.map(exp => (
						<View key={exp.id} style={styles.expCard}>
							<Image source={exp.icon} style={styles.expIcon} />
							<TouchableOpacity style={styles.expButton}>
								<Text style={styles.expButtonText}>{exp.name}</Text>
							</TouchableOpacity>
						</View>
					))}
				</View>

				<Text style={styles.sectionTitle}>Registro de Experiencias Nuevas</Text>
				<View style={styles.row}>
					{newExperiences.map(exp => (
						<TouchableOpacity key={exp.id} style={styles.addCard}>
							<View style={styles.plusCircle}>
								<Text style={styles.plus}>+</Text>
							</View>
							<Text style={styles.addText}>{exp.name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollContent: {
		padding: 10,
		paddingBottom: 40,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#009CFF",
		marginTop: 10,
		marginBottom: 12,
		marginLeft: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 16,
		marginBottom: 24,
	},
	expCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",
		width: 140,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
	},
	expIcon: {
		width: 48,
		height: 48,
		marginBottom: 10,
		resizeMode: "contain",
	},
	expButton: {
		backgroundColor: "#F5F5F5",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginTop: 4,
	},
	expButtonText: {
		color: "#009CFF",
		fontWeight: "bold",
		fontSize: 15,
	},
	addCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",
		width: 140,
		borderWidth: 1,
		borderColor: "#009CFF33",
		marginRight: 16,
	},
	plusCircle: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#F5F5F5",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
	},
	plus: {
		fontSize: 28,
		color: "#009CFF",
		fontWeight: "bold",
	},
	addText: {
		color: "#888",
		fontSize: 14,
		textAlign: "center",
	},
});
