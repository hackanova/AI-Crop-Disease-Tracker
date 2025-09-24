import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Dr.Sanya Verma",
    role: "Agricultural Scientist",
    location: "Lucknow, Uttar Pradesh",
    quote: "AgriLens has revolutionized how we approach crop disease management. The accuracy is remarkable, and the early detection capabilities have saved countless harvests.",
    rating: 5,
    avatar: "👩‍🔬"
  }, {
    name: "Miguel Rodriguez",
    role: "Farm Owner",
    location: "Valencia, Spain",
    quote: "As a third-generation farmer, I've never seen technology that's this intuitive and effective. AgriLens helps me make informed decisions quickly.",
    rating: 5,
    avatar: "👨‍🌾"
  }, {
    name: "Dr. Priya Sharma",
    role: "Plant Pathologist",
    location: "Maharashtra, India",
    quote: "The geo-tagging feature is brilliant for tracking disease patterns across regions. It's become an essential tool in our research and field work.",
    rating: 5,
    avatar: "👩‍🎓"
  }, {
    name: "James Mitchell",
    role: "Agronomist",
    location: "Queensland, Australia",
    quote: "The speed and accuracy of disease detection is incredible. What used to take days of analysis now happens in seconds with AgriLens.",
    rating: 5,
    avatar: "👨‍💼"
  }, {
    name: "Lisa Thompson",
    role: "Organic Farm Manager",
    location: "Oregon, USA",
    quote: "AgriLens helps us maintain our organic certification by enabling early intervention without harsh chemicals. It's a game-changer for sustainable farming.",
    rating: 5,
    avatar: "👩‍🌾"
  }, {
    name: "Dr. Ahmed Hassan",
    role: "Agricultural Extension Officer",
    location: "Cairo, Egypt",
    quote: "Training farmers to use AgriLens has been incredibly effective. The visual interface makes complex disease identification accessible to everyone.",
    rating: 5,
    avatar: "👨‍🏫"
  }];
  return <section id="testimonials" className="py-20 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--nature-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--nature-primary))]">
            Trusted by Agricultural Professionals
          </h2>
          <p className="text-xl text-[hsl(var(--earth-dark))] max-w-3xl mx-auto">
            Join thousands of farmers, scientists, and agronomists who rely on AgriLens for accurate crop disease detection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-6 hover:shadow-[var(--shadow-nature)] transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-[hsl(var(--nature-light))]">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[hsl(var(--growth-green))] text-[hsl(var(--growth-green))]" />)}
                </div>
                
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[hsl(var(--nature-primary))] mb-2 opacity-50" />
                  <p className="text-[hsl(var(--earth-dark))] leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--nature-primary))]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[hsl(var(--earth-warm))]">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--nature-primary))] mb-2">90%+</div>
            <p className="text-[hsl(var(--earth-dark))]">Detection Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--nature-primary))] mb-2">5K+</div>
            <p className="text-[hsl(var(--earth-dark))]">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--nature-primary))] mb-2">50K+</div>
            <p className="text-[hsl(var(--earth-dark))]">Images Analyzed</p>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;