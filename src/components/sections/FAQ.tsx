import { Section } from "@/components/ui/Section";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical engagement last?",
    answer: "Our engagements typically range from 3 to 12 months, depending on the complexity and goals of the project. We also offer ongoing retainer partnerships.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, we love working with ambitious startups. We have specific packages designed to help early-stage companies establish a strong market presence.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both project-based pricing and monthly retainers. We believe in transparency and will provide a detailed proposal after our initial discovery call.",
  },
  {
    question: "Can you handle international projects?",
    answer: "Absolutely. We have a global team and have successfully delivered projects for clients across North America, Europe, and Asia.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="gray" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Everything you need to know about working with us. Can't find the answer? Contact our team.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-700 underline">
            Contact Support
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-blue-500 shrink-0" />
                ) : (
                  <Plus className="text-slate-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
