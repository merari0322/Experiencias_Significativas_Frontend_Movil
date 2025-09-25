import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { CriteriaDTO } from "../Types/CriteriaTypes";

export const getAllCriteria = async () => {
  return axios.get(ENDPOINTS.moduleParameter.criteria.base + "/getAll");
};

export const getCriteriaById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleParameter.criteria.base}/${id}`);
};

export const saveCriteria = async (data: CriteriaDTO) => {
  return axios.post(ENDPOINTS.moduleParameter.criteria.base, data);
};

export const updateCriteria = async (data: CriteriaDTO) => {
  return axios.put(ENDPOINTS.moduleParameter.criteria.base, data);
};

export const deleteCriteria = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleParameter.criteria.base}/${id}`);
};
