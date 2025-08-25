import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import type { IParcel, IStatusLog } from "@/interfaces/parcel.interface";
import { useLazyTrackParcelQuery } from "@/redux/app/features/parcelApi";
import { useState } from "react";

export default function ParcelTracker() {
  const [result, setResult] = useState("");

  const [trigger, { data: parcelData, isLoading: isParcelLoading }] =
    useLazyTrackParcelQuery();

  const handleSearch = () => {
    trigger({ trackingId: result.trim() });
  };

  if (isParcelLoading) return <Loader />;
  console.log(parcelData);

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-100 text-green-800 border-green-200";
      case "IN_TRANSIT":
      case "DISPATCHED":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "FAILED":
        return "bg-red-100 text-red-800 border-red-200";
      case "REQUESTED":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "CANCELLED":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Parcel Tracking</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Enter your tracking ID to get real-time updates on your parcel
            delivery status
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar
            handleSearch={handleSearch}
            result={result}
            setResult={setResult}
          />
        </div>

        {/* Results Section */}
        {parcelData?.data?.length > 0 && (
          <div className="space-y-8">
            {parcelData.data.map((parcel: IParcel) => (
              <div
                key={parcel._id}
                className="rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      Tracking ID: {parcel.trackingId}
                    </h2>
                    <div className="text-sm">
                      Created: {new Date(parcel.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Basic Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-1">
                      <p className="text-sm font-medium uppercase tracking-wide">
                        Parcel Type
                      </p>
                      <p className="text-base">{parcel.parcelType}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium uppercase tracking-wide">
                        Delivery Address
                      </p>
                      <p className="text-base">{parcel.address}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium uppercase tracking-wide">
                        Delivery Fee
                      </p>
                      <p className="text-base font-medium">${parcel.fee}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium uppercase tracking-wide">
                        Expected Delivery
                      </p>
                      <p className="text-base">
                        {new Date(parcel.deliveryDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Sender & Receiver Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-lg p-4 border-b-2 border-red-200 hover:shadow-md shadow-red-200">
                      <h3 className="text-sm font-medium uppercase tracking-wide mb-3">
                        Sender Information
                      </h3>
                      <div className="space-y-2">
                        <p className="text-base font-medium ">
                          {parcel.sender.name}
                        </p>
                        <p className="text-sm">{parcel.sender.email}</p>
                      </div>
                    </div>

                    <div className="rounded-lg p-4 border-b-2 border-red-200 hover:shadow-md shadow-red-200">
                      <h3 className="text-sm font-medium uppercase tracking-wide mb-3">
                        Receiver Information
                      </h3>
                      <div className="space-y-2">
                        <p className="text-base font-medium ">
                          {parcel.receiver.name}
                        </p>
                        <p className="text-sm">{parcel.receiver.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status Timeline */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Status Logs</h3>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 text-sm">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Note</th>
                            <th className="px-4 py-2 border">Updated By</th>
                            <th className="px-4 py-2 border">Date</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          {parcel.statusLogs.map(
                            (log: IStatusLog, idx: number) => (
                              <tr key={idx} className="hover:bg-zinc-900">
                                <td className="px-4 py-2 border">
                                  <span
                                    className={`inline-flex px-2 py-1 text-xs font-medium rounded border ${getStatusBadgeColor(
                                      log.status
                                    )}`}
                                  >
                                    {log.status}
                                  </span>
                                </td>
                                <td className="px-4 py-2 border">
                                  {log.note || "N/A"}
                                </td>
                                <td className="px-4 py-2 border">
                                  {typeof log.updatedBy === "object"
                                    ? `${log?.updatedBy.name} (${log?.updatedBy.role})`
                                    : log.updatedBy || "N/A"}
                                </td>
                                <td className="px-4 py-2 border text-gray-600 dark:text-gray-200">
                                  {new Date(
                                    log?.updatedAt
                                  ).toLocaleDateString()}{" "}
                                  {new Date(log?.updatedAt).toLocaleTimeString(
                                    [],
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {parcelData?.data?.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white dark:bg-black rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V9a4 4 0 00-4-4H9a4 4 0 00-4 4v1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">No parcel found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Please check your tracking ID and try again.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
