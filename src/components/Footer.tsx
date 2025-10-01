import { Building2, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Panelco US</span>
            </div>
            <p className="text-background/80">
              Leading provider of SCIP construction solutions for residential and commercial projects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Industrial</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Panelco US. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
