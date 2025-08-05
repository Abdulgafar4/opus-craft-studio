import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Zap
} from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const About = () => {
  const team = [
    {
      name: "Marcus Thompson",
      role: "Founder & CEO",
      experience: "20+ years",
      description: "Visionary leader with expertise in luxury construction and project management."
    },
    {
      name: "Sarah Williams",
      role: "Chief Architect",
      experience: "15+ years", 
      description: "Award-winning architect specializing in modern luxury residential design."
    },
    {
      name: "David Chen",
      role: "Construction Manager",
      experience: "18+ years",
      description: "Expert in high-end construction techniques and quality assurance."
    },
    {
      name: "Elena Rodriguez",
      role: "Interior Design Director",
      experience: "12+ years",
      description: "Creative director behind our stunning interior design transformations."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters. We deliver with meticulous attention to craftsmanship and quality."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about creating spaces that inspire and transform lives."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge techniques and materials for superior results."
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started with a vision for luxury construction" },
    { year: "2012", event: "First Award", description: "Regional Excellence in Construction Award" },
    { year: "2016", event: "100 Homes", description: "Completed our 100th luxury home project" },
    { year: "2020", event: "Sundial Interiors", description: "Launched our interior design division" },
    { year: "2024", event: "150+ Projects", description: "Celebrating over 150 completed luxury homes" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="outline" className="bg-background/10 backdrop-blur-sm border-primary/30 text-background font-medium">
              About Luxury Construct
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-background leading-tight">
              Crafting Dreams Into
              <span className="text-primary-glow block mt-2">Reality</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been transforming visions into architectural masterpieces, one luxury home at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2008 by Marcus Thompson, Luxury Construct began with a simple yet ambitious vision: to redefine what luxury construction means. We believed that true luxury isn't just about expensive materials—it's about uncompromising attention to detail, innovative craftsmanship, and creating spaces that exceed expectations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to have completed over 150 luxury homes, each one a testament to our commitment to excellence. From our humble beginnings as a small construction company to becoming the region's premier luxury home builder, our journey has been guided by our core values and an unwavering dedication to our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground text-sm">Homes Built</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-xl text-foreground">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Key milestones in our journey to becoming the region's premier luxury construction company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-construction z-10" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                      <CardContent className="p-6 space-y-3">
                        <div className="font-playfair text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="font-semibold text-lg text-foreground">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced professionals bring decades of combined expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience the difference that comes with partnering with true construction professionals who care about your vision as much as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <NavLink to="/services">
                <Button variant="outline" size="xl" className="bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  View Our Services
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;