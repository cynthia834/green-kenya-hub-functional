import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      id: 1,
      name: "Premium Organic Compost",
      description: "Rich, nutrient-dense compost perfect for gardens and plants",
      price: 2500,
      image: "🌱",
      category: "Compost",
      inStock: true,
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: "Compost Starter Kit",
      description: "Everything you need to start composting at home",
      price: 4500,
      image: "🪴",
      category: "Kit",
      inStock: true,
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Worm Composting Bin",
      description: "Complete vermicomposting system for apartments",
      price: 8500,
      image: "🪣",
      category: "Equipment",
      inStock: true,
      rating: 4.7,
      reviews: 67,
    },
    {
      id: 4,
      name: "Liquid Fertilizer",
      description: "Concentrated liquid compost for quick plant nutrition",
      price: 1500,
      image: "🧪",
      category: "Fertilizer",
      inStock: false,
      rating: 4.6,
      reviews: 234,
    },
    {
      id: 5,
      name: "Garden Soil Blend",
      description: "Premium soil mix with 30% organic compost",
      price: 3500,
      image: "🌍",
      category: "Soil",
      inStock: true,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 6,
      name: "Compost Thermometer",
      description: "Monitor your compost pile temperature accurately",
      price: 2000,
      image: "🌡️",
      category: "Tools",
      inStock: true,
      rating: 4.5,
      reviews: 45,
    },
  ];

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} (KSH${product.price}) has been added to your cart.`,
    });
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    toast({
      title: "Proceeding to Checkout",
      description: `Total: KSH${total.toFixed(2)} - Redirecting to payment...`,
    });

    setTimeout(() => {
      toast({
        title: "Order Confirmed!",
        description:
          "Your order has been placed successfully. You'll receive a confirmation email shortly.",
      });
      setCart([]);
    }, 2000);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <section id="marketplace" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CompostConnect Marketplace
            </h2>
            <p className="text-lg text-muted-foreground">
              Shop for premium compost products and gardening supplies
            </p>
          </div>

          {cart.length > 0 && (
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-2">
                Cart ({getCartItemCount()} items)
              </div>
              <div className="text-lg font-semibold mb-3">
                Total: KSH{getCartTotal().toFixed(2)}
              </div>
              <Button onClick={proceedToCheckout} size="sm">
                Checkout Now
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{product.image}</div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="text-sm text-muted-foreground">
                    ⭐ {product.rating} ({product.reviews})
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-primary">
                    KSH{product.price}
                  </div>
                  <Badge
                    variant={product.inStock ? "default" : "destructive"}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>

                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  onClick={() => addToCart(product)}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-12 bg-secondary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Shopping Cart</h3>
            <div className="space-y-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-medium">
                    KSH{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">
                Total: KSH{getCartTotal().toFixed(2)}
              </span>
              <Button onClick={proceedToCheckout}>Proceed to Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;
