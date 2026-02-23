import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Essential strategy for emerging businesses.",
    features: ["Market Analysis", "Basic Brand Audit", "Monthly Report", "Email Support"],
    recommended: false,
  },
  {
    name: "Growth",
    price: "$5,000",
    description: "Comprehensive solutions for scaling companies.",
    features: [
      "Advanced Strategy",
      "Full Brand Identity",
      "Weekly Consultation",
      "Priority Support",
      "Performance Marketing",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored partnership for market leaders.",
    features: [
      "Dedicated Team",
      "Global Expansion Strategy",
      "24/7 Strategic Partner",
      "Custom Development",
      "Data Science Integration",
    ],
    recommended: false,
  },
];

export function Pricing() {
  return (
    <Section background="white" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Transparent Investment
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Choose the plan that aligns with your growth trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border ${
              plan.recommended
                ? "border-blue-500 shadow-xl bg-white scale-105 z-10"
                : "border-slate-200 shadow-sm bg-slate-50"
            } flex flex-col`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Recommended
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-slate-900 mb-4">{plan.price}</div>
            <p className="text-slate-600 mb-8 text-sm">{plan.description}</p>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                  <Check className="text-blue-500 shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.recommended ? "primary" : "outline"}
              className="w-full"
            >
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
