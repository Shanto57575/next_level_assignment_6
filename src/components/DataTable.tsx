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
import { useUpdateUserMutation } from "@/redux/app/features/userApi";
import { toast } from "sonner";
import { useProfileQuery } from "@/redux/app/features/authApi";
import type { IAllUsersResponse } from "@/interfaces/user.interface";

export default function DataTable(props: IAllUsersResponse) {
  const [updateUser] = useUpdateUserMutation();
  const { data: userData } = useProfileQuery(undefined);

  const handleStatus = async (id: string, value: string) => {
    const toastId = toast.loading("updating status....");
    try {
      const result = await updateUser({
        id,
        payload: { isActive: value },
      });
      if (result?.data?.success) {
        toast.success(`status updated successfully`, { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error(`failed to update status`, { id: toastId });
    }
  };

  return (
    <div className="mt-20 max-w-3xl w-full mx-auto bg-background overflow-hidden rounded-md border">
      <h1 className="p-5">Manage Users</h1>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="h-9 py-2">Name</TableHead>
            <TableHead className="h-9 py-2">Email</TableHead>
            <TableHead className="h-9 py-2">Role</TableHead>
            <TableHead className="h-9 py-2">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props?.data?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="py-2 font-medium">{user.name}</TableCell>
              <TableCell className="py-2">{user?.email}</TableCell>
              <TableCell className="py-2">{user?.role}</TableCell>
              <TableCell className="py-2">
                <Select
                  disabled={user.role === userData?.data?.role}
                  onValueChange={(e) => handleStatus(user._id, e)}
                  defaultValue={user?.isActive}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                      <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                      <SelectItem value="BLOCKED">BLOCKED</SelectItem>
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
