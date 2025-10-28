import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import trainingClassroom from "@/assets/training-classroom.jpg";
import trainingHandsOn from "@/assets/training-hands-on.jpg";
import trainingAcademic from "@/assets/training-academic.jpg";

const Training = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate & <span className="bg-gradient-hero bg-clip-text text-transparent">Academic Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive hands-on training programs designed to upskill your team in embedded systems, IoT, and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Image */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-elegant animate-fade-in">
            <img 
              src={trainingClassroom} 
              alt="Professional corporate training session for embedded systems"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Professional Training Excellence</h3>
                <p className="text-lg text-foreground/90">Industry-focused curriculum with real-world applications</p>
              </div>
            </div>
          </div>

          {/* Secondary Images */}
          <Card className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="aspect-video overflow-hidden bg-muted">
              <img 
                src={trainingHandsOn} 
                alt="Hands-on embedded systems training workshop"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-smooth">
                Hands-On Workshops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Practical training with real embedded systems hardware, microcontrollers, and IoT devices for comprehensive skill development.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video overflow-hidden bg-muted">
              <img 
                src={trainingAcademic} 
                alt="Academic IoT and embedded systems training"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-smooth">
                Academic Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Specialized courses for universities and institutions covering IoT programming, embedded C, and edge computing fundamentals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Training Features */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Professionals Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Corporate Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Academic Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToContact}
              variant="hero" 
              size="lg"
              className="group"
            >
              Schedule Training Program
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
