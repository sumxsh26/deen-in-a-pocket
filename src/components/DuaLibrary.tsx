import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Check, Info } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from "react";


interface DuaLibraryProps {
  onBack: () => void;
}

const duaaItems = [
  {
    number: 1,
    title: 'When leaving the house',
    arabic: 'بِسْمِ اللّٰهِ، تَوَكَّلْتُ عَلَى اللّٰهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ',
    transliteration: ' Bismillaahi, tawakkaltu ‘alallaahi, wa laa hawla wa laa quwwata illaa billaah',
    meaning: 'In the Name of Allah, I have placed my trust in Allah; there is no might and no power except by Allah.',
  },
  {
    number: 2,
    title: 'When travelling',
    arabic: 'سُبْحَانَ الذي سَخَّرَ لَنَا هذا، وَما كُنَّا له مُقْرِنِينَ، وإنَّا إلى رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: 'Subhanal-ladzi sakh-khara lana hadza wa ma kunna lahu muqrinin. Wa inna ila Rabbina lamun-qalibun.',
    meaning: 'In the name of Allah and all praise is for Allah. How perfect He is, the One Who has placed this (transport) at our service and we ourselves would not have been capable of that, and to our Lord is our final destiny.',
  },
  {
    number: 3,
    title: 'When seeking protection',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillahil-lazi la yadhurru ma’asmiHi syai’un fil ardhi wa la fis-sama’i wa Huwas-Sami’ul Aleem',
    meaning: 'In the Name of Allah with Whose Name there is protection against every kind of harm in the earth or in heaven, and He is All-Hearing and All-Knowing',
  },
  {
    number: 4,
    title: 'Dua for steadfastness and uprightness in the religion',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِك',
    transliteration: 'yaa mu-qallibal quloob thab-bit qalbee ‘alaa deenik',
    meaning: 'Oh turner of hearts, keep my heart firm upon Your religion.',
  },


]

export function DuaLibrary({ onBack }: DuaLibraryProps) {
  
    const [currentItem, setCurrentItem] = useState(0);
    const item = duaaItems[currentItem];
    const [completedItems, setCompletedItems] = useState<number[]>([]);


  const audioRef = useRef<HTMLAudioElement>(null);
  const handleAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart if clicked again
      audioRef.current.play();
    }
  };

  const isLastItem = currentItem === duaaItems.length - 1;
  const isItemCompleted = completedItems.includes(currentItem);

  const handleNext = () => {
    if (!isItemCompleted) {
      setCompletedItems([...completedItems, currentItem]);
    }
    if (currentItem < duaaItems.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      // On last step, return to dashboard
      onBack();
    }
  };

  const handlePrevious = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    }
  };

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
        <div className="text-center">
          <h1 className="text-[20px] text-foreground">Dua Library</h1>
          <p className="text-foreground text-[15px]">Simple Du’as for Daily Life</p>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>
      
      <div className="p-6 space-y-8">
        {/* Content Header */}
        <div>          
          {/* Content */}
          <div className="flex-1 overflow-y-auto pb-32">
          
          {/* Item Details */}
        <div className="px-6 py-6 space-y-6">
          
          {/* Item Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[14px] mb-3">
              Duaa {item.number}
            </div>
            <h2 className="text-[26px] text-foreground mb-2">{item.title}</h2>
          </div>

          {/* Arabic & Transliteration */}
              <div className="bg-secondary/20 rounded-3xl p-6 space-y-4">
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Arabic</p>
                  <p className="text-[16px] text-foreground" dir="rtl">
                    {item.arabic}
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Pronunciation</p>
                  <p className="text-[18px] text-foreground italic">
                    {item.transliteration}
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <p className="text-muted-foreground text-[13px] mb-2">Meaning</p>
                  <p className="text-[16px] text-foreground leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              </div>

              {/* Audio Button */}
              <button className="w-full h-14 rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center gap-3 hover:bg-accent/30 transition-colors">
                <Volume2 className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground text-[16px]">Listen to Pronunciation</span>
              </button>
          </div>       
        </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-6 max-w-md mx-auto">
        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentItem === 0}
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
            {isLastItem ? 'Finish' : 'Next Duaa'}
            {!isLastItem && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div> 
      </div>
      </div>
    </div>
  );
}