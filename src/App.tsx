import { useEffect, useRef, useState } from "react";
import LogoMark from "./assets/favicon.svg";
import FloatingTabs from "./components/FloatingTabs";
import Footer from "./components/Footer";
import ProjectsGrid from "./components/ProjectsGrid";
import Experience from "./components/Experience";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.dispatchEvent(
      new CustomEvent("theme-changed", {
        detail: { isDark },
      }),
    );
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handler = () => setIsDark((v) => !v);
    document.addEventListener("toggle-theme", handler as EventListener);
    return () => {
      observer.disconnect();
      document.removeEventListener("toggle-theme", handler as EventListener);
    };
  }, []);

 

  return (
    <div className="min-h-screen bg-background text-foreground relative dotted-bg">
      <nav className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "projects", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src={LogoMark}
                  alt="Hardeep Shetty logomark"
                  className="h-14 w-14 shrink-0"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight">
                  Hardeep
                  <br />
                  <span className="text-muted-foreground">Dilip Shetty</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-xl">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Aspiring developer who strives to be creative and curious in 
                  <span className="text-foreground"> design</span> and 
                  <span className="text-foreground"> technology</span>
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    For work
                  </div>
                  <div>Manipal, India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Node.js",
                    "TailwindCSS",
                    "Python",
                    "Supabase",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects */}
        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-thin">Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2025
              </div>
            </div>

            <ProjectsGrid />
          </div>
        </section>

        {/* Work (Experience component) */}
        <Experience
          // register with intersection observer
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
        />

        {/* Thoughts */}
        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-thin">Recent Thoughts</h2>
            <div className="text-muted-foreground">Coming soon.</div>
          </div>
        </section>

      </main>

      <Footer
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
      />

      <FloatingTabs />

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;
