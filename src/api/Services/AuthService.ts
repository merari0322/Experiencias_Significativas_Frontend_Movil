import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { LoginDTO, ChangePasswordDTO } from "../Types/AuthTypes";

export const login = async (data: LoginDTO) => {
  return axios.post(ENDPOINTS.auth.login, data);
};

export const renewToken = async () => {
  return axios.put(ENDPOINTS.auth.renewToken);
};

export const updatePassword = async (data: ChangePasswordDTO) => {
  return axios.put(ENDPOINTS.auth.updatePassword, data);
};
