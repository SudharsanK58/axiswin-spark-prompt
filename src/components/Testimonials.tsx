import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Head of Department",
    company: "Sri Eshwar College of Engineering",
    testimonial: "Axiswin Technologies provided exceptional training in embedded systems. Their expertise and hands-on approach significantly enhanced our students' practical knowledge."
  },
  {
    name: "Priya Sharma",
    position: "Training Coordinator",
    company: "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    testimonial: "The IoT solutions workshop was outstanding. Our faculty and students gained invaluable insights into real-world applications of embedded technology."
  },
  {
    name: "Arun Menon",
    position: "Engineering Manager",
    company: "Bosch Global Software Technologies",
    testimonial: "Their custom embedded solutions perfectly met our requirements. The team's technical proficiency and commitment to quality are impressive."
  },
  {
    name: "Meera Patel",
    position: "Product Lead",
    company: "Vitesco Technologies",
    testimonial: "Axiswin delivered an innovative edge AI solution that exceeded our expectations. Their expertise in embedded systems is world-class."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-hero bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 text-justify italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
