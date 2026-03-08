import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    x: cellW * col + cellW * 0.2 + Math.random() * cellW * 0.5,
    y: cellH * row + cellH * 0.15 + Math.random() * cellH * 0.5,
  };
};

const FloatingTechStack = () => {
  const [positions] = useState(() =>
    techItems.map((_, i) => generateRandomPosition(i, techItems.length))
  );

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-card/30 border border-border">
      {techItems.map((tech, i) => {
        const pos = positions[i];
        const duration = 4 + Math.random() * 4;
        const delay = Math.random() * 2;
        const floatY = 10 + Math.random() * 20;
        const floatX = 5 + Math.random() * 10;

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
            transition={{ duration: 0.5, delay: i * 0.06 }}
            animate={{
              y: [0, -floatY, 0, floatY * 0.5, 0],
              x: [0, floatX, 0, -floatX * 0.7, 0],
              rotate: [0, 3, -2, 1, 0],
            }}
            whileHover={{ scale: 1.3, zIndex: 50 }}
            //@ts-ignore
            transition={{
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              x: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
              scale: { duration: 0.2 },
            }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-glow transition-all duration-300">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 md:w-8 md:h-8"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTechStack;
