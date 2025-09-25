// Tipos para los enums del sistema

export interface EnumOption {
  key: string | number;
  value: string;
  description?: string;
}

// Tipos específicos para DocumentType
export interface DocumentTypeEnum {
  CitizenshipId: number;
  MinorIdCard: number;
  ForeignerId: number;
  Passport: number;
}

// Tipos específicos para CodeDane
export interface CodeDaneEnum {
  [key: string]: number;
}

// Tipos específicos para EmailInstitutional
export interface EmailInstitutionalEnum {
  [key: string]: number;
}

// Tipo genérico para respuesta de enums desde el backend
export interface EnumResponse {
  [key: string]: string | number;
}

// Tipos para el estado de los enums en el hook
export interface EnumsState {
  DocumentType?: EnumResponse;
  CodeDane?: EnumResponse;
  EmailInstitutional?: EnumResponse;
}

// Valores por defecto para dropdowns
export const DEFAULT_PICKER_OPTION: EnumOption = {
  key: '',
  value: 'Seleccionar',
};

// Mapeo de nombres de enums para display
export const ENUM_DISPLAY_NAMES = {
  DocumentType: 'Tipo de Documento',
  CodeDane: 'Código DANE',
  EmailInstitutional: 'Correo Institucional',
};

// Función helper para convertir enum response a opciones de picker
export const enumToPickerOptions = (enumData: EnumResponse): EnumOption[] => {
  if (!enumData) return [DEFAULT_PICKER_OPTION];
  
  const options = Object.entries(enumData).map(([key, value]) => ({
    key,
    value: value.toString(),
  }));
  
  return [DEFAULT_PICKER_OPTION, ...options];
};