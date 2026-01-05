"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AdmissionsFAQ() {
  const faqs = [
    {
      question: "What is the minimum age for Nursery admission?",
      answer:
        "The child must be at least 3 years old as of June 1st of the academic year involved.",
    },
    {
      question: "Is there an entrance test?",
      answer:
        "No, we believe in inclusive education. There is a friendly interaction session to understand the child's readiness, but no formal written test for Kindergarten processing.",
    },
    {
      question: "What is the teacher-student ratio?",
      answer:
        "We maintain a healthy ratio of 1:15 in Kindergarten and 1:25 in Primary classes to ensure individual attention.",
    },
    {
      question: "Do you provide school transport?",
      answer:
        "Yes, we provide safe and GPS-tracked bus facility covering major routes in the city. Each bus has a female attendant.",
    },
    {
      question: "Are meals provided at school?",
      answer:
        "We have an optional nutritious meal plan. Parents can also choose to send home-cooked meals. Junk food is strictly discouraged.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We have answers.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-background rounded-2xl shadow-sm border px-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-muted"
            >
              <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
