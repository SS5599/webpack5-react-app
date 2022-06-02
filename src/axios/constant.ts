const METHOD: Record<string, string> = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

type  HEADERS_TYPE = undefined | 'urlencoded' | 'json' | 'form-data' | null | ''
const baseURL = ''

const HEADERS: Record<string,any> = {
  baseURL,
  timeout: 5000,
  responseType: 'json',
}

// 默认配置
const DEFAULT_HEADERS: Record<string, any> = {
  ...HEADERS,
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
  },
}

// JSON 格式
const JSON_HEADERS: Record<string, any> = {
  ...HEADERS,
  headers:{
    'Content-Type': 'application/json'
  },
}

// 二进制
const MUL_HEADERS: Record<string, any> = {
  ...HEADERS,
  headers:{
    'Content-Type': 'multipart/form-data'
  },
}

const getHeaders = (type: HEADERS_TYPE) => {
  switch (type) {
    case 'json':
      return JSON_HEADERS
    case 'form-data':
      return MUL_HEADERS
    default:
      return DEFAULT_HEADERS
  }
}

export { METHOD, baseURL, getHeaders };
