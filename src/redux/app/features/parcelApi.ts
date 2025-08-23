import { baseApi } from "./baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create-parcel",
        method: "POST",
        data: parcelInfo,
      }),
    }),
    updateParcel: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/parcel/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    allParcels: builder.query({
      query: () => ({
        url: "/parcel/all-parcels",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useAllParcelsQuery,
  useAddParcelMutation,
  useUpdateParcelMutation,
} = parcelApi;
