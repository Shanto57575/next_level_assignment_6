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
import DashboardSearch from "@/components/DashboardSearch";

export default function AllUsers() {
  const [updateUser] = useUpdateUserMutation();
  const { data: userData } = useProfileQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const dataPerPage = 5;
  console.log(searchTerm);
  const { data: AllUsers, isLoading } = useAllUsersQuery({
    page: currentPage,
    limit: dataPerPage,
    searchTerm,
  });

  const totalData = AllUsers?.data?.totalUser;
  const totalPage = Math.ceil(totalData / dataPerPage);

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
    <div className="w-full max-w-3xl mx-auto min-h-[70vh] flex flex-col gap-y-3 justify-center">
      <div className="flex items-center justify-between">
        <h1>My Users</h1>
        <DashboardSearch
          placeHolderText="search by name or email"
          result={searchTerm}
          setResult={setSearchTerm}
        />
      </div>
      <div className="min-h-[35vh] bg-background overflow-hidden rounded-md border">
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
                    <SelectTrigger className="w-full">
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
    </div>
  );
}
