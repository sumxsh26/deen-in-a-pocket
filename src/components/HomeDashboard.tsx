import {
  Settings,
  Clock,
  Book,
  Sparkles,
  Volume2,
  HandHeart,
  MoonStar,
} from "lucide-react";
import type { Screen } from "../App";

interface HomeDashboardProps {
  onNavigate: (screen: Screen) => void;
}

export function HomeDashboard({
  onNavigate,
}: HomeDashboardProps) {
  const progress = 35; // Mock progress percentage

  // Mock prayer times (using 24-hour format)
  const prayerTimes = {
    Fajr: '05:30',
    Zuhr: '13:15',
    Asr: '16:45',
    Maghrib: '19:10',
    Isha: '20:30',
  };

  // Get current time
  const now = new Date();
  const currentTime = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Mock: Determine current/next prayer (simplified logic)
  // For demo purposes, let's say it's currently Zuhr time
  const currentPrayer = 'Zuhr';
  const nextPrayer = 'Asr';
  const nextPrayerTime = prayerTimes[nextPrayer as keyof typeof prayerTimes];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3EE] to-white">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-muted-foreground text-[15px] mb-1">
              Assalamu'alaikum
            </p>
            <h1 className="text-[24px] text-foreground">
              Welcome Back, Sumayyah
            </h1>
          </div>
          <button
            onClick={() => onNavigate("settings")}
            className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Progress Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 text-primary-foreground shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-primary-foreground/80 text-[15px] mb-1">
                Your Progress
              </p>
              <h2 className="text-[28px] text-primary-foreground">
                {progress}%
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-primary-foreground/80 text-[14px] mt-3">
            Keep going! You're doing great
          </p>
        </div>

        {/* Prayer Time Reminder */}
        <div className="bg-secondary/30 border border-border rounded-3xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-foreground text-[15px]">
                  It's time for {currentPrayer}
                </p>
              </div>
              <p className="text-muted-foreground text-[13px] mb-3">
                {currentTimeZone} • {currentTime}
              </p>
              <div className="bg-white/50 rounded-2xl px-3 py-2 inline-flex items-center gap-2">
                <p className="text-muted-foreground text-[12px]">Next Salah</p>
                <p className="text-foreground text-[14px]">
                  {nextPrayer} at {nextPrayerTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div>
          <h3 className="text-foreground text-[17px] mb-4 px-1">
            Learning Modules
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Learn Wudhu */}
            <button
              onClick={() => onNavigate("wudhu")}
              className="bg-white border border-border rounded-3xl p-6 flex flex-col items-start gap-3 hover:shadow-lg hover:border-primary/20 transition-all active:scale-95"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#6B8E7F]/10 flex items-center justify-center">
                <HandHeart className="w-7 h-7 text-[#6B8E7F]" />
              </div>
              <div className="text-left">
                <p className="text-foreground text-[16px] mb-1">
                  Learn Wudhu
                </p>
                <p className="text-muted-foreground text-[13px]">
                  Step by step
                </p>
              </div>
            </button>

            {/* Learn Solat */}
            <button
              onClick={() => onNavigate("solat")}
              className="bg-white border border-border rounded-3xl p-6 flex flex-col items-start gap-3 hover:shadow-lg hover:border-primary/20 transition-all active:scale-95"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9B8A3]/30 flex items-center justify-center">
                <MoonStar className="w-7 h-7 text-[#8B7355]" />
              </div>
              <div className="text-left">
                <p className="text-foreground text-[16px] mb-1">
                  Learn Solat
                </p>
                <p className="text-muted-foreground text-[13px]">
                  Prayer guide
                </p>
              </div>
            </button>

            {/* Du'a Library */}
            <button 
            onClick={() => onNavigate("dua")}
            className="bg-white border border-border rounded-3xl p-6 flex flex-col items-start gap-3 hover:shadow-lg hover:border-primary/20 transition-all active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-[#E8D9C5]/50 flex items-center justify-center">
                <Book className="w-7 h-7 text-[#A68968]" />
              </div>
              <div className="text-left">
                <p className="text-foreground text-[16px] mb-1">
                  Du'a Library
                </p>
                <p className="text-muted-foreground text-[13px]">
                  Daily prayers
                </p>
              </div>
            </button>

            {/* Audio Guides */}
            <button className="bg-white border border-border rounded-3xl p-6 flex flex-col items-start gap-3 hover:shadow-lg hover:border-primary/20 transition-all active:scale-95">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Volume2 className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground text-[16px] mb-1">
                  Audio Guides
                </p>
                <p className="text-muted-foreground text-[13px]">
                  Listen & learn
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Helpful Tip */}
        <div className="bg-white border border-border rounded-3xl p-5">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-foreground text-[15px] mb-1">
                Daily Tip
              </p>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                Practice makes perfect. Try reviewing one step
                each day to build confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}