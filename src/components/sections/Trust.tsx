import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";

const logos = [
  "Acme Corp",
  "GlobalTech",
  "Nebula",
  "Vertex",
  "Horizon",
  "Pinnacle",
];

const testimonials = [
  {
    quote: "Apex transformed our digital presence completely. Our conversion rates doubled within three months of launch.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    rating: 5,
  },
  {
    quote: "The strategic insight provided by the team was invaluable. They didn't just build a website; they built a growth engine.",
    author: "Michael Chen",
    role: "Founder, StartUp Inc",
    rating: 5,
  },
  {
    quote: "Professional, innovative, and incredibly efficient. The best investment we've made for our brand this year.",
    author: "Elena Rodriguez",
    role: "Director, Creative Solutions",
    rating: 5,
  },
];

export function Trust() {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-bold text-slate-400 font-mono">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${index}/100/100`}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{testimonial.author}</h4>
                <p className="text-slate-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
