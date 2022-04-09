import axios from "axios";

let serviceInstance;

export function initializeApiService() {
  serviceInstance = axios.create({
    baseURL: "url",
  });
}

export async function post(url, data, options) {
  try {
    return await serviceInstance.post(url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function get(url, options) {
  try {
    return await serviceInstance.get(url, options);
  } catch (error) {
    throw error;
  }
}
export async function patch(url, data, options = {}) {
  try {
    return await serviceInstance.patch(url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function put(url, data, options = {}) {
  try {
    return await serviceInstance.put(url, data, options);
  } catch (error) {
    throw error;
  }
}

export async function deleteMethod(url, options = {}) {
  try {
    return await serviceInstance.deleteMethod(url, options);
  } catch (error) {
    throw error;
  }
}
