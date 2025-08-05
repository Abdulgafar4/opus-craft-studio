import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Shield, 
  Award, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Hammer,
  Trees,
  Wrench,
  Paintbrush
} from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import foundationImage from "@/assets/foundation-work.jpg";
import framingImage from "@/assets/framing-work.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import landscapingImage from "@/assets/landscaping.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full licensing and comprehensive insurance coverage for your peace of mind"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in luxury home construction across the region"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines without compromising on quality"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen and engineers with decades of combined experience"
    }
  ];

  const services = [
    {
      icon: Trees,
      title: "Site Preparation",
      description: "Clearing, excavation, and tree protection services",
      image: foundationImage,
      link: "/services/clearing"
    },
    {
      icon: Building,
      title: "Foundation & Framing",
      description: "ICF forming, footings, and structural framing",
      image: framingImage,
      link: "/services/foundation"
    },
    {
      icon: Wrench,
      title: "Plumbing & Systems",
      description: "Complete plumbing, heating, and utility installation",
      image: foundationImage,
      link: "/services/plumbing"
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Sundial Interiors - Premium finishing and design",
      image: interiorImage,
      link: "/services/interior-design"
    }
  ];

  const stats = [
    { number: "150+", label: "Luxury Homes Built" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Project Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Exceptional craftsmanship and attention to detail. Our dream home exceeded every expectation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Developer",
      content: "Professional, reliable, and delivers luxury results on time. Highly recommended.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Architect",
      content: "Perfect execution of complex architectural plans. True luxury construction experts.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="outline" className="bg-background/10 backdrop-blur-sm border-primary/30 text-background font-medium">
              Luxury Construction Since 2008
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
              Building Your
              <span className="text-primary-glow block mt-2">Dream Home</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto leading-relaxed">
              From foundation to finish, we deliver uncompromising luxury and craftsmanship in every detail of your custom home construction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group">
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Luxury Construct
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the difference that comes with working with true construction professionals who prioritize quality, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Construction Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial site preparation to final landscaping, we handle every aspect of your luxury home construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-xl text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <NavLink to={service.link}>
                    <Button variant="ghost" className="group p-0 h-auto text-primary hover:text-primary-light">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <NavLink to="/services">
              <Button variant="construction" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today for a free consultation and estimate. Let's bring your vision to life with uncompromising quality and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                Get Free Estimate
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

export default Index;