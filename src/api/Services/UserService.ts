import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { RegisterDTO, GetByNameDTO } from "../Types/UserTypes";

export const register = async (data: RegisterDTO) => {
  return axios.post(ENDPOINTS.user.register, data);
};

export const getByName = async (username: string) => {
  return axios.get(ENDPOINTS.user.getByName + `?username=${username}`);
};

export const getMenu = async (userId: number) => {
  return axios.get(ENDPOINTS.user.getMenu(userId));
};
