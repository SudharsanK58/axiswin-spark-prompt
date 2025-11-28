import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Quote, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const initialTestimonials: Array<{
  name: string;
  position: string;
  company: string;
  testimonial: string;
}> = [];

const Testimonials = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    position: "",
    company: "",
    testimonial: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTestimonial.name || !newTestimonial.company || !newTestimonial.testimonial) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setTestimonials([...testimonials, newTestimonial]);
    
    toast({
      title: "Testimonial Added",
      description: "Thank you for sharing your experience with us!",
    });

    setNewTestimonial({
      name: "",
      position: "",
      company: "",
      testimonial: ""
    });
    setIsDialogOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

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

        {testimonials.length > 0 && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto mb-8"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border-primary/20 hover:shadow-elegant transition-smooth h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Add Your Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Share Your Experience</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    value={newTestimonial.position}
                    onChange={handleChange}
                    placeholder="Your position/title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Institution *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={newTestimonial.company}
                    onChange={handleChange}
                    placeholder="Your organization"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testimonial">Your Testimonial *</Label>
                  <Textarea
                    id="testimonial"
                    name="testimonial"
                    value={newTestimonial.testimonial}
                    onChange={handleChange}
                    placeholder="Share your experience with Axiswin Technologies..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Submit Testimonial
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
