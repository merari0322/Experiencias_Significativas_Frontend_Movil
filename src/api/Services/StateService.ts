import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { StateDTO } from "../Types/StateTypes";

export const getAllStates = async () => {
  return axios.get(ENDPOINTS.moduleParameter.state.base + "/getAll");
};

export const getStateById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleParameter.state.base}/${id}`);
};

export const saveState = async (data: StateDTO) => {
  return axios.post(ENDPOINTS.moduleParameter.state.base, data);
};

export const updateState = async (data: StateDTO) => {
  return axios.put(ENDPOINTS.moduleParameter.state.base, data);
};

export const deleteState = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleParameter.state.base}/${id}`);
};
