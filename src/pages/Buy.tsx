import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, Zap, Mail, Download, Book, Star, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import bookCover from "@/assets/book-cover.jpg";

const Buy = () => {
  const [format, setFormat] = useState("ebook");
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const prices = {
    ebook: 299,
    paperback: 599,
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your order! Check your email for confirmation.");
    setOrderComplete(true);
  };

  const pricingFeatures = {
    ebook: [
      "PDF, EPUB, and MOBI formats",
      "Instant download after purchase",
      "Read on any device",
      "Lifetime access",
      "Free future updates",
      "Bonus chapters included",
    ],
    paperback: [
      "Physical book with premium cover",
      "384 pages of content",
      "High-quality paper",
      "Free shipping worldwide",
      "Signed copy option available",
      "Digital copy included",
    ],
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen py-20">
        <div className="container max-w-2xl">
          <Card className="p-12 text-center space-y-6 animate-fade-in bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold gradient-text">
              Thank You for Your Order!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your order has been confirmed and you will receive an email shortly.
            </p>
            <div className="bg-card rounded-xl p-6 space-y-3 border border-border/50">
              <p className="font-semibold text-foreground text-lg">Order Summary</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-muted-foreground">Book:</p>
                <p className="text-foreground font-medium">Shattered Skies</p>
                <p className="text-muted-foreground">Format:</p>
                <p className="text-foreground font-medium">
                  {format === "ebook" ? "eBook (Digital)" : "Paperback (Physical)"}
                </p>
                <p className="text-muted-foreground">Quantity:</p>
                <p className="text-foreground font-medium">{quantity}</p>
                <p className="text-muted-foreground">Total:</p>
                <p className="text-foreground font-bold text-lg">
                  ₹{(prices[format as keyof typeof prices] * quantity).toFixed(0)}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Confirmation sent to: <strong className="text-foreground">{formData.email}</strong>
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href="/">Return to Home</a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get Your <span className="gradient-text">Copy</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the format that works best for you and start reading today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img
                  src={bookCover}
                  alt="Shattered Skies Book Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </div>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-2">Shattered Skies</h2>
                <p className="text-muted-foreground mb-4">
                  A genre-defining journey through fractured realities
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 (500+ reviews)</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-card rounded-lg">
                    <p className="text-muted-foreground">Genre</p>
                    <p className="font-semibold">Fiction / Fantasy</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <p className="text-muted-foreground">Pages</p>
                    <p className="font-semibold">384</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <p className="text-muted-foreground">Language</p>
                    <p className="font-semibold">English</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <p className="text-muted-foreground">Published</p>
                    <p className="font-semibold">2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "Secure Payment" },
                { icon: Zap, label: "Instant Access" },
                { icon: Mail, label: "24/7 Support" },
              ].map((item, index) => (
                <Card key={index} className="p-4 text-center bg-card">
                  <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Choose Your Format</CardTitle>
                <CardDescription>Select the option that works best for you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePurchase} className="space-y-6">
                  <RadioGroup value={format} onValueChange={setFormat}>
                    <div className="space-y-4">
                      <div
                        className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                          format === "ebook"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <RadioGroupItem value="ebook" id="ebook" className="mt-1" />
                          <Label htmlFor="ebook" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-lg flex items-center gap-2">
                                  <Download className="h-5 w-5" />
                                  eBook (Digital)
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  PDF, EPUB, and MOBI formats
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold gradient-text">₹299</p>
                                <p className="text-xs text-muted-foreground">One-time payment</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {pricingFeatures.ebook.map((feature, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 text-xs bg-background px-2 py-1 rounded-full"
                                >
                                  <Check className="h-3 w-3 text-primary" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div
                        className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                          format === "paperback"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <RadioGroupItem value="paperback" id="paperback" className="mt-1" />
                          <Label htmlFor="paperback" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-lg flex items-center gap-2">
                                  <Book className="h-5 w-5" />
                                  Paperback (Physical)
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Ships within 5-7 business days
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold gradient-text">₹599</p>
                                <p className="text-xs text-muted-foreground">Free shipping</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {pricingFeatures.paperback.map((feature, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 text-xs bg-background px-2 py-1 rounded-full"
                                >
                                  <Check className="h-3 w-3 text-primary" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Your Information</h3>
                    <Input
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                    />
                    {format === "paperback" && (
                      <>
                        <Input
                          placeholder="Street Address"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="bg-background"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="City"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="bg-background"
                          />
                          <Input
                            placeholder="ZIP Code"
                            required
                            value={formData.zipCode}
                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="gift" />
                    <Label htmlFor="gift" className="text-sm text-muted-foreground cursor-pointer">
                      This is a gift (add gift wrapping at checkout)
                    </Label>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-3xl font-bold gradient-text">
                        ₹{(prices[format as keyof typeof prices] * quantity).toFixed(0)}
                      </span>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-primary text-lg"
                    >
                      Complete Purchase
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Secure checkout powered by Stripe</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
