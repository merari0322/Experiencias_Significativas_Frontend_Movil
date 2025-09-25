import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { PersonDTO } from "../Types/PersonTypes";

export const getAllPersons = async () => {
  return axios.get(ENDPOINTS.baseModel.person.base + "/getAll");
};

export const getPersonById = async (id: number) => {
  return axios.get(`${ENDPOINTS.baseModel.person.base}/${id}`);
};

export const savePerson = async (data: PersonDTO) => {
  return axios.post(ENDPOINTS.baseModel.person.base, data);
};

export const updatePerson = async (data: PersonDTO) => {
  return axios.put(ENDPOINTS.baseModel.person.base, data);
};

export const deletePerson = async (id: number) => {
  return axios.delete(`${ENDPOINTS.baseModel.person.base}/${id}`);
};
