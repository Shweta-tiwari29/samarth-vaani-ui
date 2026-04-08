import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I apply for a Unique Disability ID (UDID)?",
    a: "Visit your nearest District Disability Rehabilitation Centre (DDRC) or apply online at swavlambancard.gov.in with your medical certificate and Aadhaar card.",
  },
  {
    q: "What is the RPwD Act, 2016?",
    a: "The Rights of Persons with Disabilities Act, 2016 recognizes 21 types of disabilities and provides rights like free education up to 18 years, 4% reservation in government jobs, and accessible public infrastructure.",
  },
  {
    q: "Am I eligible for income tax benefits?",
    a: "Yes. Under Section 80U of the Income Tax Act, persons with 40%+ disability can claim ₹75,000 deduction, and those with 80%+ (severe) can claim ₹1,25,000.",
  },
  {
    q: "How can I get a disability certificate?",
    a: "Visit a government hospital with a medical board. You'll need an Aadhaar card, passport photos, and medical records. The certificate is issued free of cost.",
  },
  {
    q: "What financial assistance schemes are available?",
    a: "Key schemes include Deendayal Disabled Rehabilitation Scheme (DDRS), National Fund for Persons with Disabilities, and state-level pension schemes. Use SamarthVaani's Scheme Finder for personalized results.",
  },
];

const FAQSection = () => {
  return (
    <section aria-labelledby="faq-heading">
      <div className="mb-3 flex items-center gap-2">
        <HelpCircle className="h-5 w-5 text-primary" />
        <h2 id="faq-heading" className="text-lg font-bold text-foreground">
          Commonly Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="rounded-xl border bg-card">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="px-4 text-sm font-semibold text-foreground text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
