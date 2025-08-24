import DataTable from "@/components/DataTable";
import Loader from "@/components/Loader";
import { useAllUsersQuery } from "@/redux/app/features/userApi";

export default function AllUsers() {
  const { data, isLoading } = useAllUsersQuery(undefined);
  if (isLoading) return <Loader />;

  return (
    <div>
      <DataTable data={data?.data} />
    </div>
  );
}
