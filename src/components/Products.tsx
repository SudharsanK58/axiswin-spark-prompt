import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import productIoT from "@/assets/product-iot-device.jpg";
import productDevBoard from "@/assets/product-dev-board.jpg";
import productEdgeAI from "@/assets/product-edge-ai.jpg";

const products = [
  {
    image: productIoT,
    title: "IoT Embedded System",
    description: "Advanced wireless IoT device with integrated sensors, microcontroller, and real-time connectivity for smart applications."
  },
  {
    image: productDevBoard,
    title: "ARM Development Board",
    description: "Professional embedded development platform with ARM processor, perfect for prototyping and production-ready solutions."
  },
  {
    image: productEdgeAI,
    title: "Edge AI Computing Unit",
    description: "Powerful edge computing device enabling AI processing at the source for faster, intelligent decision-making."
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default Products;
