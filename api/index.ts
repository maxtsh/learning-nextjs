import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import type { ApiProps, ApiRes } from "./types";

const axiosInstance: AxiosInstance = axios.create({ timeout: 30000 });

const API = async ({ url, method, body }: ApiProps): Promise<ApiRes> => {
  try {
    const res: AxiosResponse = await axiosInstance.request({
      url,
      method,
      data: body,
    });
    return {
      data: res.data,
      error: false,
      loading: false,
      status: res.status,
    };
  } catch (err: any) {
    return {
      data: null,
      error: err.response,
      loading: false,
      status: err?.response?.status,
    };
  }
};

export default API;
