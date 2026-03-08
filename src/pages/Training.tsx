import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop, UserCheck, Compass, FlaskConical, Bot, Code, BarChart3, Clock, MonitorSmartphone, FolderKanban, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

const offerings = [
  { icon: Laptop, title: "Projects + Training", desc: "Learn concepts and apply them instantly. Build real AI, ML, Data, and Web applications.", color: "text-brand-green" },
  { icon: UserCheck, title: "Internship Program", desc: "Work on real SpydX projects, handle client tasks, and gain certified experience.", color: "text-brand-blue" },
  { icon: Compass, title: "Career Guidance", desc: "Resume building, LinkedIn optimisation, portfolio prep, and interview training.", color: "text-brand-red" },
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

      {/* What We Offer */}
      <SectionWrapper>
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
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/20 transition-all"
            >
              <o.icon className={`h-10 w-10 ${o.color} mb-4`} />
              <h3 className="text-xl font-bold font-display mb-3">{o.title}</h3>
              <p className="text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Courses */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Courses We Offer</h2>
          <p className="text-muted-foreground">Practical, modern, and industry-ready</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all text-center"
            >
              <c.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold font-display mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Duration */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Duration & Mode</h2>
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
              <d.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold font-display mb-2">{d.title}</h4>
              <p className="text-muted-foreground">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 text-center">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
            <a href="https://thespydx.com/brochure/spydx_brochure.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Request Brochure
            </a>
          </Button>
          <Button asChild size="lg" className="bg-brand-green text-primary-foreground font-semibold">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScwNEAvX6G3x6VIm6j61JcxUQaaPRKHZp89EMJ2koGlo_hl3w/viewform" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Training;
