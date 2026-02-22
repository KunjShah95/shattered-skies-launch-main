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
    },
    {
      icon: Eye,
      title: "Behind-the-Scenes",
      description: "Author commentary, world-building notes, and creative process insights.",
    },
    {
      icon: Gift,
      title: "Launch Discounts",
      description: "Special pricing on new releases and early bird access to pre-orders.",
    },
    {
      icon: Users,
      title: "Shape the Story",
      description: "Vote on character decisions and influence future plot directions.",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-28">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <span className="text-sm font-bold uppercase tracking-widest text-secondary">
              subscriber exclusive
            </span>
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Be<br />
              <span className="gradient-text">First</span>
            </h1>
            <p className="text-2xl text-foreground/60 max-w-3xl mx-auto">
              Join the reader circle. Get exclusive chapters, behind-the-scenes notes, and early access to everything before anyone else.
            </p>
            <div className="pt-8">
              <NewsletterForm showName={true} />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-28 bg-foreground/5">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-20">
            What's<br />
            <span className="gradient-text">Inside</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-foreground/10 rounded-xl hover:border-primary transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Updates */}
      <section className="py-28">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-6">
            Recent<br />
            <span className="gradient-text">Updates</span>
          </h2>
          <p className="text-xl text-foreground/60 mb-20 max-w-2xl">
            Here's what subscribers have already received. This is the kind of content that waits.
          </p>

          <div className="space-y-6 max-w-3xl">
            {pastUpdates.map((update, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-foreground/10 rounded-xl hover:border-primary transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-6">
                    <h3 className="text-xl font-black flex-1">{update.title}</h3>
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary flex-shrink-0">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">{update.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-foreground/5">
        <div className="container max-w-4xl mx-auto px-6">
          <Card className="p-16 text-center space-y-10 border-0 rounded-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-secondary inline-block">
              No spam. Ever.
            </span>
            <h2 className="text-5xl font-black">
              This is for readers<br />
              who like to be <span className="gradient-text">first</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Thousands of readers are already inside. Join today and get your first exclusive chapter within minutes.
            </p>
            <div className="pt-8 max-w-md mx-auto">
              <NewsletterForm buttonText="Subscribe Now" />
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 mb-6 text-lg">Or pick up the book right now:</p>
          <Button asChild size="lg" className="btn-primary">
            <Link to="/buy">Get Shattered Skies</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
