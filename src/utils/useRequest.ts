import { useCallback, useEffect, useMemo, useState } from 'react';
import { showToastError } from './error';
import { Api } from 'src/api';
import { AxiosResponse } from 'axios';

type ApiType = keyof typeof Api;

interface IApiOptions {
  autoFetch?: boolean;
}

const defaultConfig = {
  autoFetch: true,
};

interface IFetch {
  callback?: () => Promise<void>;
}

export const useRequest = <T>(
  apiMethod: ApiType,
  apiConfig?: any,
  apiOptions: IApiOptions = defaultConfig
) => {
  const config = useMemo<any>(() => apiConfig, [apiConfig]);
  const { autoFetch = true } = useMemo(() => apiOptions, [apiOptions]);

  const [loading, setLoading] = useState(autoFetch ? true : false);
  const [error, setError] = useState<any>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  if (!Api?.[apiMethod]) {
    throw new Error('Invalid api method');
  }

  const fetch = useCallback(
    async ({ callback, ...customConfig }: IFetch = {}) => {
      console.log('fetched', apiMethod);

      try {
        setLoading(true);
        const res = (await Api[apiMethod](
          typeof config === 'object' ? { ...config, ...customConfig } : config
        )) as AxiosResponse;
        console.log('res', res);
        setData(res.data);

        if (callback) {
          await callback();
        }
      } catch (err) {
        console.log(err);
        setError(err);
        showToastError();
      } finally {
        setLoading(false);
      }
    },
    [apiMethod, config]
  );

  useEffect(() => {
    if (autoFetch) {
      fetch();
    }
  }, [autoFetch, config, fetch]);

  const cleanData = () => {
    setData(undefined);
  };

  return { loading, setLoading, error, data, fetch, cleanData };
};
