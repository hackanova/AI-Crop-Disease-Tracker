import { Camera, Zap, MapPin, TrendingUp, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import healthyLeaf from "@/assets/healthy-leaf.jpg";
import diseasedLeaf from "@/assets/diseased-leaf.jpg";
import aiInterface from "@/assets/ai-interface.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Upload Leaf Image",
      description: "Simply capture or upload a photo of the affected leaf using your smartphone or camera.",
      color: "text-[hsl(var(--growth-green))]"
    },
    {
      icon: Zap,
      title: "Instant Disease Detection",
      description: "Our AI model analyzes the image in seconds, identifying diseases with 95%+ accuracy.",
      color: "text-[hsl(var(--nature-primary))]"
    },
    {
      icon: MapPin,
      title: "Geo-tagged Reports",
      description: "Each analysis includes location data for tracking disease spread patterns.",
      color: "text-[hsl(var(--earth-warm))]"
    },
    {
      icon: TrendingUp,
      title: "Disease Forecasting",
      description: "Predictive analytics help anticipate future disease outbreaks in your area.",
      color: "text-[hsl(var(--growth-green))]"
    },
    {
      icon: Shield,
      title: "Treatment Recommendations",
      description: "Get specific treatment suggestions and prevention strategies for detected diseases.",
      color: "text-[hsl(var(--nature-primary))]"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Track disease progression and treatment effectiveness over time.",
      color: "text-[hsl(var(--earth-warm))]"
    }
  ];

  return (
    <section id="features" className="py-20 bg-[hsl(var(--nature-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--nature-primary))]">
            Powerful Features for Smart Farming
          </h2>
          <p className="text-xl text-[hsl(var(--earth-dark))] max-w-3xl mx-auto">
            Everything you need to protect your crops and maximize yields with cutting-edge AI technology.
          </p>
        </div>

        {/* Visual Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-nature)] transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={healthyLeaf} 
                alt="Healthy crop leaf" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--growth-green))]">Healthy Leaf</h3>
                <p className="text-muted-foreground">AI instantly identifies healthy plant tissue patterns</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-nature)] transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={diseasedLeaf} 
                alt="Diseased crop leaf" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-destructive">Diseased Leaf</h3>
                <p className="text-muted-foreground">Rapid detection of disease symptoms and severity</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-nature)] transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={aiInterface} 
                alt="AI analysis interface" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--nature-primary))]">AI Analysis</h3>
                <p className="text-muted-foreground">Detailed heatmap showing affected areas</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-nature)] transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-[hsl(var(--nature-light))] to-[hsl(var(--fresh-green))]`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--nature-primary))]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[hsl(var(--earth-dark))] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;