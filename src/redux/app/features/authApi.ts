import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useProfileQuery } = authApi;
