import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@thespydx.com" },
  { icon: Phone, label: "Phone", value: "+91 84287 02189" },
  { icon: MapPin, label: "Office", value: "Tamil Nadu, India" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/company/spydx", href: "https://www.linkedin.com/company/107144620" },
];

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Get In Touch"
        subtitle="Got a project, partnership idea, or want to work with us? Let's build something great together."
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card rounded-xl border border-border p-8"
          >
            <h3 className="text-2xl font-bold font-display mb-2">
              Connect With Spyd<span className="text-brand-x">X</span>
            </h3>
            <p className="text-muted-foreground mb-6">Fill in the form and we'll get back to you within 24 hours.</p>
            <form action="https://formspree.io/f/mgonveok" method="POST" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your idea or inquiry..."
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
              />
              <input type="hidden" name="_subject" value="New Contact from SpydX Website" />
              <Button type="submit" size="lg" className="w-full bg-gradient-accent text-primary-foreground font-semibold shadow-cyan">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <h4 className="text-xl font-bold font-display mb-6">Reach Us At</h4>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border">
              <iframe
                title="SpydX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d77.6!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
