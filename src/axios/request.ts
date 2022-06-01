import { METHOD, baseURL } from "./constant";
import axios from "axios";

const errorHandle = (err: Record<string, any>) => {
  switch (err.code) {
    case 401:
      
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
  return new Promise((resolve, reject)=>{
    const res = axios({
        timeout: 1000,
        baseURL,
        method: METHOD[method],
        url,
        ...option,
      });
      res.then((res:any)=>{
         resolve(res)
      }).catch((err:any)=>{
        errorHandle(res)
        reject(res)
      })
  })
}

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
