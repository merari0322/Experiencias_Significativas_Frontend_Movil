import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

const roles = ["Evaluador", "Tutor", "Otro"];
const tiposEvaluacion = ["Inicial", "Intermedia", "Final"];
const instituciones = ["Institución 1", "Institución 2", "Institución 3"];
const enfoques = ["Ambiental", "Académico", "Cultural", "Otro"];

export default function EvaluacionExperienciaPage() {
	// Estados para los campos del formulario
	const [rol, setRol] = useState("");
	const [nombre, setNombre] = useState("");
	const [tipoEval, setTipoEval] = useState("");
	const [institucion, setInstitucion] = useState("");
	const [enfoque, setEnfoque] = useState("");
	const [estadoDesarrollo, setEstadoDesarrollo] = useState("");
	const [nombreExp, setNombreExp] = useState("");

	const criterios = [
		{ key: "pertinencia", label: "Pertinencia", rango: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
		{ key: "fundamentacion", label: "Fundamentación", rango: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
		{ key: "innovacion", label: "Innovación", rango: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
		{ key: "resultados", label: "Resultados", rango: [0, 1, 2, 3, 4, 5, 11, 12, 13, 14, 15] },
		{ key: "empoderamiento", label: "Empoderamiento (liderazgo)", rango: [0, 1, 2, 6, 7, 8, 9, 10] },
		{ key: "seguimiento", label: "Seguimiento y Valoración", rango: [0, 1, 2, 6, 7, 8, 9, 10] },
		{ key: "transformacion", label: "Transformación", rango: [0, 1, 2, 6, 7, 8, 9, 10] },
		{ key: "sostenibilidad", label: "Sostenibilidad", rango: [0, 1, 2, 6, 7, 8, 9, 10] },
		{ key: "transferencia", label: "Transferencia", rango: [0, 1, 2, 6, 7, 8, 9, 10] },
	];

	const [valoresCriterios, setValoresCriterios] = useState({});
	const [aportesCriterios, setAportesCriterios] = useState({});

	const [conceptoFinal, setConceptoFinal] = useState("");

	const handleRadio = (criterio, valor) => {
		setValoresCriterios(prev => ({ ...prev, [criterio]: valor }));
	};
	const handleAporte = (criterio, texto) => {
		setAportesCriterios(prev => ({ ...prev, [criterio]: texto }));
	};

	const handleSubmit = () => {
		alert("Formulario enviado correctamente");
	};

	return (
		<LinearGradient
			colors={["#ffffffff", "#009CFF"]}
			locations={[0.2, 0.8]}
			start={{ x: 1, y: 0 }}
			end={{ x: 0, y: 1 }}
			style={styles.gradient}
		>
			<ImageBackground
				source={require("../img/coete.png")}
				style={styles.coete}
				resizeMode="contain"
			/>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Text style={styles.headerTitle}>Formulario de Evaluación de Experiencias Significativas</Text>
				<Text style={styles.headerSubtitle}>Sistema de evaluación para experiencias educativas</Text>

				{/* 1. Información del Evaluador */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>1. Información del Evaluador</Text>
					<Text style={styles.sectionDesc}>En esta sección se registra los datos básicos del evaluador asignado a cada una de las experiencias significativas</Text>
					
					<View style={styles.row}>
						<View style={styles.inputGroup}>
							<Text style={styles.label}>Rol en el acompañamiento de la experiencia significativa *</Text>
							<View style={styles.pickerContainer}>
								<Picker
									selectedValue={rol}
									onValueChange={setRol}
									style={styles.picker}
								>
									<Picker.Item label="Elegir" value="" />
									{roles.map(r => <Picker.Item key={r} label={r} value={r} />)}
								</Picker>
							</View>
						</View>
						<View style={styles.inputGroup}>
							<Text style={styles.label}>Nombre Completo *</Text>
							<View style={styles.pickerContainer}>
								<Picker
									selectedValue={nombre}
									onValueChange={setNombre}
									style={styles.picker}
								>
									<Picker.Item label="Elegir" value="" />
									<Picker.Item label="Juan Pérez" value="Juan Pérez" />
									<Picker.Item label="María García" value="María García" />
									<Picker.Item label="Carlos López" value="Carlos López" />
								</Picker>
							</View>
						</View>
					</View>
					
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Tipo de evaluación que aplicará a la experiencia significativa *</Text>
						<View style={styles.pickerContainer}>
							<Picker
								selectedValue={tipoEval}
								onValueChange={setTipoEval}
								style={styles.picker}
							>
								<Picker.Item label="Elegir" value="" />
								{tiposEvaluacion.map(t => <Picker.Item key={t} label={t} value={t} />)}
							</Picker>
						</View>
					</View>
				</View>

				{/* 2. Información de la experiencia */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>2. Información de la experiencia Significativa a evaluar</Text>
					<Text style={styles.sectionDesc}>En esta sección se selecciona la experiencia significativa a evaluar según la información suministrada por la SEM a través de la ficha de registro / actualización</Text>
					
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Seleccione la Institución Educativa a la que pertenece: *</Text>
						<View style={styles.pickerContainer}>
							<Picker
								selectedValue={institucion}
								onValueChange={setInstitucion}
								style={styles.picker}
							>
								<Picker.Item label="Elegir" value="" />
								{instituciones.map(i => <Picker.Item key={i} label={i} value={i} />)}
							</Picker>
						</View>
					</View>
					
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Enfoque temático de la Experiencia Significativa *</Text>
						<View style={styles.pickerContainer}>
							<Picker
								selectedValue={enfoque}
								onValueChange={setEnfoque}
								style={styles.picker}
							>
								<Picker.Item label="Elegir" value="" />
								{enfoques.map(e => <Picker.Item key={e} label={e} value={e} />)}
							</Picker>
						</View>
					</View>
					
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Estado de desarrollo en el que se encuentra actualmente la experiencia *</Text>
						<View style={styles.radioRow}>
							{['Naciente', 'Creciente', 'Inspiradora'].map(opt => (
								<TouchableOpacity
									key={opt}
									style={styles.radioOption}
									onPress={() => setEstadoDesarrollo(opt)}
								>
									<View style={[styles.radioCircle, estadoDesarrollo === opt && styles.radioChecked]} />
									<Text style={styles.radioLabel}>{opt}</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>
					
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Nombre de la Experiencia Significativa: *</Text>
						<View style={styles.pickerContainer}>
							<Picker
								selectedValue={nombreExp}
								onValueChange={setNombreExp}
								style={styles.picker}
							>
								<Picker.Item label="Elegir" value="" />
								<Picker.Item label="Proyecto Ambiental Escolar" value="proyecto_ambiental" />
								<Picker.Item label="Innovación Tecnológica" value="innovacion_tech" />
								<Picker.Item label="Cultura y Tradiciones" value="cultura_tradiciones" />
							</Picker>
						</View>
					</View>
				</View>

				{criterios.map(crit => (
					<View key={crit.key} style={styles.section}>
						<Text style={styles.sectionTitle}>Criterio: {crit.label}</Text>
						<Text style={styles.sectionDesc}>{getCriterioDescripcion(crit.key)}</Text>
						
						<Text style={styles.subSectionDesc}>{getCriterioSubDescripcion(crit.key)}</Text>
						
						<View style={styles.radioRowWrap}>
							{crit.rango.map(val => (
								<TouchableOpacity
									key={val}
									style={styles.radioOption}
									onPress={() => handleRadio(crit.key, val)}
								>
									<View style={[styles.radioCircle, valoresCriterios[crit.key] === val && styles.radioChecked]} />
									<Text style={styles.radioLabel}>{val}</Text>
								</TouchableOpacity>
							))}
						</View>
						
						<Text style={styles.label}>Aportes para el mejoramiento frente al criterio evaluado {crit.label} (Si no hay aportes favor escribir "NO APLICA")</Text>
						<TextInput
							style={[styles.input, styles.textArea]}
							value={aportesCriterios[crit.key] || ""}
							onChangeText={t => handleAporte(crit.key, t)}
							placeholder="Tu respuesta"
							multiline
							numberOfLines={3}
						/>
					</View>
				))}

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>4. Concepto final de Evaluación</Text>
					<Text style={styles.sectionDesc}>En esta sección se debe emitir el concepto final por cada una de las experiencias significativas, esto con base en las valoraciones anteriormente realizada y a la evolución que esta ha tenido durante su trayectoria.</Text>
					
					<View style={styles.guiaContainer}>
						<Text style={styles.guiaTitle}>Guía de valoración - equivalencia cuantitativa y cualitativa</Text>
						<Text style={styles.guiaItem}><Text style={styles.guiaBold}>Naciente:</Text> Menor o igual a 45 puntos</Text>
						<Text style={styles.guiaItem}><Text style={styles.guiaBold}>Creciente:</Text> Mayor de 46 y menor o igual a 79 puntos</Text>
						<Text style={styles.guiaItem}><Text style={styles.guiaBold}>Inspiradora:</Text> Mayor o igual a 80 puntos</Text>
					</View>
					
					<Text style={styles.label}>Respecto a la evaluación la experiencia significativa una vez analizado su evolución y trayectoria se valora como:</Text>
					<View style={styles.radioRow}>
						{['Naciente', 'Creciente', 'Inspiradora'].map(opt => (
							<TouchableOpacity
								key={opt}
								style={styles.radioOption}
								onPress={() => setConceptoFinal(opt)}
							>
								<View style={[styles.radioCircle, conceptoFinal === opt && styles.radioChecked]} />
								<Text style={styles.radioLabel}>{opt}</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				{/* Botón enviar */}
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Enviar</Text>
				</TouchableOpacity>
			</ScrollView>
		</LinearGradient>
	);
}

function getCriterioDescripcion(key) {
	switch (key) {
		case "pertinencia":
			return "Evalúa el grado en que la experiencia responde a las necesidades, problemáticas y características del contexto educativo en que se implementa, asegurando su utilidad real y concreta para la comunidad beneficiada.";
		case "fundamentacion":
			return "Valora la claridad y solidez de los marcos conceptuales, pedagógicos y metodológicos que sustentan la experiencia, así como su articulación con proyectos institucionales (PEI, PMI) y referentes disciplinares.";
		case "innovacion":
			return "Indica la incorporación de prácticas novedosas que transforman las costumbres institucionales, aportan nuevos enfoques teóricos o metodológicos y generan cambios sustanciales en los procesos educativos";
		case "resultados":
			return "Examina los logros obtenidos frente a los objetivos planteados, la mejora en aprendizajes estudiantiles, el impacto institucional y posibles reconocimientos, premios o incentivos recibidos.";
		case "empoderamiento":
			return "Mide el nivel de apropiación, apoyo y promoción de la experiencia por parte de los líderes y la comunidad educativa, demostrando liderazgo efectivo y compromiso institucional para su desarrollo y sostenibilidad";
		case "seguimiento":
			return "Se refiere al uso sistemático de mecanismos, metodologías e instrumentos que permiten monitorear, evaluar periódicamente y ajustar la experiencia para garantizar su mejora continua";
		case "transformacion":
			return "Evalúa la capacidad de la experiencia para provocar cambios relevantes y sostenibles en las prácticas, saberes y relaciones escolares, impactando positivamente en la cultura institucional y los aprendizajes";
		case "sostenibilidad":
			return "Considera la viabilidad de mantener, fortalecer y consolidar la experiencia a lo largo del tiempo, haciendo énfasis en recursos humanos, técnicos, financieros e institucionales necesarios para su continuidad.";
		case "transferencia":
			return "Valora la potencialidad de adaptación, difusión y réplica de la experiencia en otros contextos educativos similares, así como los mecanismos concretos de socialización y apropiación fuera de su espacio original.";
		default:
			return "";
	}
}

function getCriterioSubDescripcion(key) {
	switch (key) {
		case "pertinencia":
			return "Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.\n\nLa experiencia significativa se encuentra en un proceso de identificación de la relación y coherencia con el contexto en el cual se circunscribe, con las acciones a desarrollar, con las necesidades y problemáticas identificadas en función del desarrollo integral de niños, niñas, adolescentes, jóvenes y adulto.";
		case "fundamentacion":
			return "Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.\n\nAún es incipiente o se está ampliando la relación de la experiencia con los elementos del PEI o de los PEC, los planes de vida de etnoeducación del PMI fortaleciendo del EE. En la descripción de los referentes conceptuales y metodológicos, se evidencia como se fortalece la orientación teórica y metodológica.";
		case "innovacion":
			return "Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.\n\nLa ES se encuentra en un proceso de búsqueda y definición de acciones novedosas, de cambios significativos en el diseño y uso de métodos, materiales, contenidos y recursos tecnológicos y no tecnológicos, para propiciar aprendizajes significativos, el desarrollo integral y la transformación de las prácticas, culturas y políticas institucionales.";
		case "resultados":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nDurante la implementación de la experiencia significativa, no se identifica la obtención de logros o son mínimos en relación con los objetivos propuestos. Los resultados obtenidos no han generado un impacto en la solución de las necesidades o problemáticas identificadas.";
		case "empoderamiento":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nLa experiencia significativa permanece en el contexto del aula y es poco conocida por el establecimiento educativo. La aceptación, apropiación y participación de diferentes miembros de la comunidad educativa es incipiente.";
		case "seguimiento":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nLa metodología y/o mecanismos definidos para realizar el seguimiento y la valoración periódica del proceso y los resultados de la experiencia significativa están en construcción.";
		case "transformacion":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nSe encuentran proyectando procesos autorreflexivos y valorativos para reorganizar y actualizar elementos conceptuales, metodológicos e instrumentales, de acuerdo con los resultados de su implementación, con el propósito de generar acciones de mejoramiento tanto de la práctica, como del proceso educativo en general. No se identifica como ha aprendido de sus resultados, ni si los ha usado para su mejoramiento.";
		case "sostenibilidad":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nLos mecanismos que garantizan el mantenimiento, fortalecimiento y consolidación de la experiencia significativa dentro del establecimiento educativo son incipientes.";
		case "transferencia":
			return "Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración, las demás preguntas se debe seleccionar No aplica.\n\nFaltan procesos, metodologías, mecanismos o medios para dar a conocer dentro del establecimiento educativo la concepción, el desarrollo y los resultados de la experiencia.";
		default:
			return "";
	}
}

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
	},
	coete: {
		width: 220,
		height: 220,
		position: "absolute",
		top: 440,
		right: 360,
		transform: [
			{ scale: 5.5 },
			{ rotate: "-15deg" },
		],
	},
	scrollContent: {
		padding: 16,
		paddingBottom: 40,
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#3bb0ff",
		textAlign: "center",
		marginBottom: 2,
		marginTop: 10,
	},
	headerSubtitle: {
		fontSize: 15,
		color: "#3bb0ff",
		textAlign: "center",
		marginBottom: 18,
	},
	section: {
		backgroundColor: "rgba(255,255,255,0.85)",
		borderRadius: 15,
		padding: 18,
		marginBottom: 18,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#009CFF",
		marginBottom: 8,
	},
	sectionDesc: {
		fontSize: 14,
		color: "#444",
		marginBottom: 12,
	},
	subSectionDesc: {
		fontSize: 13,
		color: "#666",
		marginBottom: 15,
		fontStyle: 'italic',
	},
	guiaContainer: {
		backgroundColor: "#f0f8ff",
		padding: 12,
		borderRadius: 8,
		marginBottom: 15,
		borderLeftWidth: 4,
		borderLeftColor: "#009CFF",
	},
	guiaTitle: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#009CFF",
		marginBottom: 8,
	},
	guiaItem: {
		fontSize: 13,
		color: "#333",
		marginBottom: 2,
	},
	guiaBold: {
		fontWeight: "bold",
		color: "#009CFF",
	},
	row: {
		flexDirection: "row",
		gap: 12,
		marginBottom: 8,
	},
	inputGroup: {
		flex: 1,
		marginBottom: 10,
	},
	label: {
		fontSize: 14,
		color: "#222",
		marginBottom: 4,
		marginLeft: 2,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		paddingHorizontal: 10,
		backgroundColor: "rgba(255,255,255,0.8)",
		fontSize: 14,
		color: "#374151",
	},
	pickerContainer: {
		backgroundColor: "#fff",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ccc",
		overflow: 'hidden',
	},
	picker: {
		backgroundColor: "#fff",
		borderRadius: 8,
		height: 40,
	},
	radioRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 18,
		marginBottom: 8,
		flexWrap: "wrap",
	},
	radioRowWrap: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 12,
		marginBottom: 10,
	},
	radioOption: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 10,
		marginBottom: 6,
	},
	radioCircle: {
		width: 18,
		height: 18,
		borderRadius: 9,
		borderWidth: 2,
		borderColor: "#009CFF",
		marginRight: 6,
		backgroundColor: "#fff",
	},
	radioChecked: {
		backgroundColor: "#009CFF",
		borderColor: "#009CFF",
	},
	radioLabel: {
		fontSize: 14,
		color: "#222",
	},
	textArea: {
		minHeight: 60,
		textAlignVertical: "top",
	},
	button: {
		backgroundColor: "#009CFF",
		paddingVertical: 14,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 8,
		marginBottom: 30,
		shadowColor: "#009CFF",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 6,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});