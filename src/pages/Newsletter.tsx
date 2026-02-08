import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, Gift, Users, Calendar, FileText, Sparkles } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Exclusive Chapters",
      description: "Get sneak peeks and bonus chapters before they're released to the public.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Behind-the-Scenes",
      description: "Author commentary, world-building notes, and creative process insights.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Gift,
      title: "Launch Discounts",
      description: "Special pricing on new releases and early bird access to pre-orders.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Shape the Story",
      description: "Vote on character decisions and influence future plot directions.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const pastUpdates = [
    {
      title: "Worldbuilding Notes: Cities Above the Clouds",
      date: "March 2025",
      description: "An in-depth look at the floating cities and their unique architectures.",
    },
    {
      title: "Meet the Main Characters",
      date: "February 2025",
      description: "Character profiles, backstories, and the inspiration behind each protagonist.",
    },
    {
      title: "How the Ending Almost Changed",
      date: "January 2025",
      description: "A fascinating look at the original ending and why it was rewritten.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Join 5,000+ Readers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold animate-fade-in">
              Join the <span className="gradient-text">Reader Circle</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to get exclusive chapters, author notes, and launch bonuses.
              This is for readers who like to be early.
            </p>
            <div className="pt-4">
              <NewsletterForm showName={true} />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-elegant">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              What You'll <span className="gradient-text">Receive</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              As an insider, you'll get access to exclusive content and experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 card-elegant hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Updates */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Sample <span className="gradient-text">Updates</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Here's what subscribers have already received
              </p>
            </div>
            <div className="space-y-6">
              {pastUpdates.map((update, index) => (
                <Card
                  key={index}
                  className="p-6 card-elegant hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FileText className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <h3 className="text-xl font-bold hover:text-primary transition-colors">
                          {update.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                          <Calendar className="h-4 w-4" />
                          {update.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-elegant">
        <div className="container">
          <Card className="p-12 text-center space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-4xl font-serif font-bold">
              This is for readers who like to be <span className="gradient-text">early</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of readers already inside the circle. Get your first exclusive chapter
              within minutes of signing up.
            </p>
            <div className="pt-4 max-w-md mx-auto">
              <NewsletterForm buttonText="Join Now" />
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, ever. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>

      {/* Alternative */}
      <section className="py-12 bg-card">
        <div className="container">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Already have the book?</p>
            <Button asChild variant="outline" size="lg">
              <Link to="/buy">Explore More Books</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
