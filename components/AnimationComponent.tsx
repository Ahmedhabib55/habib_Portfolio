"use client";
import { useState, useEffect, ReactNode } from "react";

interface AnimationComponentProps {
  children: ReactNode;
  animationClass?: string;
  delay?: number;
  duration?: string;
}

export default function AnimationComponent({
  children,
  animationClass = "animate-fadeInUp",
  delay = 0,
  duration = "0.6s",
}: AnimationComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust this threshold if needed
    );

    const element = document.getElementById("fade-in-up");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: duration,
      }}
      className={`${
        isVisible ? animationClass : "opacity-0"
      } transition-opacity`}
    >
      {children}
    </div>
  );
}
