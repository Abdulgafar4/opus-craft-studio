import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trees,
  Building,
  Hammer,
  Wrench,
  Paintbrush,
  Truck,
  ArrowRight,
  Clock,
  Shield
} from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import foundationWork from "@/assets/foundation-work.jpg";
import framingWork from "@/assets/framing-work.jpg";
import interiorDesign from "@/assets/interior-design.jpg";
import landscaping from "@/assets/landscaping.jpg";
import clearingService from "@/assets/clearing-service.jpg";
import preConstruction from "@/assets/pre-construction.jpg";
import excavation from "@/assets/excavation.jpg";
import plumbing from "@/assets/plumbing.jpg";
import midConstruction from "@/assets/mid-construction.jpg";
import siteCleanup from "@/assets/site-cleanup.jpg";
import concreteWork from "@/assets/concrete-work.jpg";

const Services = () => {
  const services = [
    {
      id: "clearing",
      title: "Site Clearing",
      description: "Professional land clearing and site preparation for construction projects",
      price: "Starting at $2,500",
      image: clearingService,
      features: ["Tree removal", "Vegetation clearing", "Debris cleanup", "Soil preparation"]
    },
    {
      id: "pre-construction", 
      title: "Pre-Construction",
      description: "Comprehensive planning and preparation services before construction begins",
      price: "Starting at $5,000",
      image: preConstruction,
      features: ["Site surveys", "Permit assistance", "Planning consultation", "Design review"]
    },
    {
      id: "excavation",
      title: "Excavation",
      description: "Professional excavation and earthwork for foundation preparation",
      price: "Starting at $8,000", 
      image: excavation,
      features: ["Site excavation", "Grading", "Drainage preparation", "Foundation prep"]
    },
    {
      id: "foundation",
      title: "Foundation Work", 
      description: "Expert foundation installation with ICF forming and footing systems",
      price: "Starting at $15,000",
      image: foundationWork,
      features: ["Excavation", "ICF forming", "Concrete pouring", "Waterproofing"]
    },
    {
      id: "plumbing",
      title: "Plumbing & Sewer",
      description: "Complete plumbing systems installation and sewer connections",
      price: "Starting at $12,000",
      image: plumbing,
      features: ["Pipe installation", "Fixture mounting", "Sewer connections", "Water systems"]
    },
    {
      id: "framing",
      title: "Framing",
      description: "Professional structural framing for residential and commercial projects", 
      price: "Starting at $20,000",
      image: framingWork,
      features: ["Structural framing", "Roof construction", "Wall systems", "Floor systems"]
    },
    {
      id: "mid-construction",
      title: "Mid-Construction Services",
      description: "Quality control and progress management during construction phases",
      price: "Starting at $10,000",
      image: midConstruction,
      features: ["Progress monitoring", "Quality control", "Coordination", "Problem solving"]
    },
    {
      id: "interior-design",
      title: "Interior Design",
      description: "Complete interior design and finishing services by Sundial Interiors",
      price: "Starting at $25,000", 
      image: interiorDesign,
      features: ["Design consultation", "Material selection", "Custom finishes", "Project coordination"]
    },
    {
      id: "site-cleanup",
      title: "Site Cleanup",
      description: "Comprehensive post-construction cleanup and final detailing",
      price: "Starting at $3,000",
      image: siteCleanup,
      features: ["Debris removal", "Deep cleaning", "Final inspection", "Move-in preparation"]
    },
    {
      id: "concrete-work",
      title: "Concrete Work",
      description: "Premium concrete work including steps, walkways, and decorative finishes",
      price: "Starting at $6,000",
      image: concreteWork,
      features: ["Decorative concrete", "Steps & walkways", "Driveways", "Custom finishes"]
    },
    {
      id: "landscaping",
      title: "Landscaping",
      description: "Professional landscaping and hardscape installation services",
      price: "Starting at $8,000",
      image: landscaping,
      features: ["Garden design", "Hardscape installation", "Irrigation systems", "Maintenance planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="outline" className="bg-background/10 backdrop-blur-sm border-primary/30 text-background font-medium">
              Premium Construction Services
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-background leading-tight">
              Complete Construction
              <span className="text-primary-glow block mt-2">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              From initial site preparation to final landscaping, we handle every aspect of your luxury home construction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services Portfolio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              View our comprehensive range of construction services with real project examples and detailed explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-background/30 text-foreground">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Shield className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <NavLink to={`/services/${service.id}`}>
                      <Button variant="ghost" className="group p-0 h-auto text-primary hover:text-primary-light">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </NavLink>
                    <NavLink to="/quote">
                      <Button variant="outline" size="sm">
                        Get Quote
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Construction Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A systematic approach to delivering excellence at every stage of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Pre-Construction",
                description: "Site preparation, clearing, and foundation work",
                icon: Trees
              },
              {
                phase: "Phase 2", 
                title: "Structure",
                description: "Framing, systems installation, and rough work",
                icon: Hammer
              },
              {
                phase: "Phase 3",
                title: "Interior",
                description: "Interior design, finishing, and painting",
                icon: Paintbrush
              },
              {
                phase: "Phase 4",
                title: "Completion",
                description: "Final details, landscaping, and cleanup",
                icon: Shield
              }
            ].map((phase, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                    <phase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs font-medium">
                      {phase.phase}
                    </Badge>
                    <h3 className="font-semibold text-xl text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today to discuss your construction needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/quote">
                <Button variant="luxury" size="xl">
                  Get Project Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </NavLink>
              <Button variant="outline" size="xl" className="bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;