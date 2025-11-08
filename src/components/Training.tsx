import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import trainingHandsOn from "@/assets/training-hands-on.jpg";
import trainingClassroom from "@/assets/training-classroom.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Training = () => {
  const trainingImages = [
    {
      src: trainingHandsOn,
      alt: "Corporate and academic hands-on training with embedded systems and IoT devices"
    },
    {
      src: trainingClassroom,
      alt: "Academic classroom training sessions for students"
    },
    {
      src: trainingWorkshop,
      alt: "Students learning embedded systems programming in workshop"
    }
  ];

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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Comprehensive hands-on training programs designed to upskill your team in embedded systems, IoT, and AI technologies
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {trainingImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Training Description */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Empower your team with our Corporate Training Programs in Embedded Mobility and Embedded Automotive Systems. 
            Gain hands-on expertise in Device Driver Development using advanced ARM Cortex processors, Real-Time Task Scheduling 
            with FreeRTOS, Communication Protocol Design, and AI Model Development with Hardware Deployment.
          </p>
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
