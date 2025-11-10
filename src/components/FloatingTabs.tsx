import type { FC } from "react";
import type { Key } from "@react-types/shared";
import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons";

const sections = [
  { key: "intro", title: "Intro" },
  { key: "projects", title: "Projects" },
  { key: "work", title: "Work" },
  { key: "thoughts", title: "Thoughts" },
  { key: "connect", title: "Connect" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export const FloatingTabs: FC = () => {
  const [selected, setSelected] = useState<Key | null | undefined>(undefined);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <div className="pointer-events-auto rounded-2xl border border-border bg-card/90 p-2 shadow-lg backdrop-blur flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          aria-label="Toggle theme"
          onClick={() => document.dispatchEvent(new Event("toggle-theme"))}
          className="px-3 py-2 rounded-xl bg-transparent text-foreground/80 hover:text-foreground transition-colors focus:outline-none active:outline-none"
        >
          <span className="hidden dark:inline-flex">
            <HugeiconsIcon icon={Sun01Icon} size={18} />
          </span>
          <span className="inline-flex dark:hidden">
            <HugeiconsIcon icon={Moon01Icon} size={18} />
          </span>
        </button>

        {/* Tabs */}
        <Tabs
          aria-label="Sections"
          variant="light"
          color="default"
          disableAnimation
          classNames={{
            base: "outline-none focus:outline-none focus-visible:outline-none",
            tabList:
              "gap-2 bg-transparent outline-none focus:outline-none focus-visible:outline-none",
            cursor: "hidden",
            tab: `
              text-sm md:text-base font-raleway font-semibold
              text-muted-foreground rounded-xl border border-transparent
              transition-all duration-200
              data-[hover=true]:text-foreground/90
              data-[hover=true]:bg-[color-mix(in_oklab,var(--foreground) 8%,transparent)]
              data-[selected=true]:text-foreground
              data-[selected=true]:bg-[color-mix(in_oklab,var(--foreground) 12%,transparent)]
              focus:outline-none active:outline-none
              data-[focus=true]:outline-none
              data-[pressed=true]:outline-none
              ring-0 outline-0
            `,
            tabContent:
              "px-4 py-2 outline-none focus:outline-none focus-visible:outline-none",
          }}
          selectedKey={selected}
          onSelectionChange={(key: Key) => {
            setSelected(key);
            scrollToId(String(key));
          }}
        >
          {sections.map((s) => (
            <Tab key={s.key} title={s.title} />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FloatingTabs;
