import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/create-user",
        method: "POST",
        data: userInfo,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: payload,
      }),
    }),
    allUsers: builder.query({
      query: ({ page, limit, searchTerm }) => ({
        url: `/user/all-users/?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
        method: "GET",
      }),
    }),
    allReceiver: builder.query({
      query: () => ({
        url: "/user/all-receiver",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useAllUsersQuery,
  useAllReceiverQuery,
  useUpdateUserMutation,
} = userApi;
