import { Dithering } from "@paper-design/shaders-react";
import { forwardRef, useEffect, useMemo, useState } from "react";

const footerLinks = [
  { label: "Email", value: "dashushetty2003@gmail.com", href: "mailto:dashushetty2003@gmail.com" },
  { label: "GitHub", value: "@Dashetty", href: "https://github.com/Dashetty" },
  { label: "LinkedIn", value: "Hardeep Dilip Shetty", href: "https://www.linkedin.com/in/hardeep-shetty-aa5587396" },
];

export const Footer = forwardRef<HTMLElement>(function FooterComponent(_, ref) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof document === "undefined") return;

    const updateFromDom = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    updateFromDom();

    const handleThemeChanged = (event: Event) => {
      const custom = event as CustomEvent<{ isDark?: boolean }>;
      if (typeof custom.detail?.isDark === "boolean") {
        setIsDarkMode(custom.detail.isDark);
      } else {
        updateFromDom();
      }
    };

    document.addEventListener("theme-changed", handleThemeChanged);

    const observer = new MutationObserver(updateFromDom);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      document.removeEventListener("theme-changed", handleThemeChanged);
      observer.disconnect();
    };
  }, []);

  const colors = useMemo(
    () => ({
      back: isDarkMode ? "hsl(230, 40%, 8%)" : "#d9d9cd",
      front: isDarkMode ? "hsl(328, 92%, 68%)" : "#6da6f7",
    }),
    [isDarkMode],
  );

  return (
    <footer ref={ref} id="connect" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/90 shadow-2xl backdrop-blur">
          <div className="flex min-h-[420px] flex-col md:flex-row">
            <div className="relative z-10 flex w-full flex-col justify-between gap-10 p-8 sm:p-12 md:w-1/2">
              <header className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground/70">Connect</p>
                <div className="space-y-3">
                  <h2 className="text-4xl font-light leading-tight text-foreground sm:text-5xl">Hardeep Dilip Shetty</h2>
                  <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
                   Write to me for collaborations, product explorations, or a design jam.
                  </p>
                </div>
              </header>

              <div className="space-y-6">
                <dl className="space-y-4">
                  {footerLinks.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    return (
                      <div
                        key={item.label}
                        className="group flex flex-col gap-1 rounded-xl border border-transparent px-4 py-3 transition-colors hover:border-muted-foreground/40"
                      >
                        <dt className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                          {item.label}
                        </dt>
                        <dd className="text-lg font-medium text-foreground">
                          <a
                            href={item.href}
                            className="transition-colors group-hover:text-muted-foreground"
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <footer className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground/60">
                Manipal · Remote friendly
              </footer>
            </div>

            <div className="relative w-full flex-1 p-4 md:w-1/2">
              {isMounted && (
                <Dithering
                  style={{ height: "100%", width: "100%", display: "block" }}
                  colorBack={colors.back}
                  colorFront={colors.front}
                  shape="sphere"
                  type="4x4"
                  pxSize={3}
                  offsetX={0}
                  offsetY={0}
                  scale={0.83}
                  rotation={-8}
                  speed={0.12}
                  fit="cover"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(8,8,12,0.6) 0%, rgba(8,8,12,0.15) 40%, rgba(8,8,12,0) 75%)"
                    : "linear-gradient(135deg, rgba(109,166,247,0.28) 0%, rgba(109,166,247,0.12) 40%, rgba(109,166,247,0) 75%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hardeep Dilip Shetty. Crafted with intention.
        </div>
      </div>
    </footer>
  );
});

export default Footer;


