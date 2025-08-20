import LinkedBankPieChart from "@/components/admin/dashboard/LinkedBanksPieChart";
import Overview from "@/components/admin/dashboard/Overview";
import RevenueBarChart from "@/components/admin/dashboard/RevenueBarChart";
import TotalUsersGraph from "@/components/admin/dashboard/TotalUsersGraph";
import React from "react";

const page = () => {
  return (
    <div className="py-2 grid grid-cols-1 gap-2">
      <Overview />
      <TotalUsersGraph />
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
        <RevenueBarChart />
        <LinkedBankPieChart />
      </div>
    </div>
  );
};

export default page;
