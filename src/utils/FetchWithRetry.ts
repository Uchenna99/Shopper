import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";


export async function fetchWithRetry<T>(
  config: AxiosRequestConfig,
  retries: number = 3,
  delay: number = 2000
): Promise<AxiosResponse<T>> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios(config);
    } catch (error: any) {
      if (attempt === retries || error?.response?.status === 401 || error?.response?.status === 409) throw error;
      await new Promise((res) => setTimeout(res, delay));
    }
  }

  throw new Error("Request failed");
};
