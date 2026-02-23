import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Evolution",
    category: "Digital Transformation",
    image: "https://picsum.photos/seed/fintech/600/400",
  },
  {
    title: "EcoSmart Branding",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/eco/600/400",
  },
  {
    title: "HealthCare App",
    category: "Product Design",
    image: "https://picsum.photos/seed/health/600/400",
  },
  {
    title: "Urban Logistics",
    category: "Strategy",
    image: "https://picsum.photos/seed/logistics/600/400",
  },
  {
    title: "Cloud Migration",
    category: "Development",
    image: "https://picsum.photos/seed/cloud/600/400",
  },
  {
    title: "Retail Analytics",
    category: "Data Science",
    image: "https://picsum.photos/seed/retail/600/400",
  },
];

export function Portfolio() {
  return (
    <Section background="gray" id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Selected Works
          </h2>
          <p className="text-slate-600 text-lg">
            Showcasing our impact across diverse industries.
          </p>
        </div>
        <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group">
          View All Projects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-blue-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.category}
              </span>
              <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
