import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { RoleDTO } from "../Types/RoleTypes";

export const getAllRoles = async () => {
  return axios.get(ENDPOINTS.baseModel.role.base + "/getAll");
};

export const getRoleById = async (id: number) => {
  return axios.get(`${ENDPOINTS.baseModel.role.base}/${id}`);
};

export const saveRole = async (data: RoleDTO) => {
  return axios.post(ENDPOINTS.baseModel.role.base, data);
};

export const updateRole = async (data: RoleDTO) => {
  return axios.put(ENDPOINTS.baseModel.role.base, data);
};

export const deleteRole = async (id: number) => {
  return axios.delete(`${ENDPOINTS.baseModel.role.base}/${id}`);
};
