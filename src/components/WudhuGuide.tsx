import { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Check } from 'lucide-react';
import { Button } from './ui/button';

interface WudhuGuideProps {
  onBack: () => void;
}

const wudhuSteps = [
  {
    step: 1,
    title: 'Make Intention (Niyyah)',
    arabic: ' بِسمِ اللّه',
    transliteration: 'Bismillah',
    meaning: 'In the name of Allah',
    description: 'Begin by making a sincere intention in your heart to perform wudhu for prayer.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="100" rx="60" ry="80" fill="#6B8E7F" opacity="0.2"/>
        <path d="M120 70 Q150 60 180 70" stroke="#6B8E7F" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="130" cy="85" r="4" fill="#6B8E7F"/>
        <circle cx="170" cy="85" r="4" fill="#6B8E7F"/>
        <path d="M110 110 L110 130 Q110 140 120 145 L180 145 Q190 140 190 130 L190 110" 
              stroke="#C9B8A3" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Wash Hands Three Times',
    description: 'Wash both hands up to the wrists three times, making sure water reaches between fingers.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M150 80 L150 120 Q150 130 140 130 L120 130 Q110 130 110 140 L110 160" 
              stroke="#6B8E7F" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="110" cy="165" r="3" fill="#6B8E7F"/>
        <path d="M130 165 Q140 160 145 165" stroke="#8BA89B" strokeWidth="2" opacity="0.6"/>
        <path d="M125 175 Q135 170 140 175" stroke="#8BA89B" strokeWidth="2" opacity="0.6"/>
        <ellipse cx="150" cy="70" rx="25" ry="15" fill="#8BA89B" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Rinse Mouth Three Times',
    description: 'Take water in your right hand and rinse your mouth thoroughly three times.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="90" r="45" fill="#E8D9C5" opacity="0.4"/>
        <path d="M130 85 Q150 95 170 85" stroke="#6B8E7F" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="135" cy="75" r="4" fill="#6B8E7F"/>
        <circle cx="165" cy="75" r="4" fill="#6B8E7F"/>
        <ellipse cx="150" cy="100" rx="12" ry="8" fill="#8BA89B" opacity="0.5"/>
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Rinse Nose Three Times',
    description: 'Sniff water into your nostrils three times and blow it out gently.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="90" r="45" fill="#E8D9C5" opacity="0.4"/>
        <circle cx="135" cy="75" r="4" fill="#6B8E7F"/>
        <circle cx="165" cy="75" r="4" fill="#6B8E7F"/>
        <ellipse cx="145" cy="95" rx="3" ry="6" fill="#6B8E7F" opacity="0.6"/>
        <ellipse cx="155" cy="95" rx="3" ry="6" fill="#6B8E7F" opacity="0.6"/>
        <path d="M140 105 Q145 108 150 105 Q155 108 160 105" stroke="#C9B8A3" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    step: 5,
    title: 'Wash Face Three Times',
    description: 'Wash your entire face from forehead to chin and from ear to ear, three times.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="90" rx="50" ry="60" fill="#6B8E7F" opacity="0.2"/>
        <circle cx="135" cy="80" r="5" fill="#6B8E7F" opacity="0.6"/>
        <circle cx="165" cy="80" r="5" fill="#6B8E7F" opacity="0.6"/>
        <path d="M140 110 Q150 115 160 110" stroke="#C9B8A3" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M110 60 Q150 50 190 60" stroke="#6B8E7F" strokeWidth="2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: 6,
    title: 'Wash Arms Three Times',
    description: 'Wash your right arm from fingertips to elbow three times, then repeat with the left arm.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 100 L180 100" stroke="#6B8E7F" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
        <path d="M180 100 L200 80" stroke="#6B8E7F" strokeWidth="6" strokeLinecap="round" opacity="0.4"/>
        <circle cx="205" cy="75" r="8" fill="#C9B8A3" opacity="0.5"/>
        <ellipse cx="140" cy="100" rx="40" ry="15" fill="#8BA89B" opacity="0.2"/>
      </svg>
    ),
  },
  {
    step: 7,
    title: 'Wipe Head Once',
    description: 'Wet your hands and wipe over your head from front to back, once.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="80" rx="45" ry="35" fill="#6B8E7F" opacity="0.3"/>
        <path d="M105 80 Q150 60 195 80" stroke="#C9B8A3" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M120 90 L180 90" stroke="#8BA89B" strokeWidth="2" opacity="0.5"/>
        <circle cx="150" cy="120" r="30" fill="#E8D9C5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: 8,
    title: 'Wash Ears Three Times',
    description: 'Wash your ears three times.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="130" cy="130" rx="25" ry="35" fill="#6B8E7F" opacity="0.3"/>
        <ellipse cx="130" cy="165" rx="30" ry="15" fill="#C9B8A3" opacity="0.4"/>
        <path d="M105 165 L155 165" stroke="#6B8E7F" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="120" cy="100" rx="15" ry="20" fill="#8BA89B" opacity="0.2"/>
      </svg>
    ),
  },
  {
    step: 9,
    title: 'Wash Feet Three Times',
    description: 'Wash your right foot up to the ankle three times, then the left foot three times.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="130" cy="130" rx="25" ry="35" fill="#6B8E7F" opacity="0.3"/>
        <ellipse cx="130" cy="165" rx="30" ry="15" fill="#C9B8A3" opacity="0.4"/>
        <path d="M105 165 L155 165" stroke="#6B8E7F" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="120" cy="100" rx="15" ry="20" fill="#8BA89B" opacity="0.2"/>
      </svg>
    ),
  },
  {
    step: 10,
    title: 'Recite the Shahadah',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan abduhu wa rasuluh',
    meaning: 'I bear witness that there is no deity worthy of worship except Allah alone, without partner, and I bear witness that Muhammad is His servant and messenger',
    description: 'After completing wudhu, recite the following testimony of faith.',
    illustration: (
      <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="60" fill="#6B8E7F" opacity="0.1"/>
        <circle cx="150" cy="100" r="40" fill="#6B8E7F" opacity="0.15"/>
        <circle cx="150" cy="100" r="20" fill="#6B8E7F" opacity="0.25"/>
        <path d="M150 80 L150 60" stroke="#C9B8A3" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="150" cy="55" r="5" fill="#C9B8A3"/>
        <path d="M120 110 Q150 130 180 110" stroke="#8BA89B" strokeWidth="2" opacity="0.6"/>
      </svg>
    ),
  },
];

