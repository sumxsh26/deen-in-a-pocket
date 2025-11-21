import { useState } from "react";
import {
  ChevronRight,
  HandHeart,
  Book,
  Sparkles,
  MoonStar,
} from "lucide-react";
import { Button } from "./ui/button";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: MoonStar,
    title: "Learn Solat with Confidence",
    description:
      "A complete guide to help you learn prayer step by step, at your own pace",
    illustration: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    ),
  },
  {
    icon: HandHeart,
    title: "Start Your Journey",
    description:
      "Begin with simple lessons on wudhu and prayer. Take it one step at a time",
    illustration: (
      <svg
        className="w-48 h-48"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 60 Q80 80 80 100 L80 130 Q80 140 90 140 L110 140 Q120 140 120 130 L120 100 Q120 80 100 60Z"
          fill="#6B8E7F"
          opacity="0.4"
        />
        <circle
          cx="70"
          cy="100"
          r="8"
          fill="#C9B8A3"
          opacity="0.6"
        />
        <circle
          cx="130"
          cy="100"
          r="8"
          fill="#C9B8A3"
          opacity="0.6"
        />
        <path
          d="M90 120 Q100 125 110 120"
          stroke="#6B8E7F"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    icon: Book,
    title: "Learn at Your Own Pace",
    description:
      "Access audio guides, translations, and simple visuals whenever you need them",
    illustration: (
      <svg
        className="w-48 h-48"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="50"
          y="60"
          width="100"
          height="80"
          rx="8"
          fill="#E8D9C5"
          opacity="0.5"
        />
        <rect
          x="55"
          y="65"
          width="40"
          height="70"
          rx="4"
          fill="#6B8E7F"
          opacity="0.3"
        />
        <rect
          x="105"
          y="65"
          width="40"
          height="70"
          rx="4"
          fill="#C9B8A3"
          opacity="0.4"
        />
        <line
          x1="60"
          y1="75"
          x2="85"
          y2="75"
          stroke="#6B8E7F"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="60"
          y1="85"
          x2="85"
          y2="85"
          stroke="#6B8E7F"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="110"
          y1="75"
          x2="135"
          y2="75"
          stroke="#C9B8A3"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="110"
          y1="85"
          x2="135"
          y2="85"
          stroke="#C9B8A3"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    ),
  },
];

export function OnboardingScreen({
  onComplete,
}: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F3EE] to-white p-6">
      {/* Skip button */}
      {currentSlide < slides.length - 1 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handleSkip}
            className="text-muted-foreground px-4 py-2 rounded-full hover:bg-muted transition-colors"
          >
            Skip
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-sm mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Illustration */}
        <div className="flex items-center justify-center">
          {slide.illustration}
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-[28px] leading-[1.3] text-foreground px-4">
            {slide.title}
          </h1>
          <p className="text-[17px] text-muted-foreground leading-relaxed px-6">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/20"
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleNext}
          className="w-full h-14 rounded-3xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
        >
          {currentSlide === slides.length - 1
            ? "Begin Learning"
            : "Continue"}
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}