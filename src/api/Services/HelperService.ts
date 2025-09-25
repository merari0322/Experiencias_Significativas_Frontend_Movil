import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";

// Servicio para obtener enums y datos auxiliares desde el backend
export const getEnum = async (enumName: string) => {
  try {
    const response = await axios.get(ENDPOINTS.helper.getEnum(enumName));
    return response.data;
  } catch (error) {
    console.error(`Error al obtener enum ${enumName}:`, error);
    throw error;
  }
};

// Funciones específicas para cada enum que necesitamos
export const getDocumentTypes = async () => {
  return await getEnum('DocumentType');
};

export const getCodeDane = async () => {
  return await getEnum('CodeDane');
};

export const getEmailInstitutional = async () => {
  return await getEnum('EmailInstitutional');
};

// Función para obtener múltiples enums de una vez
export const getMultipleEnums = async (enumNames: string[]) => {
  try {
    const promises = enumNames.map(enumName => getEnum(enumName));
    const results = await Promise.all(promises);
    
    // Crear un objeto con los nombres de los enums como claves
    const enumsData: { [key: string]: any } = {};
    enumNames.forEach((enumName, index) => {
      enumsData[enumName] = results[index];
    });
    
    return enumsData;
  } catch (error) {
    console.error('Error al obtener múltiples enums:', error);
    throw error;
  }
};
