import axios from "axios";
import { METHOD, getHeaders } from "./constant";

const errorHandle = (err: Record<string, any>) => {
  switch (err.code) {
    case 401:
      // console
      break;
    case 404:
      break;
    case 405:
      break;
    case 500:
      break;
    case 501:
      break;
    case 502:
      break;
    default:
      break;
  }
};

const fetch = (
  method: string,
  url: string,
  option: { [key: string]: any } = {}
) => {
  return new Promise((resolve, reject) => {
    const res = axios({
      method: METHOD[method],
      url,
      ...option,
    });
    res
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        errorHandle(res);
        reject(res);
      });
  });
};

type T = { [key: string]: any };

const get = async (url: string, params: T, option: T = {}) => {
  const headers = getHeaders(option?.headersType);
  return await fetch("GET", url, { params, ...headers, ...option });
};

const post = async (url: string, data: T, option: T = {}) => {
  const headers = getHeaders(option?.headersType);
  return await fetch("POST", url, { data, ...headers, ...option });
};

const put = async (url: string, data: T, option: T = {}) => {
  const headers = getHeaders(option?.headersType);
  return await fetch("PUT", url, { data, ...headers, ...option });
};

const del = async (url: string, data: T, option: T = {}) => {
  const headers = getHeaders(option?.headersType);
  return await fetch("DELETE", url, { data, ...headers, ...option });
};

export { get, del, put, post };
