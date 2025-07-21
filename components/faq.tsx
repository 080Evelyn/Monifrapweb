import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  const questions = [
    {
      id: "1",
      question: "Is Monifrap safe to use with my bank accounts?",
      answer:
        "Absolutely. Monifrap uses bank-level encryption and biometric login to ensure your data and transactions are fully secure. We never store your sensitive information without your permission.",
    },
    {
      id: "2",
      question: "What banks does Monifrap support?",
      answer:
        "Monifrap supports a wide range of banks, including your local banks.",
    },
    {
      id: "3",
      question: "Does Monifrap charge transaction or service fees?",
      answer:
        "No. Monifrap is free to use and has no transaction or service fees.",
    },
    {
      id: "4",
      question: "Can I pay bills directly through the app?",
      answer: "Yes, you can pay bills directly through the app.",
    },
    {
      id: "5",
      question: " How fast are transfers between accounts?",
      answer:
        "Instant transfers between accounts. No delays, just fast and reliable real-time transfers.",
    },
    {
      id: "6",
      question: " Can I link more than one bank account?",
      answer:
        " Yes, you can link multiple bank accounts from different local banks. Monifrap combines all your accounts into a single dashboard so you can  manage balances, and receive unified notifications — all in one place.",
    },
  ];

  return (
    <section id="faqs" className="bg-primary md:px-10 lg:p-20 p-5 mt-10">
      <div className="flex flex-col gap-3 items-center text-center w-full">
        <span className="py-1 px-2 border border-white/60 text-xs text-white/60 rounded-full">
          FAQs
        </span>
        <span className="text-3xl w-2/5 md:text-[40px] text-white font-medium">
          Frequently asked <span className="text-white/70">questions</span>
        </span>
        <div className="rounded-md text-white w-full bg-background/6 p-5 shadow-lg backdrop-blur-xs">
          <Accordion
            type="single"
            className="grid grid-cols-1 md:grid-cols-2 md:bg-primary/60 rounded-md"
            collapsible
          >
            {questions.map((question) => (
              <AccordionItem
                key={question.id}
                value={question.id}
                className="data-[state=open]:bg-background/10 px-4 border border-[#FFFFFF14]"
              >
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent className="text-white/80 text-start">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
