import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build the Future?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's discuss how SCIP construction can transform your next project. Our team of experts is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" size="lg">
            Download Brochure
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>info@panelcous.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
