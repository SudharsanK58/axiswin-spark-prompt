import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap } from "lucide-react";

const academicClients = [
  "Sri Eshwar College of Engineering, Coimbatore",
  "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
  "Coimbatore Institute for Engineering and Technology",
  "Mahendra Engineering College"
];

const corporateClients = [
  "Bosch Global Software Technologies",
  "UNO Minda",
  "Vitesco Technologies",
  "Accenture"
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Trusted by leading academic institutions and industry giants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20 shadow-elegant animate-fade-in">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Academic Institutions</h3>
              </div>
              <ul className="space-y-3">
                {academicClients.map((client, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="text-justify">{client}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-elegant animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Building2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Corporate Partners</h3>
              </div>
              <ul className="space-y-3">
                {corporateClients.map((client, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="text-justify">{client}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;
