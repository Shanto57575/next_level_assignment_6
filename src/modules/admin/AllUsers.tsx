import DataTable from "@/components/DataTable";
import { useAllUsersQuery } from "@/redux/app/features/userApi";

export default function AllUsers() {
  const { data } = useAllUsersQuery(undefined);
  return (
    <div>
      <DataTable data={data?.data} />
    </div>
  );
}
