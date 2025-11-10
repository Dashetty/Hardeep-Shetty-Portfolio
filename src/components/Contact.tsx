import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement, Record<string, unknown>>((_, ref) => {
  return (
    <section id="connect" ref={ref} className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-thin">Let's Connect</h2>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always open to collaborate.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:dashushetty2003@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground"
              >
                <span className="text-base sm:text-lg">
                  Hardeep@mail
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "GitHub", handle: "Hardeep@github", url: "https://github.com/Dashetty" },
              { name: "LinkedIn", handle: "your-handle", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50"
              >
                <div className="space-y-2">
                  <div className="text-foreground group-hover:text-muted-foreground">
                    {social.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* theme toggle removed; FloatingTabs handles theme switching */}
    </section>
  );
});

export default Contact;
