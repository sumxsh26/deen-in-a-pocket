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
    title: "Learn Solat with Confidence",
    description:
      "A complete guide to help you learn prayer step by step, at your own pace",
    illustration: <img src="/images/10.png"/>,
  },
  {
    title: "Start Your Journey",
    description:
      "Begin with simple lessons on wudhu and prayer. Take it one step at a time",
    illustration: <img src="/images/11.png"/>,
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Access audio guides, translations, and simple visuals whenever you need them",
    illustration: <img src="/images/12.png"/>,
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
  //const Icon = slide.icon;

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