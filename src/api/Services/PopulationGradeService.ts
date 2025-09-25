import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { PopulationGradeDTO } from "../Types/PopulationGradeTypes";

export const getAllPopulationGrades = async () => {
  return axios.get(ENDPOINTS.moduleParameter.populationGrade.base + "/getAll");
};

export const getPopulationGradeById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleParameter.populationGrade.base}/${id}`);
};

export const savePopulationGrade = async (data: PopulationGradeDTO) => {
  return axios.post(ENDPOINTS.moduleParameter.populationGrade.base, data);
};

export const updatePopulationGrade = async (data: PopulationGradeDTO) => {
  return axios.put(ENDPOINTS.moduleParameter.populationGrade.base, data);
};

export const deletePopulationGrade = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleParameter.populationGrade.base}/${id}`);
};
