import Overview from "@/components/admin/user-management/Overview";
import { UsersTable } from "@/components/admin/user-management/UserTable";

const page = () => {
  return (
    <div className="py-2 grid grid-cols-1 gap-2 ">
      <Overview />
      <UsersTable />
    </div>
  );
};

export default page;
