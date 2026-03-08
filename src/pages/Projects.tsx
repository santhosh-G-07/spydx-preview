import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  { title: "SMCC Bhavani Hospital", tag: "Responsive Web App", desc: "An end-to-end appointment booking and management system tailored for clinics and hospitals with real-time updates.", img: project1 },
  { title: "Medico", tag: "Healthcare Assistant", desc: "Smart health advisory platform using NLP and ML for symptom analysis and pharmacy connectivity.", img: project2 },
  { title: "Eczlipze", tag: "IoT Home Automation", desc: "Voice and sensor-controlled IoT automation for lights, fans, security systems, and more.", img: project3 },
  { title: "Vymoi", tag: "Custom AI Model", desc: "Proprietary AI model for analytics and decision-making, adaptable across enterprise use cases.", img: project4 },
  { title: "Smart Resume Analyzer", tag: "AI Resume Screening", desc: "AI-powered resume screening using skill parsing, keyword matching, and ML ranking.", img: project5 },
  { title: "SpydX Stack", tag: "Internal Dev Toolkit", desc: "Developer-first toolkit with reusable components, deployment scripts, and testing frameworks.", img: project6 },
];

const Projects = () => {
  return (
    <div>
      <HeroSection
        title="Our Projects"
        subtitle="From AI breakthroughs to real-time automation — here's what we've been building at SpydX."
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold font-display mt-3 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Projects;
