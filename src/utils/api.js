import { BASE_API_URL } from '../constants/endpoints';

// eslint-disable-next-line import/prefer-default-export
export const get = async (endpoint, query) => {
  let url = `${BASE_API_URL}/${endpoint}`;

  if (query && typeof query === 'object') {
    const entries = Object.entries(query);
    url += entries.reduce((acc, [key, val]) => {
      return `${acc}&${encodeURI(key)}=${encodeURI(val)}`;
    }, '?');
  }
  const response = await fetch(url, { method: 'GET' });

  return response.json();
};
