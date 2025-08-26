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
import type { IUser } from "@/interfaces/user.interface";
import Loader from "@/components/Loader";
import { useAllUsersQuery } from "@/redux/app/features/userApi";
import { useUpdateUserMutation } from "@/redux/app/features/userApi";
import { toast } from "sonner";
import { useProfileQuery } from "@/redux/app/features/authApi";
import { useState } from "react";
import Paginate from "@/components/Paginate";

export default function AllUsers() {
  const [updateUser] = useUpdateUserMutation();
  const { data: userData } = useProfileQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 5;

  const { data: AllUsers, isLoading } = useAllUsersQuery({
    page: currentPage,
    limit: dataPerPage,
  });

  console.log(AllUsers);
  const totalData = AllUsers?.data?.totalUser;
  const totalPage = Math.ceil(totalData / dataPerPage);
  console.log(totalPage);

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

  if (isLoading) return <Loader />;

  return (
    <>
      <h1 className="max-w-3xl w-full mx-auto mt-10">Manage Users</h1>
      <div className="min-h-[50vh] max-w-3xl w-full mx-auto bg-background overflow-hidden rounded-md border">
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
            {AllUsers?.data?.result?.map((user: IUser) => (
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
