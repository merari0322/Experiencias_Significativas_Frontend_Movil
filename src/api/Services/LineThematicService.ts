import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { LineThematicDTO } from "../Types/LineThematicTypes";

export const getAllLineThematics = async () => {
  return axios.get(ENDPOINTS.moduleParameter.lineThematic.base + "/getAll");
};

export const getLineThematicById = async (id: number) => {
  return axios.get(`${ENDPOINTS.moduleParameter.lineThematic.base}/${id}`);
};

export const saveLineThematic = async (data: LineThematicDTO) => {
  return axios.post(ENDPOINTS.moduleParameter.lineThematic.base, data);
};

export const updateLineThematic = async (data: LineThematicDTO) => {
  return axios.put(ENDPOINTS.moduleParameter.lineThematic.base, data);
};

export const deleteLineThematic = async (id: number) => {
  return axios.delete(`${ENDPOINTS.moduleParameter.lineThematic.base}/${id}`);
};
