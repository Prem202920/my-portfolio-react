import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML / CSS", desc: "Building responsive and modern web layouts", category: "frontend" },
  { name: "JavaScript", desc: "Creating dynamic and interactive web experiences", category: "frontend" },
  { name: "React", desc: "Developing scalable single-page applications", category: "frontend" },
  { name: "Tailwind CSS", desc: "Designing with utility-first, responsive styling", category: "frontend" },
  
  // Backend
  { name: "Node.js", desc: "Server-side development and scalable APIs", category: "backend" },
  { name: "Express", desc: "Building RESTful APIs and middleware logic", category: "backend" },
  { name: "MongoDB", desc: "Storing and managing data with NoSQL databases", category: "backend" },
  { name: "Python", desc: "Writing efficient backend logic, scripts, and automation using Python", category: "backend" },
  { name: "MySQL", desc: "Managing structured data and building relational databases for web applications", category: "backend" },

  // Tools
  { name: "Git / GitHub", desc: "Version control and collaboration workflows", category: "tools" },
  { name: "VS Code", desc: "Lightweight and extensible development environment", category: "tools" },
  { name: "Vercel / Render", desc: "Deploying and hosting full-stack projects", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border border-purple-400",
                activeCategory === category
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-transparent text-purple-400 hover:bg-purple-500 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl shadow-md border border-purple-300/40 hover:border-purple-500 hover:shadow-purple-200 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-2 text-purple-500">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
