import axios from "axios";
import ENDPOINTS from "../Config/Endpoints";
import { ExperienceRegisterDTO, ExperiencePatchDTO } from "../Types/experienceTypes";

export const registerExperience = async (data: ExperienceRegisterDTO) => {
  return axios.post(ENDPOINTS.moduleOperation.experience.register, data);
};

export const getExperienceDetail = async (id: number) => {
  return axios.get(ENDPOINTS.moduleOperation.experience.detail(id));
};

export const patchExperience = async (data: ExperiencePatchDTO) => {
  return axios.patch(ENDPOINTS.moduleOperation.experience.patch, data);
};

export const getExperiences = async () => {
  return axios.get(ENDPOINTS.moduleOperation.experience.list);
};
