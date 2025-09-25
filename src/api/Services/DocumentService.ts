import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { DocumentDTO } from "../Types/DocumentTypes";

export const getAllDocuments = async () => {
  return axios.get(ENDPOINTS.moduleOperation.document.base + "/getAll");
};

export const getDocumentById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleOperation.document.base}/${id}`);
};

export const saveDocument = async (data: DocumentDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.document.base, data);
};

export const updateDocument = async (data: DocumentDTO) => {
  return axios.put(ENDPOINTS.moduleOperation.document.base, data);
};

export const deleteDocument = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleOperation.document.base}/${id}`);
};
