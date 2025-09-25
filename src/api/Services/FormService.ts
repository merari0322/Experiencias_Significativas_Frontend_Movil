import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { FormDTO } from "../Types/FormTypes";

export const getAllForms = async () => {
  return axios.get(ENDPOINTS.baseModel.form.base + "/getAll");
};

export const getFormById = async (id: number) => {
  return axios.get(`${ENDPOINTS.baseModel.form.base}/${id}`);
};

export const saveForm = async (data: FormDTO) => {
  return axios.post(ENDPOINTS.baseModel.form.base, data);
};

export const updateForm = async (data: FormDTO) => {
  return axios.put(ENDPOINTS.baseModel.form.base, data);
};

export const deleteForm = async (id: number) => {
  return axios.delete(`${ENDPOINTS.baseModel.form.base}/${id}`);
};
