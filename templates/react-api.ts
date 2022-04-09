import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

let serviceInstance: AxiosInstance;

export function initializeApiService(): void {
  serviceInstance = axios.create({
    baseURL: "url",
  });
}

export async function post<T>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    return await axios.post<T>(serviceInstance, url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function get<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    return await axios.get<T>(serviceInstance, url, options);
  } catch (error) {
    throw error;
  }
}
export async function patch<TRequest, TResponse>(
  url: string,
  data?: Partial<TRequest>,
  options: AxiosRequestConfig = {}
): Promise<TResponse> {
  try {
    return await axios.patch<TRequest, TResponse>(
      serviceInstance,
      url,
      data,
      options
    );
  } catch (error) {
    throw error;
  }
}

export async function put<T>(
  url: string,
  data?: any,
  options: AxiosRequestConfig = {}
): Promise<T> {
  try {
    return await axios.put<T>(serviceInstance, url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function deleteMethod<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    return await axios.deleteMethod<T>(serviceInstance, url, options);
  } catch (error) {
    throw error;
  }
}
