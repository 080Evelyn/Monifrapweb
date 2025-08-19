"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 120, lastYear: 80 },
  { name: "Feb", thisYear: 70, lastYear: 140 },
  { name: "Mar", thisYear: 130, lastYear: 160 },
  { name: "Apr", thisYear: 220, lastYear: 90 },
  { name: "May", thisYear: 270, lastYear: 150 },
  { name: "Jun", thisYear: 200, lastYear: 210 },
  { name: "Jul", thisYear: 240, lastYear: 280 },
];

const TotalUsersGraph = () => {
  return (
    <div className="p-4 rounded-2xl bg-background">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <span className="font-semibold md:mr-15 text-sm text-[#1C1C1C]">
          Total Users
        </span>

        <span className="text-black/40 text-sm mr-1">|</span>
        <div className="flex gap-8">
          <div className="flex items-center gap-1 text-xs text-[#1C1C1C]">
            <span className="size-1.5 rounded-full bg-[#1C1C1C]" />
            This Year
          </div>
          <div className="flex items-center gap-1 text-xs text-[#6396f3]">
            <span className="size-1.5 rounded-full bg-[#9fbffc]" />
            Last Year
          </div>
        </div>
      </div>

      <ResponsiveContainer className="w-full mt-6" height={240}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: -30, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8C8C8C", fontSize: 12 }}
            padding={{ left: 30 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 100, 200, 300]}
            tick={{ fill: "#8C8C8C", fontSize: 12 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="#1C1C1C"
            strokeWidth={1.25}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#8FB6FF"
            strokeDasharray="5 2"
            strokeWidth={1.25}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default TotalUsersGraph;
