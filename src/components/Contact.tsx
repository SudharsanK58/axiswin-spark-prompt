import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Building2,
    title: "Company",
    details: ["Axiswin Technologies", "A division of KS Consultancy", "GSTIN: 33ETCPK3823A1ZA"]
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["3/275 B1, Varuthaiyangarpalayam", "Kondiyampalayam Road", "Coimbatore – 641110"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91-7845492448"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ksconsultancycbe@gmail.com"]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into innovative solutions? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-elegant transition-smooth border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-hero mx-auto flex items-center justify-center mb-4 shadow-glow">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="max-w-2xl mx-auto border-primary/20 shadow-elegant">
            <CardContent className="pt-6">
              <p className="text-lg mb-6 text-muted-foreground">
                Whether you need embedded systems development, IoT solutions, or specialized training, 
                we're here to help bring your vision to life.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = 'mailto:ksconsultancycbe@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Us an Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
