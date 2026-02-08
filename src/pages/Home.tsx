import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Star, Users, TrendingUp, Award, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import bookCover from "@/assets/book-cover.jpg";

const Home = () => {
  const stats = [
    { label: "Books Sold", value: "10K+", icon: TrendingUp },
    { label: "Happy Readers", value: "5K+", icon: Users },
    { label: "Average Rating", value: "4.9", icon: Star },
    { label: "Awards", value: "12+", icon: Award },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Immersive Storytelling",
      description: "Dive into a narrative that blurs the lines between fantasy and reality",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Rich World-Building",
      description: "Explore meticulously crafted worlds with deep history and lore",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Star,
      title: "Unforgettable Characters",
      description: "Follow complex characters on journeys of self-discovery",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const benefits = [
    "Instant digital download in PDF, EPUB, and MOBI",
    "Free bonus chapters and exclusive content",
    "Access to private reader community",
    "Regular author updates and sneak peeks",
    "Lifetime access to digital updates",
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Verified Reader",
      avatar: "SM",
      quote: "I couldn't put it down. The world-building is absolutely stunning. A masterpiece!",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Book Reviewer",
      avatar: "JC",
      quote: "A perfect blend of fantasy and sci-fi. The characters feel so real. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maya Patel",
      role: "Blogger",
      avatar: "MP",
      quote: "This is the kind of story that stays with you long after the last page. Absolutely captivating!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Award-Winning Author</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                Shattered <span className="gradient-text">Skies</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-xl">
                A genre-defining journey through fractured realities where nothing is as it seems.
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                When the sky breaks, the real story begins. Join thousands of readers who have
                been captivated by this unforgettable tale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="btn-primary text-lg">
                  <Link to="/buy">
                    Get Your Copy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-semibold border-2 border-background"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">5,000+</span>
                  <span className="text-muted-foreground"> happy readers</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <img
                  src={bookCover}
                  alt="Shattered Skies Book Cover"
                  className="relative rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-4 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-6 w-6 text-primary fill-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">4.9 Rating</p>
                      <p className="text-xs text-muted-foreground">500+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-elegant">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Why Readers Love <span className="gradient-text">Shattered Skies</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover what makes this book a must-read for anyone who loves immersive storytelling
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-elegant p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-elegant bg-card/50">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get instant access to everything you need to start reading today
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>Limited Time Offer</span>
                </div>
                <h3 className="text-3xl font-serif font-bold">Start Reading Today</h3>
                <div className="space-y-2">
                  <p className="text-5xl font-bold">₹299</p>
                  <p className="text-primary-foreground/70">or ₹599 for paperback</p>
                </div>
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  <Link to="/buy">Buy Now</Link>
                </Button>
                <p className="text-sm text-primary-foreground/70">
                  30-day money-back guarantee • Instant delivery
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-elegant">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what readers are saying about Shattered Skies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-elegant bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of readers who have discovered the magic of Shattered Skies.
              Start reading today and experience a story like no other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-10">
                <Link to="/buy">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold text-lg px-10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Stay in the <span className="gradient-text">Loop</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Subscribe to receive exclusive chapters, behind-the-scenes content, and early access to new releases.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
