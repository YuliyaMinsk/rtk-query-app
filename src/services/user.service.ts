import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserResponse } from '../types/user.types';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserResponse[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
export { userApi };
