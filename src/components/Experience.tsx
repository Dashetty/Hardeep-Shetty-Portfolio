import { forwardRef } from "react";

type Item = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
};

const items: Item[] = [
  {
    company: "DataTurtles",
    role: "Software Engineer-Intern",
    period: "July 2025 - August 2025",
    highlights: [
      "Contribute to a backend system that automates marketing email workflows using SendGrid’s API, database tracking, and API scheduling.",
    ],
    tech: [
      "Node.js",
      "Express",
      "SendGrid",
      "PostgreSQL",
      "Supabase",
      "Postman",
    ],
  },
];

const Experience = forwardRef<HTMLElement, Record<string, unknown>>((_, ref) => {
  return (
    <section id="work" ref={ref} className="min-h-[60vh] mx-auto max-w-6xl px-4 py-16 sm:py-24 opacity-0">
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-thin">Work</h2>
        <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50">
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-light text-muted-foreground">2025</div>
          </div>
          <div className="lg:col-span-6 space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-medium">{items[0].role}</h3>
              <div className="text-muted-foreground">{items[0].company}</div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-lg">{items[0].highlights[0]}</p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
            {items[0].tech.map((tech) => (
              <span key={tech} className="px-2 py-1 text-sm text-muted-foreground rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
