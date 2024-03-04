import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const rtkApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    endpoints: () => ({}),
});
