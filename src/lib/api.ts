import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios';

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


export const apiRequest = async <T>(
  method: Method,
  url: string,
  data?: any,
  config = {},
  retries = 5,      // retries
  delay = 1500      // delay (ms)
): Promise<AxiosResponse<T>> => {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await axios({
        method,
        url,
        data,
        ...config,
      });
      return response; // successfully return the Axios response
    } catch (error) {
      const isLastAttempt = attempt === retries;

      if (axios.isAxiosError(error)) {
        console.error(`Attempt ${attempt + 1} failed:`, error.message);
      } else {
        console.error("Unexpected error:", error);
      }

      if (isLastAttempt) throw error; // stop retrying if all attempts fail

      // wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // this line should never be reached
  throw new Error("Request failed after retries");
};






// export const useApi = async <T> (url: string, config = {}): Promise<AxiosResponse<T>> => {
//   try {
//     const response = await axios.get<T>(url, config);
//     return response; // returns full axios response (data, status, headers, etc.)
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error:", error.response?.data || error.message);
//       throw error;
//     } else {
//       console.error("Unexpected error:", error);
//       throw error;
//     }
//   }
// }

