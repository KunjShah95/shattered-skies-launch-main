import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Mail, BookOpen, PenTool, Globe, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import authorPhoto from "@/assets/author-photo.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const achievements = [
    { metric: "10K+", label: "Books Sold" },
    { metric: "4.9/5", label: "Average Rating" },
    { metric: "12+", label: "Awards Won" },
    { metric: "50+", label: "Countries" },
  ];

  const timeline = [
    {
      phase: "The Spark",
      date: "Late 2022",
      description: "A dream about falling stars sparked the initial concept that would become Shattered Skies.",
    },
    {
      phase: "Writing Journey",
      date: "2023",
      description: "Six months of intense writing, world-building, and character development brought the story to life.",
    },
    {
      phase: "Refining the Story",
      date: "Early 2024",
      description: "Multiple revision rounds with beta readers shaped the final version of the novel.",
    },
    {
      phase: "Launch",
      date: "2024",
      description: "Ready to share this story with the world and begin a new chapter.",
    },
  ];

  const futureWorks = [
    {
      title: "Broken Realms",
      status: "Coming Soon",
      description: "Book 2 in the Shattered Skies universe",
      icon: BookOpen,
    },
    {
      title: "Tales from the Edge",
      status: "In Progress",
      description: "A collection of short stories from the edges of reality",
      icon: PenTool,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Award-Winning Author</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Meet <span className="gradient-text">Aarav Sen</span>
              </h1>
              <p className="text-xl text-primary font-semibold">
                Crafting stories that blur the line between reality and imagination
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I've always been fascinated by the spaces between what we know and what we imagine.
                  Growing up, I devoured science fiction and fantasy novels, always wondering what
                  lay beyond the edges of those fictional worlds.
                </p>
                <p className="text-lg leading-relaxed">
                  <em>Shattered Skies</em> emerged from years of questioning our perception of reality.
                  What if the world we see is just one layer of a much deeper truth? This novel is
                  my attempt to explore that question through characters who feel as real to me as
                  old friends.
                </p>
                <p className="text-lg leading-relaxed">
                  My mission as an author is simple: to create stories that make you think, feel,
                  and question everything—then stay up way too late because you need to know what
                  happens next.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
                <a href="mailto:aarav@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <img
                  src={authorPhoto}
                  alt="Aarav Sen"
                  className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-4 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Worldwide</p>
                      <p className="text-xs text-muted-foreground">50+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 border-y border-border/50 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text">{item.metric}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Journey */}
      <section className="section-elegant">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From the first spark of an idea to the finished book
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <Card className="flex-1 p-6 card-elegant">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge-elegant">{item.date}</span>
                        <h3 className="text-xl font-semibold">{item.phase}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Works */}
      <section className="section-elegant bg-card/50">
        <div className="container-elegant">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                What's <span className="gradient-text">Next</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Upcoming projects and future stories
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {futureWorks.map((work, index) => (
                <Card key={index} className="p-8 card-elegant hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <work.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        <Sparkles className="h-3 w-3" />
                        <span>{work.status}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-2">{work.title}</h3>
                      <p className="text-muted-foreground">{work.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/newsletter">
                  Join the Newsletter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-elegant">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                I'd love to hear from you
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map((social, index) => (
                <Button key={index} variant="outline" size="lg" asChild>
                  <a href="#" className="gap-2">
                    <social.icon className="h-5 w-5" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>

            <Card className="p-8 bg-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background"
                />
                <Button type="submit" size="lg" className="w-full btn-primary">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
