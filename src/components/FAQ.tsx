import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I receive a certificate upon completion?",
    answer: "Yes! All courses come with a verified certificate of completion that you can share on LinkedIn and add to your resume.",
  },
  {
    question: "How long do I have access to the courses?",
    answer: "You have lifetime access to all course materials, including future updates and new content added to the course.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course, contact us within 30 days for a full refund.",
  },
  {
    question: "Do I need prior programming experience?",
    answer: "It depends on the course. Our beginner courses require no prior experience, while advanced courses may require basic Python knowledge.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide email support, community forums, and for Pro members, 1-on-1 mentorship sessions with instructors.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: "Yes! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card-purple border-transparent rounded-2xl px-6 shadow-card"
              >
                <AccordionTrigger className="font-sans font-semibold text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
