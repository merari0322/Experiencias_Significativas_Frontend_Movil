import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { GradeDTO } from "../Types/GradeTypes";

export const getAllGrades = async () => {
  return axios.get(ENDPOINTS.moduleParameter.grade.base + "/getAll");
};

export const getGradeById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleParameter.grade.base}/${id}`);
};

export const saveGrade = async (data: GradeDTO) => {
  return axios.post(ENDPOINTS.moduleParameter.grade.base, data);
};

export const updateGrade = async (data: GradeDTO) => {
  return axios.put(ENDPOINTS.moduleParameter.grade.base, data);
};

export const deleteGrade = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleParameter.grade.base}/${id}`);
};
