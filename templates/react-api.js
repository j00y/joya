import axios, { AxiosRequestConfig } from "axios";

let serviceInstance;

export function initializeApiService() {
  serviceInstance = axios.create({
    baseURL: "url",
  });
}

export async function post(url, data, options) {
  try {
    return await axios.post(serviceInstance, url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function get(url, options) {
  try {
    return await axios.get(serviceInstance, url, options);
  } catch (error) {
    throw error;
  }
}
export async function patch(url, data, options = {}) {
  try {
    return await axios.patch(serviceInstance, url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function put(url, data, options = {}) {
  try {
    return await axios.put(serviceInstance, url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function deleteMethod(url, options = {}) {
  try {
    return await axios.deleteMethod(serviceInstance, url, options);
  } catch (error) {
    throw error;
  }
}
