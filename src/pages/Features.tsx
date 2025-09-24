import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Scan, 
  Brain, 
  Shield, 
  Zap, 
  Database,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const coreFeatures = [
    {
      icon: Camera,
      title: "Smart Image Capture",
      description: "High-resolution image analysis with automatic crop detection and optimal lighting suggestions.",
      benefits: ["Multi-angle analysis", "Auto-enhancement", "Batch processing"]
    },
    {
      icon: Scan,
      title: "Instant Disease Detection",
      description: "Real-time identification of crop diseases with 95%+ accuracy using advanced AI algorithms.",
      benefits: ["Sub-second analysis", "40+ disease types", "Confidence scoring"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning models trained on millions of crop images for precise diagnostics.",
      benefits: ["Continuous learning", "Regional adaptation", "Expert validation"]
    },
    {
      icon: Shield,
      title: "Early Prevention",
      description: "Detect diseases before visible symptoms appear, preventing crop loss and reducing costs.",
      benefits: ["Preventive alerts", "Treatment timing", "Risk assessment"]
    }
  ];

  const advancedFeatures = [
    {
      icon: Database,
      title: "Crop Health Analytics",
      description: "Comprehensive tracking and analysis of crop health trends over time.",
      color: "text-[hsl(var(--growth-green))]"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Connect with agricultural experts for personalized advice and treatment plans.",
      color: "text-[hsl(var(--earth-brown))]"
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Data-driven recommendations to maximize crop yields and quality.",
      color: "text-[hsl(var(--nature-primary))]"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock crop health monitoring with automated alerts.",
      color: "text-[hsl(var(--fresh-green))]"
    }
  ];

  const benefits = [
    "Reduce crop losses by up to 80%",
    "Save on pesticide costs",
    "Increase yield quality",
    "Make data-driven decisions",
    "Access expert knowledge",
    "Monitor multiple fields"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[hsl(var(--nature-primary))] to-[hsl(var(--growth-green))] text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Agriculture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Features for
              <span className="block text-[hsl(var(--fresh-green))]">Smart Farming</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Discover how AgriLens transforms traditional farming with cutting-edge AI technology, 
              providing farmers with the tools they need to protect and optimize their crops.
            </p>
            <Link to="/">
              <Button variant="secondary" size="lg" className="bg-white text-[hsl(var(--nature-primary))] hover:bg-white/90">
                Start Using AgriLens
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Essential tools that every modern farmer needs for crop disease management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-[hsl(var(--nature-primary))]/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-[hsl(var(--nature-primary))]/10">
                        <feature.icon className="h-6 w-6 text-[hsl(var(--nature-primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--growth-green))]" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take your farming to the next level with these powerful features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-4 rounded-full bg-muted">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose AgriLens?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of farmers who have transformed their agricultural practices with our comprehensive platform.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--growth-green))] flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-[hsl(var(--nature-primary))]/5 to-[hsl(var(--growth-green))]/5 border-2 border-[hsl(var(--nature-primary))]/20">
                  <div className="text-center">
                    <Zap className="h-16 w-16 text-[hsl(var(--nature-primary))] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Transform your farming today with AI-powered crop disease detection.
                    </p>
                    <Link to="/">
                      <Button variant="nature" size="lg" className="w-full">
                        Try AgriLens Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;