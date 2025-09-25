import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { EvaluationDTO, EvaluationRegisterDTO } from "../Types/EvaluationTypes";

export const getAllEvaluations = async () => {
  return axios.get(ENDPOINTS.moduleOperation.evaluation.base + "/getAll");
};

export const getEvaluationById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleOperation.evaluation.base}/${id}`);
};

export const createEvaluation = async (data: EvaluationRegisterDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.evaluation.create, data);
};
