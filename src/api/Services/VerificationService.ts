import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { VerificationDTO } from "../Types/VerificationTypes";

export const getAllVerifications = async () => {
  return axios.get(ENDPOINTS.moduleOperation.verification.base + "/getAll");
};

export const getVerificationById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleOperation.verification.base}/${id}`);
};

export const saveVerification = async (data: VerificationDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.verification.base, data);
};

export const updateVerification = async (data: VerificationDTO) => {
  return axios.put(ENDPOINTS.moduleOperation.verification.base, data);
};

export const deleteVerification = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleOperation.verification.base}/${id}`);
};
