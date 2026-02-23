import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import bookCover from "@/assets/book-cover.jpg";

const Buy = () => {
  const [format, setFormat] = useState("ebook");
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState<"select" | "checkout" | "success">("select");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const prices = {
    ebook: 299,
    paperback: 599,
  };

  const currentPrice = prices[format as keyof typeof prices] * quantity;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || (format === "paperback" && !formData.address)) {
      toast.error("Please fill in all required fields");
      return;
    }
    setStep("success");
    toast.success("Order placed successfully!");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Order<br />
            <span className="gradient-text">Confirmed</span>
          </h1>

          <p className="text-2xl text-foreground/60 mb-6">
            Thank you for your purchase.
          </p>

          <div className="bg-foreground/5 rounded-xl p-12 mb-12">
            <div className="text-lg text-foreground/60 mb-4">Order Number</div>
            <div className="text-3xl font-black font-mono mb-8">SS-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
            <p className="text-foreground/60 mb-6">
              A confirmation email has been sent to <strong>{formData.email}</strong>
            </p>
            <p className="text-foreground/60">
              {format === "ebook"
                ? "Check your email for the download link. You can read it immediately."
                : "Your order will be shipped within 3-5 business days. Track your package using the link in your confirmation email."}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-foreground/60 mb-8">
              Enjoy <em>Shattered Skies</em>. Share your thoughts when you're done—I'd love to hear from you.
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              size="lg"
              className="btn-primary"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            Get the book
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Own<br />
            <span className="gradient-text">Shattered Skies</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Choose your preferred format. Dive into the fractured worlds of Aarav's universe.
          </p>
        </div>

        {/* Format Selection */}
        {step === "select" && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Book Cover Preview */}
              <div className="flex justify-center">
                <div className="w-80 h-full">
                  <div className="aspect-[3/4] relative sticky top-20">
                    <div className="absolute -inset-4 bg-secondary/10 rounded-2xl" />
                    <img
                      src={bookCover}
                      alt="Shattered Skies Book Cover"
                      className="relative w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Format Selection and Checkout */}
              <div className="space-y-10">
                {/* Format Options */}
                <div>
                  <h2 className="text-2xl font-black mb-8">Choose Your Format</h2>

                  <RadioGroup value={format} onValueChange={setFormat} className="space-y-4">
                    {[
                      {
                        id: "ebook",
                        label: "E-Book",
                        price: 299,
                        desc: "Read on any device instantly.",
                        icon: "📱",
                      },
                      {
                        id: "paperback",
                        label: "Paperback",
                        price: 599,
                        desc: "Hold the story in your hands.",
                        icon: "📖",
                      },
                    ].map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-4 p-6 border-2 rounded-xl cursor-pointer transition-all ${
                          format === option.id
                            ? "border-primary bg-primary/5"
                            : "border-foreground/10 hover:border-foreground/20"
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={option.id} className="h-6 w-6" />
                        <div className="flex-1">
                          <div className="text-2xl mb-1">{option.icon}</div>
                          <div className="font-black text-lg">{option.label}</div>
                          <div className="text-sm text-foreground/60">{option.desc}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-primary">₹{option.price}</div>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-black mb-4">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 rounded-lg border-2 border-foreground/10"
                    >
                      −
                    </Button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="text-center text-2xl font-black w-16 bg-transparent"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-12 w-12 rounded-lg border-2 border-foreground/10"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Summary */}
                <Card className="p-8 bg-foreground/5 border-0 rounded-xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60">Subtotal</span>
                    <span className="font-bold">₹{currentPrice}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-foreground/20">
                    <span className="text-foreground/60">Shipping</span>
                    <span className="font-bold">{format === "ebook" ? "Free" : "Calculated at checkout"}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-black">Total</span>
                    <span className="text-3xl font-black text-primary">₹{currentPrice}</span>
                  </div>
                </Card>

                <Button
                  size="lg"
                  onClick={() => setStep("checkout")}
                  className="btn-primary w-full"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Proceed to Checkout
                  <ArrowRight className="ml-auto h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Form */}
        {step === "checkout" && (
          <div className="max-w-2xl mx-auto mb-20">
            <button
              onClick={() => setStep("select")}
              className="text-primary font-bold mb-8 flex items-center gap-2 hover:opacity-70"
            >
              ← Back to Format Selection
            </button>

            <h2 className="text-4xl font-black mb-12">
              Complete<br />
              <span className="gradient-text">Your Order</span>
            </h2>

            <Card className="p-10 border-2 border-foreground/10 rounded-xl">
              <form onSubmit={handleCheckout} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <h3 className="font-black text-xl mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-foreground/10 h-12 text-base"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-foreground/10 h-12 text-base"
                    />
                  </div>
                </div>

                {/* Shipping (for paperback) */}
                {format === "paperback" && (
                  <div>
                    <h3 className="font-black text-xl mb-6">Shipping Address</h3>
                    <Input
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      className="bg-background border-foreground/10 h-12 text-base"
                    />
                  </div>
                )}

                {/* Order Summary */}
                <div className="bg-foreground/5 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/60">
                      {quantity > 1 ? `${quantity}x ` : ""}
                      {format === "ebook" ? "E-Book" : "Paperback"}
                    </span>
                    <span className="font-bold">₹{currentPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-black border-t border-foreground/20 pt-4">
                    <span>Total</span>
                    <span className="text-primary text-2xl">₹{currentPrice}</span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="btn-primary w-full h-14 text-base">
                  <Check className="h-5 w-5 mr-2" />
                  Complete Order
                  <ArrowRight className="ml-auto h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        )}

        {/* FAQ Section */}
        <section className="mt-32 pt-20 border-t-2 border-foreground/10">
          <h2 className="text-3xl font-black mb-12">Questions?</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            {[
              {
                q: "What format should I choose?",
                a: "Choose E-Book for instant access across any device. Choose Paperback to hold the physical book and support the author directly.",
              },
              {
                q: "How quickly will I receive my order?",
                a: "E-Books are delivered instantly. Paperbacks are shipped within 3-5 business days to most locations.",
              },
              {
                q: "Can I gift the book?",
                a: "Yes! E-Books can be forwarded to any email. Paperbacks can be shipped to any address as a gift.",
              },
              {
                q: "What's your refund policy?",
                a: "30-day money-back guarantee on all purchases. No questions asked.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-black text-lg">{item.q}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Buy;
