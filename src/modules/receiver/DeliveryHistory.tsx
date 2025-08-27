import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import { useProfileQuery } from "@/redux/app/features/authApi";
import { useMyParcelsQuery } from "@/redux/app/features/parcelApi";
import type { IParcel } from "@/interfaces/parcel.interface";
import { useState } from "react";
import Paginate from "@/components/Paginate";
import DashboardSearch from "@/components/DashboardSearch";
import StatusModal from "../common/StatusModal";

export default function DeliveryHistory() {
  const { data: userData, isLoading: userLoading } = useProfileQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingValue, setSortingValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dataPerPage = 5;

  const { data: parcelData, isLoading: parcelLoading } = useMyParcelsQuery(
    {
      id: userData?.data?._id,
      params: {
        page: currentPage,
        limit: dataPerPage,
        sort: sortingValue,
        searchTerm,
      },
    },
    { skip: !userData?.data?._id }
  );

  if (userLoading || parcelLoading) return <Loader />;

  // Filter only confirmed parcels
  const confirmedParcels = parcelData?.data?.data?.filter(
    (parcel: IParcel) => parcel.statusLogs.at(-1)?.status === "CONFIRMED"
  );

  const totalData = confirmedParcels?.length || 0;
  const totalPage = Math.ceil(totalData / dataPerPage);

  const searchSortUI = (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-x-3 mt-10 mb-5">
      <h1>Delivery History</h1>
      <DashboardSearch
        placeHolderText="search by Tracking Id"
        result={searchTerm}
        setResult={setSearchTerm}
      />
      <Select onValueChange={(e) => setSortingValue(e)}>
        <SelectTrigger className="cursor-pointer mr-5">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="LATEST">Latest Parcel</SelectItem>
          <SelectItem value="OLDEST">Oldest Parcel</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  if (!confirmedParcels || confirmedParcels.length === 0) {
    return (
      <>
        {searchSortUI}
        <div className="min-h-[50vh] max-w-7xl w-full mx-auto bg-background overflow-hidden rounded-md border flex items-center justify-center">
          <h1 className="text-center text-xl">
            {searchTerm
              ? "No search result"
              : "You Have No Delivered Parcels !!!"}
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      {searchSortUI}
      <div className="max-w-7xl w-full mx-auto bg-background overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 py-2">TrackingId</TableHead>
              <TableHead className="h-9 py-2">SenderName</TableHead>
              <TableHead className="h-9 py-2">SenderEmail</TableHead>
              <TableHead className="h-9 py-2">ReceiverName(Me)</TableHead>
              <TableHead className="h-9 py-2">ReceiverEmail</TableHead>
              <TableHead className="h-9 py-2">Delivery Fee</TableHead>
              <TableHead className="h-9 py-2">Delivery Time</TableHead>
              <TableHead className="h-9 py-2">Status Logs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {confirmedParcels.map((parcel: IParcel) => (
              <TableRow key={parcel._id}>
                <TableCell className="py-2 font-medium">
                  {parcel.trackingId}
                </TableCell>
                <TableCell className="py-2">{parcel?.sender?.name}</TableCell>
                <TableCell className="py-2">{parcel?.sender?.email}</TableCell>
                <TableCell className="py-2">{parcel?.receiver?.name}</TableCell>
                <TableCell className="py-2">
                  {parcel?.receiver?.email}
                </TableCell>
                <TableCell className="py-2">{parcel?.fee}</TableCell>
                <TableCell className="py-2">
                  {new Date(parcel?.createdAt).toLocaleDateString()}{" "}
                  {new Date(parcel?.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </TableCell>
                <TableCell>
                  <StatusModal
                    trackingId={parcel.trackingId}
                    statusLogs={parcel.statusLogs}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {totalPage > 1 && (
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      )}
    </>
  );
}
