import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { MailIcon, Send, User2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface WaitingListProp {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const waitlistSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  feedback: z.string().min(5, "Tell us a bit about what you think"),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const WaitingList = ({ open, setOpen }: WaitingListProp) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "", feedback: "" },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      console.log("Submitted:", data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be among the first to experience it and tell us what you think
                about Monifrap.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              <InputGroup>
                <InputGroupInput
                  placeholder="Enter your Name"
                  {...form.register("name")}
                />
                <InputGroupAddon>
                  <User2 />
                </InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupInput
                  type="email"
                  placeholder="Enter your email"
                  {...form.register("email")}
                />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>

              <Textarea
                placeholder="What feature are you most excited about or want to see in Monifrap?"
                rows={4}
                className="h-30"
                {...form.register("feedback")}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-br from-primary/80 to-secondary/80"
              >
                Submit
                <Send className="size-4" />
              </Button>
            </form>

            <DialogFooter>
              <p className="text-xs text-muted-foreground text-center">
                We’ll only use your email to notify you when Monifrap launches.
              </p>
            </DialogFooter>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-2 py-4"
          >
            <h4 className="text-lg font-semibold">
              🎉 You&apos;re on the list!
            </h4>
            <p className="text-sm text-muted-foreground">
              Thanks for joining early. We&apos;ll keep you posted as Monifrap
              gets closer to launch.
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="w-full mt-3 bg-gradient-to-br from-primary/80 to-secondary/80"
            >
              Close
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitingList;
