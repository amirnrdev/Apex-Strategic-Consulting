import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, challenges, and market landscape.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We craft a bespoke roadmap tailored to your unique objectives.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Our expert team implements the strategy with precision and agility.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "We continuously monitor, analyze, and refine for maximum impact.",
  },
];

export function Process() {
  return (
    <Section background="white" id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Our Proven Methodology
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          A structured approach to ensure transparency, efficiency, and results.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative group hover:border-blue-200 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto group-hover:bg-blue-600 transition-colors z-10 relative">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
