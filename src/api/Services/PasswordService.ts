import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { ChangePasswordDTO } from "../Types/PasswordTypes";

export const changePassword = async (data: ChangePasswordDTO) => {
  return axios.put(ENDPOINTS.auth.updatePassword, data);
};
