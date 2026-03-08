import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop, UserCheck, Compass, FlaskConical, Bot, Code, BarChart3, Clock, MonitorSmartphone, FolderKanban, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import trainingHero from "@/assets/training-hero.jpg";

const offerings = [
  { icon: Laptop, title: "Projects + Training", desc: "Learn concepts and apply them instantly. Build real AI, ML, Data, and Web applications." },
  { icon: UserCheck, title: "Internship Program", desc: "Work on real SpydX projects, handle client tasks, and gain certified experience." },
  { icon: Compass, title: "Career Guidance", desc: "Resume building, LinkedIn optimisation, portfolio prep, and interview training." },
];

const courses = [
  { icon: FlaskConical, title: "Data Science", desc: "ML, Statistics, Pandas, NumPy, end-to-end projects." },
  { icon: Bot, title: "AI & Machine Learning", desc: "TensorFlow, Keras, NLP, CV, model deployment." },
  { icon: Code, title: "Web Development", desc: "HTML, CSS, JavaScript, Bootstrap, Django basics." },
  { icon: Code, title: "Python Development", desc: "Core Python → OOP → APIs → Mini projects." },
  { icon: UserCheck, title: "Internship Program", desc: "Hands-on experience with SpydX client and internal work." },
  { icon: BarChart3, title: "Data Analytics", desc: "Excel → SQL → Python → Power BI." },
];

const durationInfo = [
  { icon: Clock, title: "2–3 Months", desc: "Training + major project + internship exposure." },
  { icon: MonitorSmartphone, title: "Online + Offline", desc: "Flexible learning with personal mentoring." },
  { icon: FolderKanban, title: "Project-Based", desc: "Every module includes hands-on implementation." },
];

const Training = () => {
  return (
    <div>
      <HeroSection
        title="Training & Internship Programs"
        subtitle="Learn. Build. Grow — with hands-on mentoring, real projects, and industry-ready skills."
      />

      {/* Hero Image */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Real Skills. Real Projects. Real Growth.
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Our training programs are designed to bridge the gap between classroom learning and industry demands. You don't just study — you build.
            </p>
            <p className="text-muted-foreground text-lg">
              From day one, you work on actual projects, collaborate with our team, and graduate with a portfolio that speaks louder than any certificate.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-1 border border-border shadow-glow">
            <img
              src={trainingHero}
              alt="SpydX Training Program"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* What We Offer */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">What We Offer</h2>
          <p className="text-muted-foreground text-lg">Everything you need to grow in tech</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/20 transition-all hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <o.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{o.title}</h3>
              <p className="text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Courses */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Courses We Offer</h2>
          <p className="text-muted-foreground">Practical, modern, and industry-ready</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all hover:shadow-glow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold font-display">{c.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Duration */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Duration & Mode</h2>
          <p className="text-muted-foreground">Flexible learning that fits your schedule</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {durationInfo.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-card rounded-xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <d.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold font-display mb-2">{d.title}</h4>
              <p className="text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join SpydX's training program and transform your career with hands-on experience and industry mentoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              <a href="https://thespydx.com/brochure/spydx_brochure.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Request Brochure
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-accent text-primary-foreground font-semibold shadow-cyan">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScwNEAvX6G3x6VIm6j61JcxUQaaPRKHZp89EMJ2koGlo_hl3w/viewform" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
