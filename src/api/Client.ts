import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { Method } from 'axios';
import { baseURL } from 'src/utils/config';

export const client = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
});

export function request<T>(
  method: Method = 'get',
  path: string,
  params: any = {}
): AxiosPromise<T> {
  //@ts-ignore axios bug
  return client[method](path, { params })
    .then((response: AxiosResponse<T>) => {
      return Promise.resolve(response);
    })
    .catch((e: any) => {
      return Promise.reject({
        error: e?.message,
        status: e?.response?.status,
        ...e,
      });
    });
}
