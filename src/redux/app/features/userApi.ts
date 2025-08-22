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
  }),
});

export const { useRegisterMutation } = userApi;
