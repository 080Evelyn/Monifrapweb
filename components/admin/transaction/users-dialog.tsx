import { cn } from "@/lib/utils";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Payment } from "./TransactionTable";
import { buttonVariants } from "@/components/ui/button";

const DetailsDialog = (content: Payment) => {
  const fields = [
    { label: "Name", value: content.user },
    { label: "Transaction ID", value: content.transactionId },
    { label: "Status", value: content.status },
    { label: "Date", value: content.timestamp },
    { label: "User Account", value: "UBA- 123456789" },
    { label: "Receiver's Account", value: "Opay(paycom) 808080808" },
    { label: "Amount", value: content.amount },
  ];

  return (
    <DialogContent className="w-[402px]">
      <DialogTitle className="sr-only">User Details</DialogTitle>

      <DialogDescription asChild>
        <div className="flex flex-col gap-2">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex text-foreground justify-between items-center"
            >
              <span className="text-sm font-medium">{field.label}</span>
              <span
                className={cn(
                  field.value === "successful"
                    ? "text-green-500"
                    : field.value === "failed" && "text-red-500",
                  "capitalize text-xs font-light"
                )}
              >
                {field.label === "Amount" ? "₦" : ""}
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </DialogDescription>

      <DialogClose
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-1 mx-auto w-full bg-secondary cursor-pointer rounded-sm"
        )}
      >
        Done
      </DialogClose>
    </DialogContent>
  );
};

export default DetailsDialog;
