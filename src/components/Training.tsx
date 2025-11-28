import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import training4 from "@/assets/training-4.jpg";
import training5 from "@/assets/training-5.jpg";
import Autoplay from "embla-carousel-autoplay";
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
      src: training1,
      alt: "Professional classroom training session with instructor and students"
    },
    {
      src: training2,
      alt: "Hands-on embedded systems training with ARM Cortex processors and IoT devices"
    },
    {
      src: training3,
      alt: "Students attending practical training in computer lab with hands-on embedded systems"
    },
    {
      src: training4,
      alt: "Corporate training session with live demonstration and projector presentation"
    },
    {
      src: training5,
      alt: "Students working on embedded systems projects with ARM processors and development boards"
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
            plugins={[
              Autoplay({
                delay: 3000,
              })
            ]}
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

        {/* Training Overview */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-4 text-center">Training Delivered to Industry Leaders & Academic Institutions</h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify mb-4">
            We provide advanced technical training in Embedded Systems, Automotive Electronics, and Mobility Engineering.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            All programs are curated and delivered by our Chief Technology Officer, combining technical depth with real-world project experience.
          </p>
        </div>

        {/* Corporate & Academic Training - Side by Side */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Training Section */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-4">Corporate Training Delivered</h3>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                Our CTO-led programs have been delivered to engineering teams at:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Bosch Global Software Technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">UNO Minda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Vitesco Technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Accenture</span>
                </li>
              </ul>
              
              <p className="text-lg text-muted-foreground text-justify">
                Our corporate training equips engineering teams to build solutions for next-generation mobility.
              </p>
            </div>

            {/* Academic Training Section */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-4">Academic Training Delivered</h3>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                We collaborate with leading institutions to deliver skill-oriented engineering training:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Sri Eshwar College of Engineering, Coimbatore</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Sri Shakthi Institute of Engineering and Technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Coimbatore Institute of Engineering and Technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Mahendra Engineering College</span>
                </li>
              </ul>
              
              <p className="text-lg text-muted-foreground text-justify">
                These programs build industry readiness, enabling students to understand real product challenges and engineering workflows.
              </p>
            </div>
          </div>
        </div>

        {/* CTO Leadership Section */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-hero/10 border border-primary/20 rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-4 text-center">Led by Our Chief Technology Officer</h3>
            <p className="text-lg text-muted-foreground mb-4 text-justify">
              All major training engagements are delivered by our CTO, ensuring:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Industry-grade technical depth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Practical insights from mobility & embedded domains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Hands-on engagement with real hardware & simulation tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Outcome-driven learning and skill development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
    </section>
  );
};

export default Training;
