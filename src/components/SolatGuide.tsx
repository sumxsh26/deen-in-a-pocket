import { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Check } from 'lucide-react';
import { Button } from './ui/button';

interface SolatGuideProps {
  onBack: () => void;
}

const solatSteps = [
  {
    step: 1,
    title: 'Takbiratul Ihram',
    subtitle: 'Opening Takbir',
    arabic: 'اللهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    meaning: 'Allah is the Greatest',
    description: 'Stand facing the Qiblah. Raise both hands to shoulder or ear level with palms facing forward, and say the takbir.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="50" r="25" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="80" width="30" height="60" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 85 L195 70" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <path d="M135 85 L105 70" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="105" cy="70" r="10" fill="#C9B8A3" opacity="0.5"/>
        <circle cx="195" cy="70" r="10" fill="#C9B8A3" opacity="0.5"/>
        <rect x="140" y="140" width="20" height="70" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <ellipse cx="150" cy="215" rx="20" ry="8" fill="#8BA89B" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Al-Fatihah',
    subtitle: 'Recite the Opening Chapter',
    arabic: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ',
    transliteration: 'Bismillahir Rahmanir Rahim',
    meaning: 'In the name of Allah, the Most Gracious, the Most Merciful',
    description: 'Place your right hand over your left on your chest. Recite Surah Al-Fatihah in a clear, moderate voice.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="50" r="25" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="80" width="30" height="60" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 100 L180 110 L165 120" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M135 100 L145 110" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="150" cy="105" rx="20" ry="15" fill="#E8D9C5" opacity="0.4"/>
        <rect x="140" y="140" width="20" height="70" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <ellipse cx="150" cy="215" rx="20" ry="8" fill="#8BA89B" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Ruku',
    subtitle: 'Bowing Position',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيْمِ',
    transliteration: 'Subhana Rabbiyal Adheem',
    meaning: 'Glory be to my Lord, the Most Great',
    description: 'Bow down with your back straight and parallel to the ground. Place hands on knees. Say the tasbih at least three times.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="80" r="20" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="100" width="30" height="50" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 110 L200 130" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <path d="M135 110 L100 130" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="100" cy="130" r="8" fill="#C9B8A3" opacity="0.5"/>
        <circle cx="200" cy="130" r="8" fill="#C9B8A3" opacity="0.5"/>
        <rect x="135" y="150" width="30" height="40" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <ellipse cx="120" cy="195" rx="15" ry="8" fill="#8BA89B" opacity="0.3"/>
        <ellipse cx="180" cy="195" rx="15" ry="8" fill="#8BA89B" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: 4,
    title: "I'tidal",
    subtitle: 'Standing After Ruku',
    arabic: 'سَمِعَ اللهُ لِمَنْ حَمِدَهُ',
    transliteration: "Sami'Allahu liman hamidah",
    meaning: 'Allah hears those who praise Him',
    description: 'Rise back to standing position with hands at sides. Recite the tasbih with focus and gratitude.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="50" r="25" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="80" width="30" height="60" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 100 L180 120" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <path d="M135 100 L120 120" stroke="#C9B8A3" strokeWidth="6" strokeLinecap="round"/>
        <rect x="140" y="140" width="20" height="70" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <ellipse cx="150" cy="215" rx="20" ry="8" fill="#8BA89B" opacity="0.3"/>
      </svg>
    ),
  },
  {
    step: 5,
    title: 'Sujud',
    subtitle: 'Prostration',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhana Rabbiyal A'la",
    meaning: 'Glory be to my Lord, the Most High',
    description: 'Prostrate with forehead, nose, both palms, both knees, and toes touching the ground. Say the tasbih at least three times.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="140" r="18" fill="#6B8E7F" opacity="0.3"/>
        <rect x="110" y="160" width="20" height="30" rx="3" fill="#6B8E7F" opacity="0.4"/>
        <path d="M95 165 L70 175" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <path d="M125 165 L150 175" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="70" cy="175" r="8" fill="#C9B8A3" opacity="0.5"/>
        <circle cx="150" cy="175" r="8" fill="#C9B8A3" opacity="0.5"/>
        <ellipse cx="85" cy="195" rx="12" ry="8" fill="#8BA89B" opacity="0.4"/>
        <ellipse cx="135" cy="195" rx="12" ry="8" fill="#8BA89B" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: 6,
    title: 'Sitting Between Sujud',
    subtitle: 'Brief Sitting Position',
    arabic: 'رَبِّ اغْفِرْ لِي',
    transliteration: 'Rabbighfirli',
    meaning: 'My Lord, forgive me',
    description: 'Sit briefly between the two prostrations. Keep your hands on your thighs and recite the dua.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="20" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="125" width="30" height="35" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 135 L185 145" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <path d="M135 135 L115 145" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <rect x="130" y="160" width="40" height="20" rx="3" fill="#8BA89B" opacity="0.3"/>
        <ellipse cx="140" cy="185" rx="15" ry="8" fill="#8BA89B" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: 7,
    title: 'Tashahhud',
    subtitle: 'Testimony of Faith',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ',
    transliteration: 'Ash-hadu an la ilaha illallah',
    meaning: 'I bear witness that there is no deity except Allah',
    description: 'Sit in the final sitting position. Raise your index finger when mentioning Allah and recite the full Tashahhud.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="22" fill="#6B8E7F" opacity="0.3"/>
        <rect x="135" y="125" width="30" height="40" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 140 L190 150" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <path d="M190 150 L192 135" stroke="#C9B8A3" strokeWidth="3" strokeLinecap="round"/>
        <path d="M135 145 L115 155" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <rect x="125" y="165" width="50" height="18" rx="3" fill="#8BA89B" opacity="0.3"/>
        <ellipse cx="145" cy="190" rx="18" ry="8" fill="#8BA89B" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: 8,
    title: 'Salam',
    subtitle: 'Concluding the Prayer',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ',
    transliteration: 'Assalamu alaikum wa rahmatullah',
    meaning: 'Peace and mercy of Allah be upon you',
    description: 'Turn your head to the right and say the salam, then turn to the left and repeat. This completes your prayer.',
    posture: (
      <svg className="w-full h-56" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="22" fill="#6B8E7F" opacity="0.3"/>
        <path d="M165 100 L180 95" stroke="#6B8E7F" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <rect x="135" y="125" width="30" height="40" rx="4" fill="#6B8E7F" opacity="0.4"/>
        <path d="M165 145 L185 155" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <path d="M135 145 L115 155" stroke="#C9B8A3" strokeWidth="5" strokeLinecap="round"/>
        <rect x="125" y="165" width="50" height="18" rx="3" fill="#8BA89B" opacity="0.3"/>
        <ellipse cx="145" cy="190" rx="18" ry="8" fill="#8BA89B" opacity="0.4"/>
      </svg>
    ),
  },
];

