import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { ObjectiveDTO } from "../Types/ObjectiveTypes";

export const getAllObjectives = async () => {
  return axios.get(ENDPOINTS.moduleOperation.objective.base + "/getAll");
};

export const getObjectiveById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleOperation.objective.base}/${id}`);
};

export const saveObjective = async (data: ObjectiveDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.objective.base, data);
};

export const updateObjective = async (data: ObjectiveDTO) => {
  return axios.put(ENDPOINTS.moduleOperation.objective.base, data);
};

export const deleteObjective = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleOperation.objective.base}/${id}`);
};
