import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { ModuleDTO } from "../Types/ModuleTypes";

export const getAllModules = async () => {
  return axios.get(ENDPOINTS.baseModel.module.base + "/getAll");
};

export const getModuleById = async (id: number) => {
  return axios.get(`${ENDPOINTS.baseModel.module.base}/${id}`);
};

export const saveModule = async (data: ModuleDTO) => {
  return axios.post(ENDPOINTS.baseModel.module.base, data);
};

export const updateModule = async (data: ModuleDTO) => {
  return axios.put(ENDPOINTS.baseModel.module.base, data);
};

export const deleteModule = async (id: number) => {
  return axios.delete(`${ENDPOINTS.baseModel.module.base}/${id}`);
};
