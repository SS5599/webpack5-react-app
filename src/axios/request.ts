import { METHOD, baseURL } from "./constant";
import axios from "axios";

const fetch = (
  method: string,
  url: string,
  option: { [key: string]: any } = {}
) => {
  return axios({
    timeout: 1000, 
    baseURL,
    method: METHOD[method],
    url,
    ...option,
  });
};

type T = { [key: string]: any };

const get = async (url: string, params: T, option: T = {}) => {
  return await fetch("GET", url, { params, ...option });
};

const post = async (url: string, data: T, option: T = {}) => {
  return await fetch("POST", url, { data, ...option });
};

const put = async (url: string, data: T, option: T = {}) => {
  return await fetch("PUT", url, { data, ...option });
};

const del = async (url: string, data: T, option: T = {}) => {
    return await fetch("PUT", url, { data, ...option });
  };

export { get, del, put, post };
