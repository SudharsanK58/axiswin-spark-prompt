import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    companyName: "",
    address: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.contactNo || !formData.email || !formData.requirements) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      contactNo: "",
      email: "",
      companyName: "",
      address: "",
      requirements: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Send Us an <span className="bg-gradient-hero bg-clip-text text-transparent">Enquiry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Have a project in mind? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-primary/20 shadow-elegant animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl">Enquiry Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNo">Contact Number *</Label>
                  <Input
                    id="contactNo"
                    name="contactNo"
                    type="tel"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements *</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Please describe your requirements in detail..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="w-full md:w-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Enquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;
