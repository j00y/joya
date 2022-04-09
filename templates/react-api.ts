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
    return await serviceInstance.post<T>(url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function get<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    return await serviceInstance.get<T>(url, options);
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
    return await serviceInstance.patch<TRequest, TResponse>(
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
    return await serviceInstance.put<T>(url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function deleteMethod<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    return await serviceInstance.deleteMethod<T>(url, options);
  } catch (error) {
    throw error;
  }
}
