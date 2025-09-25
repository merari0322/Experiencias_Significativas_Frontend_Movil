// Archivo centralizado de endpoints para el frontend
// Puedes importar este objeto en tus servicios para acceder a las rutas

const API_BASE = "http://172.30.0.176:5062/api";

export const ENDPOINTS = {
  // Autenticación
  auth: {
    login: `${API_BASE}/auth/Login`,
    renewToken: `${API_BASE}/auth/RenewToken`,
    updatePassword: `${API_BASE}/auth/UpdatePassword`,
  },
  // Usuario
  user: {
    register: `${API_BASE}/user/register`,
    getByName: `${API_BASE}/user/username/User`,
    getMenu: (userId: number) => `${API_BASE}/user/${userId}/menu`,
  },
  // Persona
  person: {
    create: `${API_BASE}/person/create`,
  },
  // Helper (enums y datos auxiliares)
  helper: {
    getEnum: (enumName: string) => `${API_BASE}/helper/${enumName}`,
  },
  // Formularios
  form: {
    // Ejemplo: agregar endpoints específicos si existen
    // create: `${API_BASE}/form/create`,
  },
  // Módulos
  module: {
    // Ejemplo: agregar endpoints específicos si existen
  },
  // Roles
  role: {
    // Ejemplo: agregar endpoints específicos si existen
  },
  // Permisos
  permission: {
    // Ejemplo: agregar endpoints específicos si existen
  },
  // ModuleOperation
  moduleOperation: {
    document: {
      // CRUD genérico
      base: `${API_BASE}/document`,
    },
    evaluation: {
      base: `${API_BASE}/evaluation`,
      create: `${API_BASE}/evaluation/create`,
    },
    evaluationCriteria: {
      base: `${API_BASE}/evaluationcriteria`,
    },
    experience: {
      base: `${API_BASE}/experience`,
      register: `${API_BASE}/experience/register`,
      detail: (id: number) => `${API_BASE}/experience/${id}/detail`,
      patch: `${API_BASE}/experience/patch`,
      list: `${API_BASE}/experience/List`,
    },
    experienceGrade: {
      base: `${API_BASE}/experiencegrade`,
    },
    experienceLineThematic: {
      base: `${API_BASE}/experiencelinethematic`,
    },
    experiencePopulation: {
      base: `${API_BASE}/experiencepopulation`,
    },
    historyExperience: {
      base: `${API_BASE}/historyexperience`,
      trackingSummary: `${API_BASE}/historyexperience/tracking-summary`,
    },
    institution: {
      base: `${API_BASE}/institution`,
    },
    objective: {
      base: `${API_BASE}/objective`,
    },
    verification: {
      base: `${API_BASE}/verification`,
    },
  },
  // Otros endpoints pueden agregarse aquí
  // ModuleParameter
  moduleParameter: {
    criteria: {
      base: `${API_BASE}/criteria`,
    },
    grade: {
      base: `${API_BASE}/grade`,
    },
    lineThematic: {
      base: `${API_BASE}/linethematic`,
    },
    populationGrade: {
      base: `${API_BASE}/populationgrade`,
    },
    state: {
      base: `${API_BASE}/state`,
    },
  },
    // BaseModel genéricos
    baseModel: {
      form: {
        base: `${API_BASE}/form`,
      },
      formModule: {
        base: `${API_BASE}/formmodule`,
      },
      module: {
        base: `${API_BASE}/module`,
      },
      permission: {
        base: `${API_BASE}/permission`,
      },
      person: {
        base: `${API_BASE}/person`,
      },
      role: {
        base: `${API_BASE}/role`,
      },
      roleFormPermission: {
        base: `${API_BASE}/roleformpermission`,
      },
      user: {
        base: `${API_BASE}/user`,
      },
      userRole: {
        base: `${API_BASE}/userrole`,
      },
    },
};

export default ENDPOINTS;
