import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  StyleSheet,  Alert,  ScrollView,  KeyboardAvoidingView,  Platform,  StatusBar, } from 'react-native';    
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { ImageBackground } from "react-native";
import { savePerson } from "../api/Services/PersonService";
import { PersonDTO } from "../api/Types/PersonTypes";
import { useRegistrationEnums } from "../hooks/useEnums";

export default function RegisterPage({ navigation }) {
  // Hook para obtener los enums desde el backend
  const { enums, loading: enumsLoading, error: enumsError, getEnumForPicker } = useRegistrationEnums();
  
  const [formData, setFormData] = useState({
    documentType: '',
    identificationNumber: '',
    firstName: '',
    middleName: '',
    firstLastName: '',
    secondLastName: '',
    fullName: '',
    codeDane: '',
    emailInstitutional: '',
    email: '',
    phone: '',
    // Puedes agregar otros campos si el backend lo requiere
  });

  // Mostrar error si hay problemas cargando los enums
  React.useEffect(() => {
    if (enumsError) {
      Alert.alert("Error", `No se pudieron cargar las opciones: ${enumsError}`);
    }
  }, [enumsError]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistro = async () => {
    // Validación básica
    if (!formData.firstName || !formData.firstLastName || !formData.emailInstitutional) {
      Alert.alert("Error", "Completa los campos obligatorios");
      return;
    }

    // Construir el DTO para el backend
    const personDTO: PersonDTO = {
      id: 0, // El backend lo ignora o lo asigna
      documentType: formData.documentType,
      identificationNumber: formData.identificationNumber,
      firstName: formData.firstName,
      middleName: formData.middleName,
      firstLastName: formData.firstLastName,
      secondLastName: formData.secondLastName,
      fullName: `${formData.firstName} ${formData.middleName} ${formData.firstLastName} ${formData.secondLastName}`.trim(),
      codeDane: formData.codeDane,
      emailInstitutional: formData.emailInstitutional,
      email: formData.email,
      phone: Number(formData.phone),
    };

    try {
      const response = await savePerson(personDTO);
      Alert.alert("Registro exitoso", "Persona creada correctamente");
      navigation.navigate("LoginPage");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "No se pudo registrar la persona");
    }
  };
  

  return (
    <View style={styles.container}>      
      <LinearGradient
        colors={["#ffffffff", "#009CFF"]}
        locations={[0.2, 0.8]} 
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
      
            <ImageBackground
              source={require("../img/coete.png")}
              style={styles.coete}
              resizeMode="contain"
            ></ImageBackground>

        
          <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.card}>
                
              <Text style={styles.title}>Registro</Text>
              
              <View style={styles.formContainer}>
                
                {/* Nombres */}
                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Primer Nombre:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.firstName}
                      onChangeText={(value) => handleInputChange('firstName', value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Segundo Nombre:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.middleName}
                      onChangeText={(value) => handleInputChange('middleName', value)}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Primer Apellido:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.firstLastName}
                      onChangeText={(value) => handleInputChange('firstLastName', value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Segundo Apellido:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.secondLastName}
                      onChangeText={(value) => handleInputChange('secondLastName', value)}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Tipo de documento:</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={formData.documentType}
                        style={styles.picker}
                        onValueChange={(value) => handleInputChange('documentType', value)}
                        mode="dropdown"
                        enabled={!enumsLoading}
                      >
                        {enumsLoading ? (
                          <Picker.Item label="Cargando..." value="" />
                        ) : (
                          getEnumForPicker('DocumentType').map((item) => (
                            <Picker.Item 
                              key={item.key} 
                              label={item.value} 
                              value={item.key} 
                            />
                          ))
                        )}
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Número de documento:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.identificationNumber}
                      onChangeText={(value) => handleInputChange('identificationNumber', value)}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Código DANE:</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={formData.codeDane}
                        style={styles.picker}
                        onValueChange={(value) => handleInputChange('codeDane', value)}
                        mode="dropdown"
                        enabled={!enumsLoading}
                      >
                        {enumsLoading ? (
                          <Picker.Item label="Cargando..." value="" />
                        ) : (
                          getEnumForPicker('CodeDane').map((item) => (
                            <Picker.Item 
                              key={item.key} 
                              label={item.value} 
                              value={item.key} 
                            />
                          ))
                        )}
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Correo institucional:</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={formData.emailInstitutional}
                        style={styles.picker}
                        onValueChange={(value) => handleInputChange('emailInstitutional', value)}
                        mode="dropdown"
                        enabled={!enumsLoading}
                      >
                        {enumsLoading ? (
                          <Picker.Item label="Cargando..." value="" />
                        ) : (
                          getEnumForPicker('EmailInstitutional').map((item) => (
                            <Picker.Item 
                              key={item.key} 
                              label={item.value} 
                              value={item.key} 
                            />
                          ))
                        )}
                      </Picker>
                    </View>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Correo personal:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.email}
                      onChangeText={(value) => handleInputChange('email', value)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Teléfono:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.phone}
                      onChangeText={(value) => handleInputChange('phone', value)}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleRegistro}>
                  <Text style={styles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>

                {/* Link de inicio de sesión */}
                <TouchableOpacity 
                  style={styles.loginLinkContainer}
                  onPress={() => navigation.navigate('LoginPage')}
                >
                  <Text style={styles.loginLinkText}>¿Quieres iniciar sesión?</Text>
                </TouchableOpacity>

              </View>
            </View>
          </ScrollView>
      </LinearGradient>
    </View>
  );            
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  },
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
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 15,
    padding: 20,
    width: '100%',
    height: '85%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4,},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#000000ff',
    marginTop: 8,
  },
  formContainer: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  inputContainer: {
    flex: 1,
    marginBottom: -6,
  },
  fullInputContainer: {
    width: '100%',
    marginBottom: -6,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    fontSize: 14,
    color: '#374151',
  },
  fullInput: {
    width: '100%',
  },
  pickerContainer: {
    height: 35,
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  picker: {
    height: 35,
    color: '#000000ff',
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: '#009CFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#009CFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  loginLinkContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  loginLinkText: {
    color: '#009CFF',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: -18,
  },
});
