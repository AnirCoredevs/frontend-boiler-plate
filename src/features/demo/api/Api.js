import { createApi } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'demoreducer',
  baseQuery: 'basepath',
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getDemoPost: builder.query({
      query: ({ page }) => ({
        url: `/demoposts/${page}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Post', id: 'List' }],
    }),
  }),
});

export const {
  usegetDemoPostQuery,
} = postApi;
