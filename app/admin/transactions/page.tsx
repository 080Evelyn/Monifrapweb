import Overview from "@/components/admin/transaction/Overview";
import { TransactionTable } from "@/components/admin/transaction/TransactionTable";

const page = () => {
  return (
    <div className="py-2 grid grid-cols-1 gap-2">
      <Overview />
      <TransactionTable />
    </div>
  );
};

export default page;
