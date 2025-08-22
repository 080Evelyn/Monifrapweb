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
    email: "gabriel@gmail.com",
    last_login: "2025-04-05 09:23 AM",
    status: "verified",
    linked_account: "2",
  },
  {
    id: "3u1reuv4",
    user: "TEMIDAYO GABRIEL",
    email: "gabriel@gmail.com",
    last_login: "2025-04-05 09:23 AM",
    status: "unverified",
    linked_account: "1",
  },
  {
    id: "derv1ws0",
    user: "TEMIDAYO GABRIEL",
    email: "gabriel@gmail.com",
    last_login: "2025-04-05 09:23 AM",
    status: "unverified",
    linked_account: "1",
  },
  {
    id: "5kma53ae",
    user: "TEMIDAYO GABRIEL",
    email: "gabriel@gmail.com",
    last_login: "2025-04-05 09:23 AM",
    status: "unverified",
    linked_account: "1",
  },
  {
    id: "bhqecj4p",
    user: "TEMIDAYO GABRIEL",
    email: "gabriel@gmail.com",
    last_login: "2025-04-05 09:23 AM",
    status: "unverified",
    linked_account: "1",
  },
];

export type Payment = {
  id: string;
  user: string;
  email: string;
  last_login: string;
  status: string;
  linked_account: string;
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "linked_account",
    header: "Linked Account",
    cell: ({ row }) => {
      return <div>{row.getValue("linked_account")}</div>;
    },
  },
  {
    accessorKey: "last_login",
    header: "Last Login",
    cell: ({ row }) => <div>{row.getValue("last_login")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const rowStatus = row.getValue("status") as string;

      return (
        <div
          className={cn(
            rowStatus === "verified" ? "bg-[#94E9B8]" : "bg-[#FF6B6B]",
            "capitalize text-center max-md:px-1 max-md:text-xs md:w-4/5 font-medium py-1.5 rounded-sm"
          )}
        >
          {rowStatus}
        </div>
      );
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
            <ChevronRightCircle className="size-5.5 text-right cursor-pointer text-[#141B34]" />
          </DialogTrigger>
          <DetailsDialog {...payment} />
        </Dialog>
      );
    },
  },
];

export function UsersTable() {
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
