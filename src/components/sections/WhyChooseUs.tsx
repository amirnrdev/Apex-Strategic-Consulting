import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "250+", label: "Projects Delivered" },
  { value: "10x", label: "ROI Average" },
  { value: "24/7", label: "Support & Monitoring" },
];

const benefits = [
  "Industry-leading expertise with over 10 years of experience.",
  "Tailored strategies that align with your specific business goals.",
  "Transparent communication and agile project management.",
  "Commitment to long-term partnership and sustainable growth.",
];

export function WhyChooseUs() {
  return (
    <Section background="dark" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Industry Leaders Choose Apex
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We don't just deliver services; we deliver measurable outcomes. Our approach is rooted in data, driven by innovation, and focused on your success.
          </p>
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
