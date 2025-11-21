import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { WudhuGuide } from './components/WudhuGuide';
import { SolatGuide } from './components/SolatGuide';
import { Settings } from './components/Settings';

export type Screen = 'onboarding' | 'home' | 'wudhu' | 'solat' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const handleCompleteOnboarding = () => {
    setHasCompletedOnboarding(true);
    setCurrentScreen('home');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl">
        {currentScreen === 'onboarding' && (
          <OnboardingScreen onComplete={handleCompleteOnboarding} />
        )}
        {currentScreen === 'home' && (
          <HomeDashboard onNavigate={navigateTo} />
        )}
        {currentScreen === 'wudhu' && (
          <WudhuGuide onBack={() => navigateTo('home')} />
        )}
        {currentScreen === 'solat' && (
          <SolatGuide onBack={() => navigateTo('home')} />
        )}
        {currentScreen === 'settings' && (
          <Settings onBack={() => navigateTo('home')} />
        )}
      </div>
    </div>
  );
}
