import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  DollarSign, 
  User, 
  UserCog,
  Building,
  Hammer,
  Trees,
  Wrench,
  Paintbrush
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Info },
    { to: "/pricing", label: "Pricing", icon: DollarSign },
  ];

  const serviceItems = [
    { to: "/services/clearing", label: "Clearing", icon: Trees },
    { to: "/services/pre-construction", label: "Pre-Construction", icon: Building },
    { to: "/services/foundation", label: "Foundation", icon: Hammer },
    { to: "/services/plumbing", label: "Plumbing", icon: Wrench },
    { to: "/services/interior-design", label: "Interior Design", icon: Paintbrush },
  ];


  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, label, icon: Icon, mobile = false }: any) => (
    <NavLink
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-luxury font-medium",
        mobile ? "text-base" : "text-sm",
        isActive(to)
          ? "bg-primary text-primary-foreground shadow-construction"
          : "text-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      onClick={() => mobile && setIsOpen(false)}
    >
      <Icon className="w-4 h-4" />
      {label}
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 font-playfair font-bold text-2xl text-primary hover:text-primary-light transition-luxury"
          >
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-primary-foreground" />
            </div>
            Luxury Construct
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {mainNavItems.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Hammer className="w-4 h-4" />
                  Services
                </Button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-luxury opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-2">
                    {serviceItems.map((item) => (
                      <NavItem key={item.to} {...item} />
                    ))}
                    <NavLink 
                      to="/services" 
                      className="block px-4 py-2 text-primary hover:text-primary-light font-medium transition-luxury"
                    >
                      View All Services →
                    </NavLink>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex items-center space-x-3">
              <NavLink to="/quote">
                <Button variant="luxury" size="lg">
                  Get Quote
                </Button>
              </NavLink>
              <Button variant="outline" size="lg">
                Login
              </Button>
              <Button variant="default" size="lg">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border animate-fade-in">
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <NavItem key={item.to} {...item} mobile />
              ))}
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-muted-foreground px-4">Services</h3>
              {serviceItems.map((item) => (
                <NavItem key={item.to} {...item} mobile />
              ))}
              <NavLink 
                to="/services" 
                className="block px-4 py-2 text-primary hover:text-primary-light font-medium transition-luxury"
                onClick={() => setIsOpen(false)}
              >
                View All Services →
              </NavLink>
            </div>

            <div className="px-4 pt-6 space-y-3">
              <NavLink to="/quote" onClick={() => setIsOpen(false)}>
                <Button variant="luxury" size="lg" className="w-full">
                  Get Quote
                </Button>
              </NavLink>
              <div className="flex space-x-3">
                <Button variant="outline" size="lg" className="flex-1">
                  Login
                </Button>
                <Button variant="default" size="lg" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;