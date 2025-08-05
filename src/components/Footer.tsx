import { NavLink } from "react-router-dom";
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Clearing", "Pre-Construction", "Foundation", "Plumbing", 
    "Framing", "Interior Design", "Landscaping", "Site Cleanup"
  ];

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/customer-dashboard", label: "Customer Portal" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-primary-glow">
                  Luxury Construct
                </h3>
                <p className="text-sm text-muted-foreground">Premium Construction Services</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming visions into architectural masterpieces with uncompromising quality and attention to detail.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <NavLink 
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-luxury"
                  >
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-luxury"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-foreground">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@luxuryconstruct.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Construction Ave<br />
                  Luxury District, LD 12345
                </span>
              </div>
            </div>
            <Button variant="construction" size="lg" className="w-full">
              Get Free Estimate
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
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