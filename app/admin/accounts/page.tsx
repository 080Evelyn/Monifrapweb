import { AccountTable } from "@/components/admin/account/AccountTable";
import Overview from "@/components/admin/account/page";

const page = () => {
  return (
    <div className="py-2 grid grid-cols-1 gap-2">
      <Overview />
      <AccountTable />
    </div>
  );
};

export default page;
