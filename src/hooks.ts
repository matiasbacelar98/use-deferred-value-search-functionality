import React from 'react';

type FetchData<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string): FetchData<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const result: T = await response.json();
        setData(result);
      } catch (error: unknown) {
        const isErrorString = typeof error === 'string';

        if (isErrorString) {
          setError(error);
        } else {
          setError('Something went wrong');
        }

        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export function useDebounce<T>(value: T, delay?: number | 500): T {
  const [debounce, setDebounce] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
}
