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
import { Loader, MailIcon, Send, User2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

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
  const [loading, setLoading] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "", feedback: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      setLoading(true);

      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.feedback,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      if (response.status === 200) {
        setSubmitted(true);
        reset();
      } else {
        console.error("Email failed:", response);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="bg-gradient-to-tr from-primary/65 to-secondary text-transparent bg-clip-text">
                Join the Waitlist
              </DialogTitle>
              <DialogDescription>
                Be among the first to experience it and tell us what you think
                about Monifrap.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <InputGroup>
                  <InputGroupInput
                    placeholder="Enter your Name"
                    {...register("name")}
                  />
                  <InputGroupAddon>
                    <User2 />
                  </InputGroupAddon>
                </InputGroup>
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <InputGroup>
                  <InputGroupInput
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Feedback */}
              <div>
                <Textarea
                  placeholder="What feature are you most excited about or want to see in Monifrap?"
                  rows={4}
                  className="h-30"
                  {...register("feedback")}
                />
                {errors.feedback && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.feedback.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-br py-1 from-primary/80 to-secondary/80"
              >
                {loading ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  "Submit"
                )}
                {!loading && <Send className="size-4 ml-1" />}
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
              🎉 Congratulations! You&apos;re on the list!
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
