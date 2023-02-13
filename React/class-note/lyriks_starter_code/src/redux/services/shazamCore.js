
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '364165cef0msh1f876093391cdebp1a0796jsna9ef79f7e66d',
    'X-RapidAPI-Host': '',
}
};
fetch('https://shazam.p.rapidapi.com/charts/track', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: ' shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '364165cef0msh1f876093391cdebp1a0796jsna9ef79f7e66d');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/tracks'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;