import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Sparkles } from "lucide-react";

interface ComingSoonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ComingSoon = ({ open, setOpen }: ComingSoonProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-center flex flex-col items-center w-xs data-[state=open]:!zoom-in-0 data-[state=open]:duration-600 gap-4 py-8">
        <DialogHeader className="flex flex-col items-center gap-2">
          <Sparkles className="size-10 text-purple-600" />
          <DialogTitle className="mt-2 text-xl font-bold">
            🚀 Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center max-w-[18rem]">
            Our Mobile App is almost ready. Stay tuned for something amazing! ✨
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={() => setOpen(false)}
          className="mt-4 px-4 py-2 bg-primary cursor-pointer text-white rounded-md shadow-md"
        >
          Got it!
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoon;
