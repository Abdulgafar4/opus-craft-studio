import { NavLink } from "react-router-dom";
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Clearing", "Pre-Construction", "Foundation", "Plumbing", 
    "Framing", "Interior Design", "Landscaping", "Site Cleanup", "Pressure Washing"
  ];

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/customer-dashboard", label: "Customer Portal" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTIwIDIwYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwdjIwaDQwVjIwSDIweiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        {/* Top Section - Call to Action */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Building className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
            Ready to Build Your Dream?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's transform your vision into reality with our premium construction services
          </p>
          <NavLink to="/quote">
            <Button variant="luxury" size="xl" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-2xl">
              Start Your Project Today
            </Button>
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-luxury">
                  <Building className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-primary">
                    Luxury Construct
                  </h3>
                  <p className="text-secondary-foreground/60">Premium Construction Services</p>
                </div>
              </div>
              <p className="text-secondary-foreground/70 leading-relaxed">
                Crafting architectural masterpieces with unparalleled craftsmanship and attention to every detail.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-secondary-foreground">Follow Our Journey</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="bg-primary/10 hover:bg-primary/20 text-secondary-foreground border-primary/20">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-primary/10 hover:bg-primary/20 text-secondary-foreground border-primary/20">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-primary/10 hover:bg-primary/20 text-secondary-foreground border-primary/20">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xl text-secondary-foreground border-b border-primary/20 pb-3">Our Expertise</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <NavLink 
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-luxury flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-2 transition-all"></span>
                    <span>{service}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xl text-secondary-foreground border-b border-primary/20 pb-3">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to}
                    className="text-secondary-foreground/70 hover:text-primary transition-luxury flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-2 transition-all"></span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xl text-secondary-foreground border-b border-primary/20 pb-3">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">(555) 123-4567</p>
                  <p className="text-secondary-foreground/60 text-sm">24/7 Support Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">info@luxuryconstruct.com</p>
                  <p className="text-secondary-foreground/60 text-sm">Email Us Anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-3 bg-primary/5 rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-secondary-foreground font-medium">123 Construction Ave</p>
                  <p className="text-secondary-foreground/60">Luxury District, LD 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-16 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © {currentYear} Luxury Construct. All rights reserved. | 
            <NavLink to="/privacy" className="hover:text-primary transition-luxury ml-1">
              Privacy Policy
            </NavLink> | 
            <NavLink to="/terms" className="hover:text-primary transition-luxury ml-1">
              Terms of Service
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;