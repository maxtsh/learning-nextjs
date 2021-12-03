import useSWR, { Fetcher } from "swr";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import type { useDataTypes, useDataResult } from "./types";

const axiosInstance: AxiosInstance = axios.create({ timeout: 30000 });

const useData = ({ url, method, body }: useDataTypes): useDataResult => {
  const fetcher: Fetcher = async (url: string) => {
    try {
      const res: AxiosResponse = await axiosInstance.request({
        url,
        data: body || {},
        method,
      });
      return res.data;
    } catch (err: any) {
      throw err;
    }
  };
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};

export default useData;
