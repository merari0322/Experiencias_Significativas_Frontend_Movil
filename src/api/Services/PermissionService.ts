import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { PermissionDTO } from "../Types/PermissionTypes";

export const getAllPermissions = async () => {
  return axios.get(ENDPOINTS.baseModel.permission.base + "/getAll");
};

export const getPermissionById = async (id: number) => {
  return axios.get(`${ENDPOINTS.baseModel.permission.base}/${id}`);
};

export const savePermission = async (data: PermissionDTO) => {
  return axios.post(ENDPOINTS.baseModel.permission.base, data);
};

export const updatePermission = async (data: PermissionDTO) => {
  return axios.put(ENDPOINTS.baseModel.permission.base, data);
};

export const deletePermission = async (id: number) => {
  return axios.delete(`${ENDPOINTS.baseModel.permission.base}/${id}`);
};
