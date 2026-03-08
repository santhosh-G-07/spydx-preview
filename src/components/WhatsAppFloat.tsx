import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/918428702189"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </a>
);

export default WhatsAppFloat;
