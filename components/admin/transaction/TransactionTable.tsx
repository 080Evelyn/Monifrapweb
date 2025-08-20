"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRightCircle } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DetailsDialog from "./users-dialog";
import { cn } from "@/lib/utils";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    user: "TEMIDAYO GABRIEL",
    transactionId: "Txn-9A74B1E2",
    amount: 12500,
    timestamp: "2025-04-05 09:23 AM",
    status: "successful",
  },
  {
    id: "3u1reuv4",
    user: "TEMIDAYO GABRIEL",
    transactionId: "Txn-9A74B1E2",
    amount: 12500,
    timestamp: "2025-04-05 09:23 AM",
    status: "successful",
  },
  {
    id: "derv1ws0",
    user: "TEMIDAYO GABRIEL",
    transactionId: "Txn-9A74B1E2",
    amount: 12500,
    timestamp: "2025-04-05 09:23 AM",
    status: "successful",
  },
  {
    id: "5kma53ae",
    user: "TEMIDAYO GABRIEL",
    transactionId: "Txn-9A74B1E2",
    amount: 12500,
    timestamp: "2025-04-05 09:23 AM",
    status: "successful",
  },
  {
    id: "bhqecj4p",
    user: "TEMIDAYO GABRIEL",
    transactionId: "Txn-9A74B1E2",
    amount: 12500,
    timestamp: "2025-04-05 09:23 AM",
    status: "successful",
  },
];

export type Payment = {
  id: string;
  user: string;
  transactionId: string;
  amount: number;
  timestamp: string;
  status: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("user")}</div>
    ),
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
    cell: ({ row }) => <div>{row.getValue("transactionId")}</div>,
  },
  {
    accessorKey: "timestamp",
    header: "Date & Time",
    cell: ({ row }) => <div>{row.getValue("timestamp")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const rowStatus = row.getValue("status") as string;

      return (
        <div
          className={cn(
            rowStatus === "successful" ? "bg-[#94E9B8]" : "text-[#FF6B6B]",
            "capitalize text-center font-medium py-1.5 rounded-sm"
          )}
        >
          {rowStatus}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <Dialog>
          <DialogTrigger>
            <ChevronRightCircle className="size-5.5 cursor-pointer text-[#141B34]" />
          </DialogTrigger>
          <DetailsDialog {...payment} />
        </Dialog>
      );
    },
  },
];

export function TransactionTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-background rounded-2xl p-4">
      {/* <div className="flex items-center">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div> */}

      <div className="overflow-hidden rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-[#F6FAFF]">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="h-15"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
