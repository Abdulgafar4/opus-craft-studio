import { useParams } from "react-router-dom";
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
  DollarSign,
  CheckCircle,
  Star
} from "lucide-react";
import foundationImage from "@/assets/foundation-work.jpg";
import framingImage from "@/assets/framing-work.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import landscapingImage from "@/assets/landscaping.jpg";
import pressureWashingImage from "@/assets/pressure-washing.jpg";

// Showcase images
import deckBefore from "@/assets/showcase/deck-before.jpg";
import deckAfter from "@/assets/showcase/deck-after.jpg";
import foundationShowcase1 from "@/assets/showcase/foundation-showcase-1.jpg";
import foundationShowcase2 from "@/assets/showcase/foundation-showcase-2.jpg";
import framingShowcase1 from "@/assets/showcase/framing-showcase-1.jpg";
import interiorShowcase1 from "@/assets/showcase/interior-showcase-1.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    "clearing": {
      icon: Trees,
      title: "Site Clearing",
      subtitle: "Professional Land Preparation",
      description: "Comprehensive site clearing services to prepare your land for construction. We use modern equipment and environmentally responsible methods to clear vegetation, remove debris, and create the perfect foundation for your luxury home project.",
      image: foundationImage,
      duration: "1-2 weeks",
      priceRange: "$3,000 - $15,000",
      category: "Pre-Construction",
      features: [
        "Vegetation removal and clearing",
        "Debris cleanup and disposal", 
        "Topsoil preservation",
        "Erosion control measures",
        "Environmental compliance",
        "Site accessibility improvement"
      ],
      process: [
        "Site survey and assessment",
        "Environmental permits if required",
        "Strategic clearing plan development",
        "Selective vegetation removal",
        "Debris processing and removal",
        "Site grading and preparation"
      ],
      benefits: [
        "Proper site preparation for construction",
        "Environmental protection and compliance",
        "Cost-effective land utilization",
        "Improved site accessibility"
      ]
    },
    "foundation": {
      icon: Hammer,
      title: "Foundation Work",
      subtitle: "Solid Foundations for Luxury Homes",
      description: "Expert foundation services including footings, ICF forming, and structural foundations. We use the latest techniques and highest quality materials to ensure your luxury home stands on a rock-solid foundation that will last for generations.",
      image: foundationImage,
      duration: "2-4 weeks",
      priceRange: "$25,000 - $75,000",
      category: "Foundation",
      features: [
        "Precision excavation and grading",
        "ICF (Insulated Concrete Form) installation",
        "Reinforced concrete footings",
        "Waterproofing and drainage systems",
        "Foundation insulation",
        "Quality inspections and testing"
      ],
      process: [
        "Site excavation and preparation",
        "Footer placement and reinforcement",
        "ICF form installation",
        "Concrete pouring and curing",
        "Waterproofing application",
        "Backfilling and grading"
      ],
      benefits: [
        "Superior structural integrity",
        "Energy-efficient insulation",
        "Moisture protection",
        "Long-term durability"
      ]
    },
    "framing": {
      icon: Hammer,
      title: "Framing",
      subtitle: "Structural Excellence",
      description: "Professional framing services using premium lumber and advanced construction techniques. Our skilled carpenters create the structural skeleton of your luxury home with precision and attention to detail.",
      image: framingImage,
      duration: "3-6 weeks", 
      priceRange: "$35,000 - $85,000",
      category: "Construction",
      features: [
        "Premium lumber selection",
        "Precision cutting and assembly",
        "Advanced joining techniques",
        "Code compliance and permits",
        "Structural engineering support",
        "Weather protection during construction"
      ],
      process: [
        "Blueprint review and planning",
        "Material delivery and staging",
        "Floor system installation",
        "Wall framing and sheathing",
        "Roof structure assembly",
        "Final inspection and approval"
      ],
      benefits: [
        "Structural integrity and safety",
        "Precise room dimensions",
        "Efficient construction timeline",
        "Quality material usage"
      ]
    },
    "interior-design": {
      icon: Paintbrush,
      title: "Interior Design & Painting",
      subtitle: "Sundial Interiors - Premium Finishing",
      description: "Transform your space with our award-winning interior design and painting services. Sundial Interiors brings luxury, style, and sophistication to every room with premium finishes and expert craftsmanship.",
      image: interiorImage,
      duration: "4-8 weeks",
      priceRange: "$45,000 - $150,000",
      category: "Finishing",
      features: [
        "Custom interior design consultation",
        "Premium paint and finish selection",
        "Color scheme development",
        "Texture and accent wall creation",
        "Trim and millwork finishing",
        "Final styling and accessories"
      ],
      process: [
        "Design consultation and planning",
        "Color and material selection",
        "Surface preparation",
        "Premium paint application",
        "Decorative finishing techniques",
        "Final styling and inspection"
      ],
      benefits: [
        "Luxurious living spaces",
        "Increased property value",
        "Personalized design aesthetic",
        "Professional quality finish"
      ]
    },
    "landscaping": {
      icon: Trees,
      title: "Landscape & Hardscape",
      subtitle: "Complete Outdoor Living Solutions",
      description: "Create stunning outdoor spaces with our comprehensive landscaping and hardscaping services. From elegant gardens to sophisticated patios, we design and install outdoor environments that complement your luxury home.",
      image: landscapingImage,
      duration: "2-4 weeks",
      priceRange: "$20,000 - $100,000",
      category: "Finishing",
      features: [
        "Landscape design and planning",
        "Premium plant selection",
        "Irrigation system installation",
        "Hardscape construction",
        "Outdoor lighting design",
        "Maintenance planning"
      ],
      process: [
        "Site analysis and design",
        "Material and plant selection",
        "Hardscape installation",
        "Planting and irrigation",
        "Lighting installation",
        "Final grading and cleanup"
      ],
      benefits: [
        "Enhanced curb appeal",
        "Outdoor living spaces",
        "Increased property value",
        "Low-maintenance solutions"
      ]
    },
    "pressure-washing": {
      icon: Building,
      title: "Pressure Washing",
      subtitle: "Professional Exterior Cleaning Services",
      description: "Restore the beauty of your property with our professional pressure washing services. We clean decks, siding, roofs, driveways, patios, and more using commercial-grade equipment and eco-friendly methods.",
      image: pressureWashingImage,
      duration: "1-3 days",
      priceRange: "$500 - $3,500",
      category: "Maintenance",
      features: [
        "Deck restoration and cleaning",
        "House siding deep cleaning", 
        "Roof moss and algae removal",
        "Driveway and pathway cleaning",
        "Patio and pool deck maintenance",
        "Stone, brick, and masonry cleaning",
        "Commercial pressure washing equipment",
        "Eco-friendly cleaning solutions"
      ],
      process: [
        "Property assessment and preparation",
        "Equipment setup and safety measures",
        "Pre-treatment of stubborn stains",
        "Systematic pressure washing",
        "Post-cleaning inspection",
        "Cleanup and final walkthrough"
      ],
      benefits: [
        "Restored curb appeal",
        "Extended surface lifespan",
        "Removal of harmful contaminants",
        "Increased property value",
        "Professional results guaranteed"
      ],
      showcase: [
        { image: deckBefore, title: "Deck Before Cleaning", description: "Weathered and stained deck surface" },
        { image: deckAfter, title: "Deck After Cleaning", description: "Restored natural wood beauty" }
      ]
    }
  };

  const service = serviceDetails[serviceId] || serviceDetails["foundation"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge variant="outline" className="bg-background/10 backdrop-blur-sm border-primary/30 text-background font-medium">
              {service.category}
            </Badge>
            
            <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
              <service.icon className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-background leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-glow font-medium">
              {service.subtitle}
            </p>
            
            <p className="text-lg text-background/90 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <p className="text-foreground">{step}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-foreground">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                      <CardContent className="p-6 text-center space-y-3">
                        <Star className="w-8 h-8 mx-auto text-primary" />
                        <p className="text-foreground font-medium">{benefit}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Info Card */}
              <Card className="bg-gradient-card border-border/50 shadow-luxury sticky top-8">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-foreground">Service Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium text-foreground">{service.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Price Range</div>
                        <div className="font-medium text-foreground">{service.priceRange}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border">
                    <Button variant="luxury" size="lg" className="w-full">
                      Get Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg text-foreground">Have Questions?</h4>
                  <p className="text-muted-foreground text-sm">
                    Our experts are ready to discuss your specific needs and provide detailed information.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">Phone: (555) 123-4567</div>
                    <div className="text-muted-foreground">Email: info@luxuryconstruct.com</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Work Gallery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See the quality and craftsmanship we deliver in every {service.title.toLowerCase()} project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Showcase Images */}
            {serviceId === 'foundation' && (
              <>
                <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${foundationShowcase1})` }} />
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Foundation Pour in Progress</h4>
                    <p className="text-sm text-muted-foreground">Professional concrete work with advanced equipment</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${foundationShowcase2})` }} />
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Completed Foundation</h4>
                    <p className="text-sm text-muted-foreground">Perfect concrete finish with ICF forming</p>
                  </CardContent>
                </Card>
              </>
            )}
            {serviceId === 'framing' && (
              <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${framingShowcase1})` }} />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground">Precision Framing Work</h4>
                  <p className="text-sm text-muted-foreground">Expert carpentry with premium materials</p>
                </CardContent>
              </Card>
            )}
            {serviceId === 'interior-design' && (
              <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${interiorShowcase1})` }} />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground">Custom Interior Design</h4>
                  <p className="text-sm text-muted-foreground">Luxurious finishes by Sundial Interiors</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Before & After Section */}
          {service.showcase && (
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Before & After Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.showcase.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                    <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today to discuss your {service.title.toLowerCase()} needs and receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;