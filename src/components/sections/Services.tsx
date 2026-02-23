import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";
import { BarChart3, Globe, Shield, Zap, Users, Layers } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Strategic Consulting",
    description: "Data-driven insights to guide your business decisions and market positioning.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge digital solutions and workflows.",
  },
  {
    icon: Shield,
    title: "Brand Authority",
    description: "Build a resilient brand identity that commands trust and loyalty in your sector.",
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "High-impact campaigns designed to maximize ROI and customer acquisition.",
  },
  {
    icon: Users,
    title: "User Experience Design",
    description: "Crafting intuitive and engaging digital journeys for your customers.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Robust technical foundations that grow with your business needs.",
  },
];

export function Services() {
  return (
    <Section background="gray" id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Comprehensive Solutions for Growth
        </h2>
        <p className="text-slate-600 text-lg">
          We combine creativity with technical expertise to deliver results that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
