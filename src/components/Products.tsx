import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import productIoT from "@/assets/product-iot-device.jpg";
import productDevBoard from "@/assets/product-dev-board.jpg";
import productEdgeAI from "@/assets/product-edge-ai.jpg";

const products = [
  {
    image: productIoT,
    title: "Embedded Systems Design",
    description: "Custom embedded solutions using STM32, ARM Cortex, and ESP32 platforms for diverse industrial and consumer applications."
  },
  {
    image: productDevBoard,
    title: "Industrial IoT & Smart Monitoring",
    description: "Advanced Industrial IoT systems for real-time monitoring, predictive maintenance, and smart factory automation."
  },
  {
    image: productEdgeAI,
    title: "Wireless Torque Measurement & Control",
    description: "Precision wireless torque measurement solutions with real-time control for industrial machinery and automotive testing."
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge embedded systems and IoT solutions designed for real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-smooth border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Product Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-glow transition-smooth bg-gradient-to-r from-card to-card/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-smooth">
                    ECU Design for Automotive Applications
                  </CardTitle>
                  <CardDescription className="text-base">
                    Specialized Electronic Control Unit (ECU) design and development for automotive systems, including engine management, transmission control, and advanced driver assistance systems (ADAS). Built with automotive-grade components and compliance with industry standards.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
