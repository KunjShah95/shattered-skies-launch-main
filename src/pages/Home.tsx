import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Check } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import bookCover from "@/assets/book-cover.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Parallel Layout */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - text */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                  New Release
                </span>
                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                  Shattered<br />
                  <span className="gradient-text">Skies</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-foreground/70 max-w-lg leading-snug">
                  A story that questions everything you think you know about reality.
                </p>
              </div>

              <p className="text-base md:text-lg text-foreground/60 max-w-md leading-relaxed">
                5,000+ readers. 4.9★ rating. 12+ awards. This isn't hype. It's what happens when a real story finds its audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/buy">
                    Get Your Copy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Learn About It</Link>
                </Button>
              </div>
            </div>

            {/* Right side - book image with improved alignment */}
            <div className="relative flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                {/* Decorative element */}
                <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform scale-110" />
                <div className="aspect-[3/4] w-full max-w-sm lg:max-w-md relative">
                  <img
                    src={bookCover}
                    alt="Shattered Skies Book Cover"
                    className="relative w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Simple Bold Design */}
      <section className="py-16 bg-foreground text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "5K+", label: "Readers" },
              { number: "4.9", label: "Rating" },
              { number: "12+", label: "Awards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-28">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-20 max-w-2xl">
            What makes<br />
            <span className="gradient-text">Shattered Skies</span>
            <br />
            different
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "Immersive World",
                desc: "Not just a book. A complete universe with its own rules, history, and mysteries that unfold across chapters.",
              },
              {
                title: "Real Characters",
                desc: "People you care about. Decide you'd read a thousand more pages about them. Question their choices like they're real.",
              },
              {
                title: "Thought-Provoking",
                desc: "Explores questions about reality, consciousness, and what we choose to believe. Stays with you long after the final page.",
              },
              {
                title: "Beautifully Written",
                desc: "Every sentence matters. Prose that's both poetic and direct. No unnecessary fluff. Just pure storytelling.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="text-lg text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Bold Layout */}
      <section className="py-28 bg-foreground/5">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-20">
            Readers<br />
            <span className="gradient-text">love it</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "I couldn't put it down. The world-building is absolutely stunning. This is the book I've been waiting for.",
              "A perfect blend of fantasy and sci-fi. Characters feel real. Highly recommended for anyone who loves deep stories.",
              "This is the kind of story that stays with you long after. Absolutely captivating from start to finish.",
            ].map((quote, i) => (
              <Card key={i} className="p-8 bg-white border-2 border-foreground/10 rounded-xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed">"{quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-28">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-12">
                Get instant<br />
                <span className="gradient-text">access</span>
              </h2>

              <div className="space-y-4">
                {[
                  "Digital book in PDF, EPUB, MOBI",
                  "Instant download after purchase",
                  "Read on any device, anytime",
                  "Lifetime ownership and updates",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-lg text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Card */}
            <Card className="p-12 bg-primary text-white rounded-2xl shadow-2xl">
              <div className="space-y-8 text-center">
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Digital Edition</p>
                  <div className="text-6xl font-black mb-2">₹299</div>
                  <p className="text-sm opacity-80">One-time payment. Forever yours.</p>
                </div>

                <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-bold py-3 rounded">
                  <Link to="/buy">Buy the Book</Link>
                </Button>

                <p className="text-sm opacity-70">
                  30-day money-back guarantee. No questions asked.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-primary text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">
            Don't miss<br />
            this story
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            Thousands of readers have already started their journey. Will you be next?
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3">
            <Link to="/buy">
              Start Reading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
          <div>
            <h2 className="text-4xl font-black mb-4">
              Stay in the<br />
              <span className="gradient-text">loop</span>
            </h2>
            <p className="text-lg text-foreground/60">
              Get exclusive chapters and author updates
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
