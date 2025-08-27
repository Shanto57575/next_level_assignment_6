import { baseApi } from "./baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create-parcel",
        method: "POST",
        data: parcelInfo,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    updateParcel: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/parcel/${id}`,
        method: "PATCH",
        data: payload,
      }),
      async onQueryStarted({ id, payload }, { dispatch, queryFulfilled }) {
        const patchMyParcels = dispatch(
          parcelApi.util.updateQueryData(
            "myParcels",
            payload.userId,
            (draft) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const parcel = draft.data.find((p: any) => p._id === id);
              if (parcel) {
                parcel.statusLogs.push(payload.statusLog);
              }
            }
          )
        );

        const patchAllParcels = dispatch(
          parcelApi.util.updateQueryData("allParcels", undefined, (draft) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parcel = draft.data.find((p: any) => p._id === id);
            if (parcel) {
              parcel.statusLogs.push(payload.statusLog);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchMyParcels.undo();
          patchAllParcels.undo();
        }
      },
      invalidatesTags: ["PARCEL"],
    }),
    allParcels: builder.query({
      query: ({ page, limit, sort, searchTerm }) => ({
        url: `/parcel/all-parcels?page=${page}&limit=${limit}&sort=${sort}&searchTerm=${searchTerm}`,
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
    trackParcel: builder.query({
      query: (params) => ({
        url: "/parcel/parcel-tracker",
        method: "GET",
        params,
      }),
      providesTags: ["PARCEL"],
    }),
    myParcels: builder.query({
      query: ({ id, params }) => ({
        url: `/parcel/my-parcels/${id}?page=${params?.page}&limit=${params?.limit}&sort=${params.sort}&searchTerm=${params.searchTerm}`,
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
    analyticsData: builder.query({
      query: () => ({
        url: `/parcel/analytics`,
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
  useMyParcelsQuery,
  useAnalyticsDataQuery,
  useLazyTrackParcelQuery,
} = parcelApi;
