import { motion } from "framer-motion";
import { Target, Handshake, GraduationCap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "6+", label: "Courses Offered" },
  { value: "1+", label: "Year in Business" },
];

const values = [
  { icon: Target, title: "Innovation First", desc: "We stay ahead of the curve, leveraging cutting-edge technologies to deliver solutions that are future-proof and impactful.", color: "text-brand-green" },
  { icon: Handshake, title: "Client-Centric Approach", desc: "Every project starts with understanding your goals. We build partnerships, not just products — your success is our benchmark.", color: "text-brand-blue" },
  { icon: GraduationCap, title: "Empowering Talent", desc: "Through our training programs, we nurture the next generation of tech leaders with practical skills and real-world exposure.", color: "text-brand-red" },
];

const About = () => {
  return (
    <div>
      <HeroSection
        title="About SpydX"
        subtitle="We are SpydX — a bold blend of tech, vision, and purpose. Crafting solutions that matter, from startups to enterprises."
        highlight="SpydX"
      />

      {/* What We Do */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              What We Do at Spyd<span className="text-brand-x">X</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              At SpydX, we specialize in building intelligent systems, digital platforms, and scalable architectures that empower businesses to thrive in a connected world.
            </p>
            <p className="text-muted-foreground text-lg">
              Whether it's web development, AI integration, or complete digital transformations — our team pushes boundaries, bringing clarity and impact to every project we touch.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-1 border border-border shadow-card">
            <img
              src="https://thespydx.com/img/about/spydx-team.png"
              alt="SpydX Team"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-card/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-card rounded-xl p-8 border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Our Mission & Values</h2>
          <p className="text-muted-foreground text-lg">What drives us every day at SpydX</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/20 transition-all"
            >
              <v.icon className={`h-10 w-10 ${v.color} mb-4`} />
              <h3 className="text-xl font-bold font-display mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
