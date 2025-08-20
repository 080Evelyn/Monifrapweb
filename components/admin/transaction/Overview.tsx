const Overview = () => {
  const overviewContent = [
    {
      name: "Total Transactions",
      value: "156",
    },
    {
      name: "Total Successful Transactions",
      value: "3,300",
    },
    {
      name: "Total Failed Transaction",
      value: "134",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {overviewContent.map((items) => (
        <div
          key={items.name}
          className="flex flex-col justify-center gap-2 bg-background border border-[#D9D9D9] rounded-lg py-4 px-4"
        >
          <span className=" text-sm">{items.name}</span>

          <span className="font-medium text-2xl"> {items.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;
