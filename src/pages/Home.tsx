import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cog, Cloud, ShoppingCart, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import FloatingTechStack from "@/components/FloatingTechStack";
import heroBg from "@/assets/hero-bg.jpg";
import whyChooseImg from "@/assets/why-choose.jpg";

const testimonials = [
  {
    quote: "SpydX built our hospital management system from scratch. Clean UI, responsive design, and delivered before deadline. Truly professional team.",
    name: "Dr. Dinesh Kumar",
    role: "SMCC Bhavani Hospital",
  },
  {
    quote: "Got my resume and portfolio done by SpydX. Within a week, I started getting interview calls. The design was clean and ATS-friendly.",
    name: "Priya M.",
    role: "Software Engineer",
  },
  {
    quote: "SpydX designed and developed our bakery website beautifully. They captured our brand perfectly — warm, modern, and easy to navigate.",
    name: "Aditicakes",
    role: "aditicakes.onrender.com",
  },
];

const showcaseItems = [
  { icon: Cog, title: "Intelligent Automation", desc: "We build smart systems that automate tasks, reduce costs, and supercharge productivity for modern businesses." },
  { icon: Cloud, title: "Cloud-Driven Solutions", desc: "From scalable cloud apps to robust APIs — we architect platforms built to grow with your business." },
  { icon: ShoppingCart, title: "Digital Commerce", desc: "Empowering online businesses with cutting-edge eCommerce tools, integrated payments, and real-time insights." },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            🚀 Next-Gen Tech Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
          >
            Spyd
            <motion.span
              className="text-brand-x inline-block"
              animate={{
                y: [0, -12, 0, 8, 0],
                rotate: [0, 3, -2, 1, 0],
                scale: [1, 1.08, 1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              X
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Pioneering next-gen tech solutions with a fusion of AI, automation,
            and seamless design for the future of business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-accent text-primary-foreground font-semibold hover:opacity-90 shadow-cyan">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Showcase */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">What We Build</h2>
          <p className="text-muted-foreground text-lg">Solutions that drive results</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose */}
      <SectionWrapper className="bg-card/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Why Choose Spyd<span className="text-brand-x">X</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We blend innovation with reliability. From startup prototypes to
              enterprise-grade platforms, SpydX is your trusted partner for
              smart, scalable, and secure tech solutions.
            </p>
            <ul className="space-y-4 mb-8">
              {["End-to-end development & deployment", "AI & ML integration expertise", "Fast delivery with clean, maintainable code", "Dedicated support & post-launch care"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-gradient-accent text-primary-foreground font-semibold shadow-cyan">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-1 border border-border shadow-glow">
            <img
              src={whyChooseImg}
              alt="Why Choose SpydX"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            At SpydX, we don't just deliver code. We craft experiences, engineer
            performance, and empower digital transformation.
          </p>
          <Button asChild size="lg" className="bg-gradient-accent text-primary-foreground font-semibold shadow-cyan">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack - Floating Icons */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Our Tech Stack</h2>
          <p className="text-muted-foreground text-lg">We build with the latest and greatest tools</p>
        </div>
        <FloatingTechStack />
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Real feedback from real people</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border relative hover:border-primary/20 transition-all"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">"{t.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold font-display">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Stay In The Loop With Spyd<span className="text-brand-x">X</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get updates, insights, and insider news directly from our team.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); (e.target as HTMLFormElement).reset(); }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button type="submit" className="bg-gradient-accent text-primary-foreground font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            We'll never share your email with anyone else.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
