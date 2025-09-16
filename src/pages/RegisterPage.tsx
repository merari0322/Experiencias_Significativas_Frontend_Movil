import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  StyleSheet,  Alert,  ScrollView,  KeyboardAvoidingView,  Platform,  StatusBar, } from 'react-native';    
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { ImageBackground } from "react-native";

export default function RegisterPage({ navigation }) {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    codigoDane: '',
    nombreUsuario: '',
    correoInstitucional: '',
    contraseña: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistro = () => {
  };handleRegistro
  

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
                    <Text >Primer Nombre:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.primerNombre}
                      onChangeText={(value) => handleInputChange('primerNombre', value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text >Segundo Nombre:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.segundoNombre}
                      onChangeText={(value) => handleInputChange('segundoNombre', value)}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Primer Apellido:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.primerApellido}
                      onChangeText={(value) => handleInputChange('primerApellido', value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Segundo Apellido:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.segundoApellido}
                      onChangeText={(value) => handleInputChange('segundoApellido', value)}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Tipo de documento:</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={formData.tipoDocumento}
                        style={styles.picker}
                        onValueChange={(value) => handleInputChange('tipoDocumento', value)}
                        mode="dropdown"
                      >
                        <Picker.Item label="Seleccionar" value="" />
                        <Picker.Item label="Cédula" value="CC" />
                        <Picker.Item label="Tarjeta de Identidad" value="TI" />
                        <Picker.Item label="Cédula de Extranjería" value="CE" />
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Número de documento:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.numeroDocumento}
                      onChangeText={(value) => handleInputChange('numeroDocumento', value)}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.inputContainer}>
                    <Text>Código DANE:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.codigoDane}
                      onChangeText={(value) => handleInputChange('codigoDane', value)}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text>Nombre de usuario:</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.nombreUsuario}
                      onChangeText={(value) => handleInputChange('nombreUsuario', value)}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={styles.fullInputContainer}>
                  <Text>Correo institucional:</Text>
                  <TextInput
                    style={[styles.input, styles.fullInput]}
                    value={formData.correoInstitucional}
                    onChangeText={(value) => handleInputChange('correoInstitucional', value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.fullInputContainer}>
                  <Text>Contraseña:</Text>
                  <TextInput
                    style={[styles.input, styles.fullInput]}
                    value={formData.contraseña}
                    onChangeText={(value) => handleInputChange('contraseña', value)}
                    secureTextEntry={true}
                  />
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
    height: 48,
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  picker: {
    height: 48,
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