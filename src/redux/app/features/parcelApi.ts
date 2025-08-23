import { baseApi } from "./baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allParcels: builder.query({
      query: () => ({
        url: "/parcel/all-parcels",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
    updateParcel: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/parcel/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const { useAllParcelsQuery, useUpdateParcelMutation } = parcelApi;
