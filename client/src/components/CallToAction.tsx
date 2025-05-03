import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function CallToAction() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6">Ready to transform your cooking experience?</h3>
        <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
          Schedule a free cooking demonstration with Sharon and Dhong and discover how Saladmaster cookware can help you prepare healthier, more nutritious meals for your family.
        </p>
        <Button 
          onClick={() => scrollToElement('schedule')}
          className="bg-white text-primary hover:bg-gray-100 font-heading font-semibold py-3 px-8"
          size="lg"
        >
          Book Your Free Demo Today
        </Button>
      </div>
    </section>
  );
}
