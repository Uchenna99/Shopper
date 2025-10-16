import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

// export const fetchUser = async <T>(url: string): Promise<T | null> => {
//   try {
//     const response = await axios.get<T>(url);
//     return response.data;
//   } catch (error: any) {
//     toast.error(error?.response?.data?.message || 'Error fetching data');
//     return null;
//   }
// };

export const fetchUser = async<T>(
  config: AxiosRequestConfig,
  retries: number = 3,
  delay: number = 2000
): Promise<AxiosResponse<T>> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios(config);
    } catch (error: any) {
      if (attempt === retries || error?.response?.status === 401 || error?.response?.status === 409) throw error;
      await new Promise((res) => setTimeout(res, delay));
    }
  }

  throw new Error("Refresh failed");
};