export function WudhuGuide({ onBack }: WudhuGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step = wudhuSteps[currentStep];
  const isLastStep = currentStep === wudhuSteps.length - 1;
  const isStepCompleted = completedSteps.includes(currentStep);

  const handleNext = () => {
    if (!isStepCompleted) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < wudhuSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // On last step, return to dashboard
      onBack();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleMarkComplete = () => {
    if (!isStepCompleted) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="text-center">
          <p className="text-muted-foreground text-[14px]">Wudhu Guide</p>
          <p className="text-foreground text-[15px]">
            Step {step.step} of {wudhuSteps.length}
          </p>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-muted/30">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / wudhuSteps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Illustration */}
        <div className="bg-gradient-to-b from-muted/30 to-transparent py-8 px-6">
          {step.illustration}
        </div>

        {/* Step Details */}
        <div className="px-6 py-6 space-y-6">
          {/* Step Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[14px] mb-3">
              Step {step.step}
            </div>
            <h2 className="text-[26px] text-foreground mb-2">{step.title}</h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Arabic & Transliteration - Only for steps 1 and 10 */}
          {(step.step === 1 || step.step === 10) && step.arabic && step.transliteration && step.meaning && (
            <>
              <div className="bg-secondary/20 rounded-3xl p-6 space-y-4">
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Arabic</p>
                  <p className="text-[24px] text-foreground" dir="rtl">
                    {step.arabic}
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Pronunciation</p>
                  <p className="text-[18px] text-foreground italic">
                    {step.transliteration}
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Meaning</p>
                  <p className="text-[16px] text-foreground leading-relaxed">
                    {step.meaning}
                  </p>
                </div>
              </div>

              {/* Audio Button */}
              <button className="w-full h-14 rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center gap-3 hover:bg-accent/30 transition-colors">
                <Volume2 className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground text-[16px]">Listen to Pronunciation</span>
              </button>
            </>
          )}

          {/* Mark Complete Button */}
          {!isStepCompleted && (
            <button
              onClick={handleMarkComplete}
              className="w-full h-14 rounded-3xl border-2 border-primary/30 text-primary flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
            >
              <Check className="w-5 h-5" />
              <span className="text-[16px]">Mark as Understood</span>
            </button>
          )}

          {isStepCompleted && (
            <div className="w-full h-14 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-primary text-[16px]">Completed</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-6 max-w-md mx-auto">
        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="flex-1 h-14 rounded-3xl disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 h-14 rounded-3xl bg-primary hover:bg-primary/90"
          >
            {isLastStep ? 'Finish' : 'Next Step'}
            {!isLastStep && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}