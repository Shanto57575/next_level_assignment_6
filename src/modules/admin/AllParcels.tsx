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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAllParcelsQuery,
  useUpdateParcelMutation,
} from "@/redux/app/features/parcelApi";
import { toast } from "sonner";
import type { IParcel } from "@/interfaces/parcel.interface";
import Loader from "@/components/Loader";

export default function AllParcels() {
  const { data: ParcelData, isLoading } = useAllParcelsQuery(undefined);
  const [updateParcel] = useUpdateParcelMutation();
  console.log("ParcelData==>", ParcelData);

  const handleStatus = async (id: string, value: string) => {
    try {
      await updateParcel({
        id,
        payload: {
          statusLog: {
            status: value,
          },
        },
      }).unwrap();
      toast.success(`status updated successfully`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(`${error?.data?.message}`);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20 max-w-5xl w-full mx-auto bg-background overflow-hidden rounded-md border">
      <h1 className="p-5">Manage Parcels</h1>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="h-9 py-2">TrackingId</TableHead>
            <TableHead className="h-9 py-2">SenderName</TableHead>
            <TableHead className="h-9 py-2">SenderEmail</TableHead>
            <TableHead className="h-9 py-2">ReceiverName</TableHead>
            <TableHead className="h-9 py-2">ReceiverEmail</TableHead>
            <TableHead className="h-9 py-2">Delivery Fee</TableHead>
            <TableHead className="h-9 py-2">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ParcelData?.data?.map((parcel: IParcel) => (
            <TableRow key={parcel._id}>
              <TableCell className="py-2 font-medium">
                {parcel.trackingId.slice(-10, -4)}
              </TableCell>
              <TableCell className="py-2">{parcel?.sender?.name}</TableCell>
              <TableCell className="py-2">{parcel?.sender?.email}</TableCell>
              <TableCell className="py-2">{parcel?.receiver?.name}</TableCell>
              <TableCell className="py-2">{parcel?.receiver?.email}</TableCell>
              <TableCell className="py-2">{parcel?.fee}</TableCell>
              <TableCell className="py-2">
                <Select
                  onValueChange={(e) => handleStatus(parcel._id, e)}
                  value={parcel?.statusLogs.at(-1)?.status}
                >
                  <SelectTrigger className="w-[145px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="REQUESTED">REQUESTED</SelectItem>
                      <SelectItem value="APPROVED">APPROVED</SelectItem>
                      <SelectItem value="DISPATCHED">DISPATCHED</SelectItem>
                      <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
                      <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                      <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
