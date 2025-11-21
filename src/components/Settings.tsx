import { useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, Languages, Type, Info, Check } from 'lucide-react';
import { Switch } from './ui/switch';

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [textSize, setTextSize] = useState('Medium');

  const languages = ['English', 'Arabic', 'Malay', 'Urdu', 'French'];
  const textSizes = ['Small', 'Medium', 'Large', 'Extra Large'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-[20px] text-foreground">Settings</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="p-6 space-y-8">
        {/* Appearance Section */}
        <div>
          <h2 className="text-[18px] text-foreground mb-4 px-1">Appearance</h2>
          <div className="bg-muted/30 border border-border rounded-3xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-border last:border-b-0">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-primary" />
                  ) : (
                    <Sun className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-foreground text-[16px] mb-0.5">Dark Mode</p>
                  <p className="text-muted-foreground text-[14px]">
                    {darkMode ? 'Enabled' : 'Disabled'}
                  </p>
                </div>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div>
          <h2 className="text-[18px] text-foreground mb-4 px-1">Language</h2>
          <div className="bg-muted/30 border border-border rounded-3xl overflow-hidden">
            <button className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-accent/30 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-foreground text-[16px] mb-0.5">App Language</p>
                  <p className="text-muted-foreground text-[14px]">{selectedLanguage}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <div className="mt-3 space-y-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                  selectedLanguage === lang
                    ? 'bg-primary/10 border-2 border-primary/30'
                    : 'bg-white border border-border hover:bg-muted/30'
                }`}
              >
                <span className={`text-[15px] ${
                  selectedLanguage === lang ? 'text-primary' : 'text-foreground'
                }`}>
                  {lang}
                </span>
                {selectedLanguage === lang && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Section */}
        <div>
          <h2 className="text-[18px] text-foreground mb-4 px-1">Accessibility</h2>
          <div className="bg-muted/30 border border-border rounded-3xl overflow-hidden">
            <button className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-secondary/50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-foreground text-[16px] mb-0.5">Text Size</p>
                  <p className="text-muted-foreground text-[14px]">{textSize}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <div className="mt-3 space-y-2">
            {textSizes.map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                  textSize === size
                    ? 'bg-primary/10 border-2 border-primary/30'
                    : 'bg-white border border-border hover:bg-muted/30'
                }`}
              >
                <span className={`${
                  size === 'Small' ? 'text-[14px]' :
                  size === 'Medium' ? 'text-[15px]' :
                  size === 'Large' ? 'text-[17px]' :
                  'text-[19px]'
                } ${textSize === size ? 'text-primary' : 'text-foreground'}`}>
                  {size}
                </span>
                {textSize === size && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-[18px] text-foreground mb-4 px-1">About</h2>
          <div className="bg-muted/30 border border-border rounded-3xl overflow-hidden">
            <button className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-accent/30 flex items-center justify-center">
                  <Info className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-foreground text-[16px] mb-0.5">About This App</p>
                  <p className="text-muted-foreground text-[14px]">Version 1.0.0</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-3xl p-6 border border-border">
          <p className="text-foreground text-[15px] mb-2">Learn Solat</p>
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            A gentle companion for new Muslims learning the beautiful practice of prayer. 
            May your journey be blessed and filled with peace.
          </p>
        </div>

        {/* Bottom spacing */}
        <div className="h-8" />
      </div>
    </div>
  );
}
