"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { questions } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.15 },
    }),
  };

  return (
    <section
      id="faqs"
      ref={sectionRef}
      className="bg-primary md:px-10 lg:p-20 p-5 mt-10"
    >
      <div className="flex flex-col gap-3 items-center text-center w-full">
        {/* Header Animations */}
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="py-1 px-2 border border-white/60 text-xs text-white/60 rounded-full"
        >
          FAQs
        </motion.span>

        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="text-3xl w-2/5 md:text-[40px] text-white font-medium"
        >
          Frequently asked <span className="text-white/70">questions</span>
        </motion.span>

        {/* Accordion Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="rounded-md text-white w-full bg-background/6 p-5 shadow-lg backdrop-blur-xs"
        >
          <Accordion
            type="single"
            className="grid grid-cols-1 md:grid-cols-2 md:bg-primary/60 rounded-md"
            collapsible
          >
            {questions.map((question, i) => (
              <motion.div
                key={question.id}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <AccordionItem
                  value={question.id}
                  className="data-[state=open]:bg-background/10 px-4 border border-[#FFFFFF14]"
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent className="text-white/80 text-start">
                    {question.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
