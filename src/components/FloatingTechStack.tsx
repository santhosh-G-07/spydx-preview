import { motion } from "framer-motion";
import { useState } from "react";

const techItems = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
];

const generateRandomPosition = (index: number, total: number) => {
  const cols = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / cols);
  const col = index % cols;
  const cellW = 100 / cols;
  const cellH = 100 / Math.ceil(total / cols);
  return {
    x: cellW * col + cellW * 0.15 + Math.random() * cellW * 0.6,
    y: cellH * row + cellH * 0.1 + Math.random() * cellH * 0.6,
  };
};

const FloatingTechStack = () => {
  const [positions] = useState(() =>
    techItems.map((_, i) => generateRandomPosition(i, techItems.length))
  );

  return (
    <div className="relative w-full h-[420px] md:h-[500px] overflow-visible">
      {techItems.map((tech, i) => {
        const pos = positions[i];
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 3;
        const floatY = 20 + Math.random() * 40;
        const floatX = 10 + Math.random() * 20;

        return (
          <motion.div
            key={tech.name}
            className="absolute flex flex-col items-center gap-1.5 cursor-default group"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -floatY, 0, floatY * 0.6, 0],
              x: [0, floatX, 0, -floatX * 0.8, 0],
              rotate: [0, 5, -3, 2, 0],
            }}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            //@ts-ignore
            transition={{
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              x: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
              rotate: { duration: duration * 1.4, repeat: Infinity, ease: "easeInOut", delay },
              scale: { duration: 0.2 },
              opacity: { duration: 0.5, delay: i * 0.06 },
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_8px_hsl(var(--brand-accent)/0.3)] group-hover:drop-shadow-[0_0_20px_hsl(var(--brand-accent)/0.6)] transition-all duration-300"
              loading="lazy"
            />
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground/70 group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTechStack;
