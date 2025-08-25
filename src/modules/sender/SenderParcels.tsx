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
import { useProfileQuery } from "@/redux/app/features/authApi";
import {
  useMyParcelsQuery,
  useUpdateParcelMutation,
} from "@/redux/app/features/parcelApi";
import type { IParcel } from "@/interfaces/parcel.interface";
import { toast } from "sonner";
import Loader from "@/components/Loader";

export default function SenderParcels() {
  const { data: userData, isLoading: userLoading } = useProfileQuery(undefined);

  const { data: parcelData, isLoading: parcelLoading } = useMyParcelsQuery(
    userData?.data?._id,
    { skip: !userData?.data?._id }
  );

  const [updateParcel] = useUpdateParcelMutation();

  const handleStatus = async (id: string, newStatus: string) => {
    try {
      await updateParcel({
        id,
        payload: {
          userId: userData?.data?._id,
          statusLog: {
            status: newStatus,
          },
        },
      }).unwrap();
      toast.success("Status updated successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`${error?.data?.message}`);
    }
  };

  if (userLoading || parcelLoading) return <Loader />;

  return (
    <div className="mt-20 max-w-5xl w-full mx-auto bg-background overflow-hidden rounded-md border">
      <h1 className="p-5">My Parcels</h1>
      {parcelData?.data?.length === 0 ? (
        "You Have'nt created your first parcel yet"
      ) : (
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
            {parcelData?.data?.map((parcel: IParcel) => (
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
                  <Select
                    onValueChange={(newValue) =>
                      handleStatus(parcel._id, newValue)
                    }
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
      )}
    </div>
  );
}
