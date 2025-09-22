import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator,
  CheckCircle,
  ArrowRight,
  Home,
  DollarSign,
  Clock,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Pricing = () => {
  const [projectType, setProjectType] = useState("");
  const [squareFootage, setSquareFootage] = useState([2500]);
  const [finishLevel, setFinishLevel] = useState("");
  const [location, setLocation] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);

  const packages = [
    {
      name: "Essential",
      price: "From $350/sq ft",
      description: "High-quality construction with standard finishes",
      features: [
        "Site preparation & clearing",
        "Foundation & framing",
        "Standard plumbing & electrical",
        "Quality interior finishes",
        "Basic landscaping",
        "1-year warranty"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "From $450/sq ft",
      description: "Luxury construction with premium materials",
      features: [
        "Everything in Essential",
        "Premium interior design",
        "High-end fixtures & appliances",
        "Radiant floor heating",
        "Custom millwork",
        "Professional landscaping",
        "2-year warranty"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "From $600/sq ft",
      description: "Ultra-luxury with the finest materials",
      features: [
        "Everything in Premium",
        "Sundial Interiors design",
        "Luxury appliance packages",
        "Smart home integration",
        "Custom architectural details",
        "Designer landscaping",
        "5-year warranty"
      ],
      popular: false
    }
  ];

  const calculateEstimate = () => {
    if (!projectType || !finishLevel) return;

    const basePrices = {
      "new-construction": { essential: 350, premium: 450, elite: 600 },
      "renovation": { essential: 200, premium: 275, elite: 375 },
      "addition": { essential: 300, premium: 400, elite: 525 }
    };

    const locationMultipliers = {
      "urban": 1.2,
      "suburban": 1.0,
      "rural": 0.9
    };

    const basePrice = basePrices[projectType]?.[finishLevel] || 0;
    const locationMultiplier = locationMultipliers[location] || 1.0;
    const estimate = Math.round(basePrice * squareFootage[0] * locationMultiplier);
    
    setEstimatedCost(estimate);
  };

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
            <Badge variant="outline" className="bg-secondary-foreground/10 backdrop-blur-sm border-primary/30 text-secondary-foreground font-medium">
              Transparent Pricing
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
              Investment in
              <span className="text-primary block mt-2">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Discover our competitive pricing for luxury construction services with no hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Project Cost Calculator
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get an instant estimate for your luxury construction project based on market values and project specifications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calculator className="w-8 h-8 text-primary" />
                  Project Estimate Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="project-type" className="text-base font-medium">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-construction">New Construction</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="addition">Addition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="finish-level" className="text-base font-medium">Finish Level</Label>
                    <Select value={finishLevel} onValueChange={setFinishLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select finish level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="essential">Essential</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="elite">Elite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="location" className="text-base font-medium">Location Type</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urban">Urban</SelectItem>
                        <SelectItem value="suburban">Suburban</SelectItem>
                        <SelectItem value="rural">Rural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">
                      Square Footage: {squareFootage[0].toLocaleString()} sq ft
                    </Label>
                    <Slider
                      value={squareFootage}
                      onValueChange={setSquareFootage}
                      max={8000}
                      min={1000}
                      step={100}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={calculateEstimate} 
                    variant="construction" 
                    size="lg" 
                    className="flex-1"
                    disabled={!projectType || !finishLevel || !location}
                  >
                    Calculate Estimate
                    <Calculator className="w-5 h-5 ml-2" />
                  </Button>
                  
                  {estimatedCost > 0 && (
                    <div className="flex-1 bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground">Estimated Cost</div>
                      <div className="font-playfair text-2xl font-bold text-primary">
                        ${estimatedCost.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        *Estimate based on current market values
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Construction Packages
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the package that best fits your vision and budget. All packages include our signature quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury ${pkg.popular ? 'ring-2 ring-primary shadow-construction' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-playfair">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? "luxury" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Pricing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent, competitive, and backed by unmatched quality and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden costs or surprise charges. What you see is what you pay."
              },
              {
                icon: Award,
                title: "Best Value",
                description: "Premium quality construction at competitive market rates."
              },
              {
                icon: Clock,
                title: "Fixed Timeline",
                description: "Guaranteed completion dates with penalties for delays."
              },
              {
                icon: Home,
                title: "Quality Guarantee",
                description: "Comprehensive warranties on all work and materials."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              Ready for a Detailed Quote?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get a personalized quote based on your specific requirements and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl">
                Request Detailed Quote
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

export default Pricing;