import { useState, useEffect } from "react";

type Theme = "cyan" | "violet" | "green";

const themes: { id: Theme; label: string; color: string }[] = [
  { id: "cyan", label: "Cyan", color: "hsl(185 80% 50%)" },
  { id: "violet", label: "Violet", color: "hsl(270 80% 60%)" },
  { id: "green", label: "Green", color: "hsl(142 70% 45%)" },
];

const ThemeSwitcher = () => {
  const [active, setActive] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("spydx-theme") as Theme) || "cyan";
    }
    return "cyan";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
    localStorage.setItem("spydx-theme", active);
  }, [active]);

  return (
    <div className="flex items-center gap-1.5">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          aria-label={`Switch to ${t.label} theme`}
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
            active === t.id
              ? "border-foreground scale-125"
              : "border-transparent opacity-60 hover:opacity-100 hover:scale-110"
          }`}
          style={{ background: t.color }}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
