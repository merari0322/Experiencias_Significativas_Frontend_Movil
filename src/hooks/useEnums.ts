import { useState, useEffect } from 'react';
import { getMultipleEnums } from '../api/Services/HelperService';
import { EnumResponse, EnumOption, enumToPickerOptions } from '../api/Types/EnumTypes';

// Interfaz para el estado de los enums
interface EnumState {
  data: { [key: string]: EnumResponse };
  loading: boolean;
  error: string | null;
}

// Hook personalizado para cargar enums
export const useEnums = (enumNames: string[]) => {
  const [state, setState] = useState<EnumState>({
    data: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    const loadEnums = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const enumsData = await getMultipleEnums(enumNames);
        setState({
          data: enumsData,
          loading: false,
          error: null
        });
      } catch (error) {
        setState({
          data: {},
          loading: false,
          error: error instanceof Error ? error.message : 'Error al cargar enums'
        });
      }
    };

    if (enumNames.length > 0) {
      loadEnums();
    }
  }, [JSON.stringify(enumNames)]); // Usar JSON.stringify para comparar arrays

  // Función para obtener un enum específico formateado para Picker
  const getEnumForPicker = (enumName: string): EnumOption[] => {
    if (!state.data[enumName]) return [];
    
    return enumToPickerOptions(state.data[enumName]);
  };

  // Función para recargar los enums
  const reloadEnums = async () => {
    if (enumNames.length > 0) {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const enumsData = await getMultipleEnums(enumNames);
        setState({
          data: enumsData,
          loading: false,
          error: null
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Error al recargar enums'
        }));
      }
    }
  };

  return {
    enums: state.data,
    loading: state.loading,
    error: state.error,
    getEnumForPicker,
    reloadEnums
  };
};

// Hook específico para el formulario de registro
export const useRegistrationEnums = () => {
  return useEnums(['DocumentType', 'CodeDane', 'EmailInstitutional']);
};