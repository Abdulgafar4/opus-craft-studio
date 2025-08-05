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
import foundationImage from "@/assets/foundation-work.jpg";
import framingImage from "@/assets/framing-work.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import landscapingImage from "@/assets/landscaping.jpg";

const Services = () => {
  const allServices = [
    {
      id: "clearing",
      icon: Trees,
      title: "Site Clearing",
      description: "Professional land clearing and preparation for construction",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Pre-Construction"
    },
    {
      id: "pre-construction",
      icon: Building,
      title: "Pre-Construction Services",
      description: "Building demolition and site preparation services",
      image: foundationImage,
      duration: "2-3 weeks",
      category: "Pre-Construction"
    },
    {
      id: "tree-protection",
      icon: Trees,
      title: "Tree Protection",
      description: "Professional tree preservation during construction",
      image: landscapingImage,
      duration: "Ongoing",
      category: "Pre-Construction"
    },
    {
      id: "excavation",
      icon: Truck,
      title: "Excavation",
      description: "Precision excavation for foundations and utilities",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Foundation"
    },
    {
      id: "foundation",
      icon: Hammer,
      title: "Foundation Work",
      description: "Footings, ICF forming, and structural foundations",
      image: foundationImage,
      duration: "2-4 weeks",
      category: "Foundation"
    },
    {
      id: "plumbing-sewer",
      icon: Wrench,
      title: "Plumbing & Sewer",
      description: "Complete plumbing, water, and sewer system installation",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Systems"
    },
    {
      id: "mid-construction",
      icon: Building,
      title: "Mid-Construction Services",
      description: "Quality control and project management during construction",
      image: framingImage,
      duration: "Ongoing",
      category: "Construction"
    },
    {
      id: "framing",
      icon: Hammer,
      title: "Framing",
      description: "Structural framing and rough carpentry work",
      image: framingImage,
      duration: "3-6 weeks",
      category: "Construction"
    },
    {
      id: "whole-house-plumbing",
      icon: Wrench,
      title: "Whole House Plumbing",
      description: "Complete residential plumbing system installation",
      image: foundationImage,
      duration: "2-3 weeks",
      category: "Systems"
    },
    {
      id: "radiant-heating",
      icon: Wrench,
      title: "Radiant Floor Heating",
      description: "Indoor radiant floor heating system installation",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Systems"
    },
    {
      id: "site-cleaning",
      icon: Truck,
      title: "Site Cleaning",
      description: "Professional construction site cleanup services",
      image: foundationImage,
      duration: "1-3 days",
      category: "Maintenance"
    },
    {
      id: "interior-design",
      icon: Paintbrush,
      title: "Interior Design & Painting",
      description: "Sundial Interiors - Premium design and finishing services",
      image: interiorImage,
      duration: "4-8 weeks",
      category: "Finishing"
    },
    {
      id: "post-construction",
      icon: Building,
      title: "Post-Construction Services",
      description: "Final inspections and project completion services",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Completion"
    },
    {
      id: "site-cleanup",
      icon: Truck,
      title: "Final Site Cleanup",
      description: "Complete site restoration and cleanup",
      image: foundationImage,
      duration: "3-5 days",
      category: "Completion"
    },
    {
      id: "concrete-work",
      icon: Hammer,
      title: "Concrete Work",
      description: "Decorative concrete steps and structural elements",
      image: foundationImage,
      duration: "1-2 weeks",
      category: "Finishing"
    },
    {
      id: "landscaping",
      icon: Trees,
      title: "Landscape & Hardscape",
      description: "Complete landscaping and hardscape design/installation",
      image: landscapingImage,
      duration: "2-4 weeks",
      category: "Finishing"
    }
  ];

  const categories = [
    "All Services",
    "Pre-Construction",
    "Foundation", 
    "Construction",
    "Systems",
    "Finishing",
    "Completion",
    "Maintenance"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

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
              Comprehensive Services
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

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "luxury" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-luxury"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card key={service.id} className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-background/30 text-background">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <NavLink to={`/services/${service.id}`}>
                      <Button variant="ghost" className="group p-0 h-auto text-primary hover:text-primary-light">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <Button variant="luxury" size="xl">
                Get Project Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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