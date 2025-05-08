import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  source: string;
  colorClass: string;
}

function BenefitCard({ icon, title, description, source, colorClass }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">Source: {source}</span>
        </div>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Health Benefits of Saladmaster Cookware</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Scientifically proven advantages of cooking with Saladmaster's 316Ti stainless steel ultra resistant cookware.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Preserves 93% of Nutrients"
            description="University of Wisconsin Food Science study found that food cooked in Saladmaster cookware retains up to 93% of its nutrients – far more than conventional methods."
            source="University of Wisconsin Food Science Study"
            colorClass="bg-primary/20"
          />
          
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="No Harmful Chemicals"
            description="Unlike nonstick or aluminum pans, Saladmaster uses pure 316Ti stainless steel – no synthetic coatings or toxins. No PTFE/PFAS (Teflon) that are linked to health issues."
            source="Ecology Center Research"
            colorClass="bg-secondary/20"
          />
          
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            }
            title="Improved Blood Health"
            description="Clinical trials showed that high resistant stainless steel cooking significantly increased blood vitamin C and β-carotene levels, and even reduced oxidized LDL ('bad' cholesterol)."
            source="PMC Clinical Study"
            colorClass="bg-accent/20"
          />
          
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Energy Efficient"
            description="Saladmaster's semi-vacuum and Vapo-Valve™ technology cooks food faster at lower temperatures, saving energy and preserving more nutrients in your food."
            source="Saladmaster Technical Specifications"
            colorClass="bg-primary/20"
          />
          
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            }
            title="Reduced Fat Cooking"
            description="Saladmaster cookware allows you to sauté, steam, and even low-fry with almost no oil, preserving natural flavor without added fat."
            source="Healthy Cooking Techniques"
            colorClass="bg-secondary/20"
          />
          
          <BenefitCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
            title="No Heavy Metals"
            description="Saladmaster contains no aluminum or other heavy metals leaching into food, making it ideal for families who want truly non-toxic cookware."
            source="Material Safety Analysis"
            colorClass="bg-accent/20"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => scrollToElement('schedule')}
            className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold py-3 px-8"
            size="lg"
          >
            Experience the Benefits Yourself
          </Button>
        </div>
      </div>
    </section>
  );
}
