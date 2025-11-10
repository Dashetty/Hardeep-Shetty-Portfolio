import { useScroll, useTransform, motion } from "framer-motion";
import { RefObject, useState, useEffect } from "react";

/**
 * LandingSequence Component
 * 
 * Displays a full-screen "Hello" message with controlled scroll behavior:
 * - Uses sticky positioning to maintain visual position during scroll
 * - Requires manual scroll to trigger animation
 * - Blocks initial scroll until animation ready
 * - Provides tall spacer (300vh) for smooth scroll animation
 * - Debounced scroll handling to prevent jumps
 * 
 * Scroll Behavior:
 * 1. Initial state: Scroll locked, large static "Hello"
 * 2. On user scroll: Enable smooth scrolling
 * 3. During scroll: Text scales/fades via sticky container
 * 4. After animation: Normal scroll behavior resumes
 * 
 * Customization:
 * - --landing-font-size: Text size (default: clamp(8rem, 25vw, 20rem))
 * - --landing-color: Text color (default: foreground)
 * - --landing-bg: Background color (default: background)
 */
type LandingSequenceProps = {
  spacerRef?: RefObject<HTMLDivElement | null>;
};

export const LandingSequence = ({ spacerRef }: LandingSequenceProps) => {
  // Track scroll state
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle initial scroll lock
  useEffect(() => {
    // Lock scroll initially
    document.body.classList.add('scroll-lock');

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        // User has started scrolling
        setHasScrolled(true);
        // Enable scrolling
        document.body.classList.remove('scroll-lock');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('scroll-lock');
    };
  }, [hasScrolled]);

  // Track scroll progress with adjusted offsets for smoother animation
  const { scrollYProgress } = useScroll({
    target: spacerRef || undefined,
    offset: ["start end", "end start"], // Starts earlier, ends at top
  });

  // Transform scroll progress into scale values
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Three-point scale for smoother transition
    [1.5, 1, 0.3]
  );

  // Smoother opacity transition
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 0.95, 0.8, 0]
  );

  // Enhanced vertical movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150] // Increased movement range
  );

  return (
    <>
      {/* Tall spacer for scroll animation */}
      <div className="h-[300vh] relative">
        {/* Sticky container that maintains position during scroll */}
        <div 
          className="sticky top-0 inset-x-0 h-screen flex items-center justify-center pointer-events-none"
          style={{
            "--landing-font-size": "clamp(8rem, 25vw, 20rem)",
            "--landing-color": "var(--foreground)",
          } as React.CSSProperties}
        >
          <motion.div
            className="landing-hello text-center"
            style={{
              // Only apply scale animation after manual scroll
              scale: hasScrolled ? scale : 1.5,
              opacity,
              y,
              fontSize: "var(--landing-font-size)",
              color: "var(--landing-color)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              // Ensure smooth text rendering
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              // Prevent text selection during animation
              userSelect: "none",
            }}
          >
            Hello
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LandingSequence;

