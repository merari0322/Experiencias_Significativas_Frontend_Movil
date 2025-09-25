import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { InstitutionDTO } from "../Types/InstitutionTypes";

export const getAllInstitutions = async () => {
  return axios.get(ENDPOINTS.moduleOperation.institution.base + "/getAll");
};

export const getInstitutionById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleOperation.institution.base}/${id}`);
};

export const saveInstitution = async (data: InstitutionDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.institution.base, data);
};

export const updateInstitution = async (data: InstitutionDTO) => {
  return axios.put(ENDPOINTS.moduleOperation.institution.base, data);
};

export const deleteInstitution = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleOperation.institution.base}/${id}`);
};