export function SolatGuide({ onBack }: SolatGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step = solatSteps[currentStep];
  const isLastStep = currentStep === solatSteps.length - 1;
  const isStepCompleted = completedSteps.includes(currentStep);

  const handleNext = () => {
    if (!isStepCompleted) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < solatSteps.length - 1) {
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
          <p className="text-muted-foreground text-[14px]">Solat Guide</p>
          <p className="text-foreground text-[15px]">
            Step {step.step} of {solatSteps.length}
          </p>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-muted/30">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / solatSteps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Posture Illustration */}
        <div className="bg-gradient-to-b from-muted/30 to-transparent py-6 px-6">
          {step.posture}
        </div>

        {/* Step Details */}
        <div className="px-6 py-6 space-y-6">
          {/* Step Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[14px] mb-3">
              Step {step.step}
            </div>
            <h2 className="text-[26px] text-foreground mb-1">{step.title}</h2>
            <p className="text-muted-foreground text-[15px] mb-3">{step.subtitle}</p>
            <p className="text-foreground text-[16px] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Arabic, Transliteration & Meaning */}
          <div className="bg-secondary/20 rounded-3xl p-6 space-y-5">
            <div className="text-center">
              <p className="text-muted-foreground text-[13px] mb-3">Arabic</p>
              <p className="text-[26px] text-foreground leading-relaxed" dir="rtl">
                {step.arabic}
              </p>
            </div>
            <div className="h-px bg-border" />
            <div className="text-center">
              <p className="text-muted-foreground text-[13px] mb-2">Transliteration</p>
              <p className="text-[18px] text-foreground italic mb-3">
                {step.transliteration}
              </p>
            </div>
            <div className="h-px bg-border" />
            <div className="text-center">
              <p className="text-muted-foreground text-[13px] mb-2">Meaning</p>
              <p className="text-[16px] text-foreground leading-relaxed">
                "{step.meaning}"
              </p>
            </div>
          </div>

          {/* Audio Button */}
          <button className="w-full h-14 rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center gap-3 hover:bg-accent/30 transition-colors">
            <Volume2 className="w-5 h-5 text-accent-foreground" />
            <span className="text-accent-foreground text-[16px]">Listen to Recitation</span>
          </button>

          {/* Mark Complete Button */}
          {!isStepCompleted && (
            <button
              onClick={handleMarkComplete}
              className="w-full h-14 rounded-3xl border-2 border-primary/30 text-primary flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
            >
              <Check className="w-5 h-5" />
              <span className="text-[16px]">Mark as Practiced</span>
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