import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Bot, FileText, ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

const tabs = [
  { id: "web", label: "Web Development", icon: Code },
  { id: "ml", label: "Machine Learning", icon: Bot },
  { id: "resume", label: "Resume Services", icon: FileText },
];

const webServices = [
  { title: "Portfolio Website", price: "Starts from ₹999", desc: "Perfect for students, freelancers, or anyone who wants an elegant personal brand online.", features: ["Responsive Single Page", "LinkedIn, Resume, Projects", "SEO Optimized", "Fast Delivery"], tier: "Basic Package", cta: "Get Started", highlight: false },
  { title: "Static Website", price: "Starts from ₹5999", desc: "For small businesses or professionals needing a crisp, clean online presence.", features: ["Up to 5 Pages", "Contact Form Integration", "Hosting Guidance", "Clean UI Design"], tier: "Essential Package", cta: "Book Now", highlight: true },
  { title: "Dynamic Website", price: "Starts from ₹9999", desc: "Feature-rich web apps with admin panels, databases, and dynamic content.", features: ["Login System + Admin Panel", "Database Integration", "Custom CMS Options", "Real-time Data & Forms"], tier: "Premium Package", cta: "Let's Build", highlight: false },
];

const mlServices = [
  { title: "Chatbot Integration", price: "Starts from ₹1999", desc: "Smart assistants trained on your data. Website, WhatsApp, or custom platform.", features: ["NLP-powered conversation", "FAQ or Data-driven Chat", "Website/WhatsApp Embed", "Custom UI/UX Support"], tier: "Starter AI Bot", cta: "Launch Bot", highlight: false },
  { title: "Detection Models", price: "Starts from ₹4999", desc: "Smart vision & audio models for object detection, emotion tracking, and more.", features: ["Object & Face Detection", "Gesture & Emotion Tracking", "OpenCV / YOLO / TensorFlow", "Live Camera Feed Processing"], tier: "Vision AI", cta: "Detect Now", highlight: true },
  { title: "Custom AI Models", price: "Starts from ₹7999", desc: "Predictive analytics, recommendation systems, fraud detection — full-stack ML.", features: ["Scikit-learn / TensorFlow / PyTorch", "Classification & Regression", "End-to-end ML Pipelines", "Cloud or Local Deployment"], tier: "Custom ML Project", cta: "Let's Train", highlight: false },
];

const resumeServices = [
  { title: "Fresher Resume", price: "Starts from ₹399", desc: "Kickstart your career with a resume that highlights your strengths and skills.", features: ["One-page clean design", "ATS-compatible layout", "Custom fonts & sections", "Editable format included"], tier: "For Fresh Graduates", cta: "Get Started", highlight: false },
  { title: "Professional Resume", price: "Starts from ₹599", desc: "Built for working professionals aiming to climb the ladder or switch careers.", features: ["2-page executive layout", "Skill-based & role-centric", "Optional cover letter", "Delivered in 48 hours"], tier: "For Experienced Pros", cta: "Upgrade Now", highlight: true },
  { title: "US Standard Resume", price: "Starts from ₹899", desc: "Crafted as per international formatting and hiring standards.", features: ["US/Canada format compliance", "LinkedIn profile optimization", "Section-wise keyword strategy", "PDF + Word + Canva delivery"], tier: "For International Roles", cta: "Make it Global", highlight: false },
];

const faqs = [
  { q: "Do you offer custom web development?", a: "Yep. From static portfolio sites to dynamic full-stack web apps, we build it all. Clean code, responsive UI, SEO-optimized — tailor-made for your brand." },
  { q: "How long does a resume take to deliver?", a: "Standard delivery is 24–48 hours. Urgent? Ping us — we've got express options. PDF, Word, and even Canva formats included." },
  { q: "Is your chatbot integration plug-and-play?", a: "Absolutely. We support site embedding, WhatsApp, and even Telegram bots — trained on your content, branded for your audience." },
  { q: "Can I get revisions on resumes?", a: "Yes! We offer up to 2 free revisions within 3 days of delivery." },
  { q: "What tech stacks do you use?", a: "React, Node.js, Flask, Firebase, Bootstrap, Tailwind — we pick the right stack for your need." },
  { q: "What makes SpydX different?", a: "We're not an agency. We're a movement. Young, skilled, and rooted in real tech — not just design fluff." },
];

const serviceMap: Record<string, typeof webServices> = {
  web: webServices,
  ml: mlServices,
  resume: resumeServices,
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-4 flex items-center justify-between text-left">
        <span className="font-medium font-display">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 text-muted-foreground">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");
  const services = serviceMap[activeTab];

  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="At SpydX, we craft digital solutions that speak your brand's voice. From building sleek websites to smart AI integrations and standout resumes."
      />

      {/* Tabs */}
      <SectionWrapper>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-accent text-primary-foreground shadow-cyan"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-card rounded-xl border overflow-hidden transition-all group ${
                  s.highlight
                    ? "border-primary/40 shadow-glow scale-[1.02]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {s.highlight && (
                  <div className="bg-gradient-accent text-primary-foreground text-center text-xs font-bold py-1.5 tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">{s.tier}</p>
                  <h3 className="text-xl font-bold font-display mb-2">{s.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4 font-display">{s.price}</p>
                  <p className="text-muted-foreground mb-6 text-sm">{s.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full font-semibold ${s.highlight ? "bg-gradient-accent text-primary-foreground shadow-cyan" : "bg-secondary text-foreground hover:bg-primary/10"}`}>
                    <Link to="/contact">{s.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Frequently Asked</h2>
          <p className="text-muted-foreground">Everything you need to know before working with us</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;
