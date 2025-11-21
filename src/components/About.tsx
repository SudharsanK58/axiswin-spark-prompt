import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Expert team in embedded systems & IoT",
  "Cutting-edge AI & edge computing solutions",
  "Proven track record with corporate clients",
  "Comprehensive training programs",
  "End-to-end product development"
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Axiswin</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              Axiswin Technologies, a division of KS Consultancy, specializes in embedded product development, IoT solutions, and AI-powered edge computing. We transform innovative ideas into market-ready products.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-justify">
              With deep expertise in embedded systems and a passion for innovation, we partner with businesses and academic institutions to deliver solutions that drive digital transformation.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-glow">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Innovation-Driven</h4>
                    <p className="text-muted-foreground text-justify">
                      We stay ahead of technology trends, bringing the latest in IoT and AI to your projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Quality Focused</h4>
                    <p className="text-muted-foreground text-justify">
                      Every solution is built with rigorous testing and quality assurance standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">Client Success</h4>
                    <p className="text-muted-foreground text-justify">
                      Your success is our mission. We partner closely to ensure project objectives are exceeded.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
