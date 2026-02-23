import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section background="dark" className="text-center py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Ready to Redefine Your Future?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join the ranks of industry leaders who have transformed their business with Apex. Limited consultation slots available for this quarter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 h-auto">
            Schedule Your Consultation
            <ArrowRight className="ml-2" />
          </Button>
          <p className="text-slate-400 text-sm mt-4 sm:mt-0 sm:ml-4">
            No commitment required.
          </p>
        </div>
      </div>
    </Section>
  );
}
