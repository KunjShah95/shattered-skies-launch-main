import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Mail, ArrowRight } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-40">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                  About
                </span>
                <h1 className="font-black leading-tight">
                  Hi, I'm<br />
                  <span className="gradient-text">Aarav</span>
                </h1>
              </div>

              <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                <p>
                  I've always been obsessed with the spaces between what we know and what we imagine. Growing up, I devoured every sci-fi and fantasy book I could find, always wondering: what if reality isn't what we think it is?
                </p>
                <p>
                  <em>Shattered Skies</em> is my answer to that question. Years of exploring concept of fractured realities, consciousness, and the nature of truth—all distilled into one story.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Mail, href: "mailto:aarav@example.com", label: "Email" },
                ].map((social, i) => (
                  <a key={i} href={social.href} className="flex items-center gap-3 hover:opacity-70 transition">
                    <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center">
                      <social.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="aspect-square max-w-lg">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl" />
                <img
                  src={authorPhoto}
                  alt="Aarav Sen"
                  className="relative w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-foreground/5">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-20">
            The<br />
            <span className="gradient-text">Story</span>
            <br />
            behind the story
          </h2>

          <div className="max-w-3xl space-y-12">
            {[
              { year: "2022", title: "The Spark", desc: "A dream about falling stars. A question about reality. The seed of an idea." },
              { year: "2023", title: "Writing", desc: "Six months of obsessive writing. Building worlds. Creating characters I wanted to live in books with." },
              { year: "Early 2024", title: "Refining", desc: "Beta readers. Revisions. Feedback that made the story better. Sharper. Clearer." },
              { year: "2024", title: "Launch", desc: "Ready to share this world with readers. Ready to see where the story takes them." },
            ].map((item, i) => (
              <div key={i} className="flex gap-12 items-start">
                <div className="flex-shrink-0 w-24">
                  <div className="text-xl font-black text-secondary">{item.year}</div>
                </div>
                <div className="flex-1 pb-12 border-b border-foreground/10">
                  <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                  <p className="text-lg text-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { num: "5K+", label: "Happy Readers" },
              { num: "4.9", label: "Rating" },
              { num: "12+", label: "Awards" },
              { num: "50+", label: "Countries" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-black text-primary mb-2">{stat.num}</div>
                <div className="text-sm uppercase tracking-wider text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-28 bg-foreground/5">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-20">
            What's<br />
            <span className="gradient-text">Next</span>
          </h2>

          <div className="space-y-8 max-w-3xl">
            {[
              {
                title: "Broken Realms",
                status: "Coming Soon",
                desc: "Book 2 in the universe. More worlds. More mysteries. More answers (and even more questions).",
              },
              {
                title: "Tales from the Edge",
                status: "In Progress",
                desc: "Short stories exploring the edges. Companion narratives. Deeper dives into the fractured world.",
              },
            ].map((work, i) => (
              <Card key={i} className="p-8 border-2 border-foreground/10 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black">{work.title}</h3>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded">
                    {work.status}
                  </span>
                </div>
                <p className="text-lg text-foreground/60">{work.desc}</p>
              </Card>
            ))}
          </div>

          <Button asChild size="lg" className="mt-12 btn-primary">
            <Link to="/newsletter">
              Subscribe for Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-12">
            Let's<br />
            <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-xl text-foreground/60 mb-12">
            Have a question? Want to say hello? I'd love to hear from you.
          </p>

          <Card className="p-10 border-2 border-foreground/10 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-foreground/10"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-foreground/10"
                />
              </div>
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background border-foreground/10"
              />
              <Button type="submit" size="lg" className="btn-primary">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
