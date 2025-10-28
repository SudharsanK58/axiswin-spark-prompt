import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Wifi, Brain, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Embedded Product Development",
    description: "End-to-end embedded systems design and development, from concept to production-ready solutions with cutting-edge microcontroller integration."
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Complete IoT ecosystem development including sensor networks, cloud connectivity, and real-time data analytics for smart, connected devices."
  },
  {
    icon: Brain,
    title: "AI & Edge Computing",
    description: "Intelligent edge computing solutions that bring AI processing power directly to your devices for faster, more efficient decision-making."
  },
  {
    icon: GraduationCap,
    title: "Corporate & Academic Training",
    description: "Professional training programs in embedded systems, IoT, and edge AI for corporate teams and academic institutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your innovation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
