import { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Check, Info } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from "react";

interface DuaLibraryProps {
  onBack: () => void;
}

export function DuaLibrary({ onBack }: DuaLibraryProps) {
  

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
        <h1 className="text-[20px] text-foreground">Dua Library</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

<div className="p-6 space-y-8">


        {/* App Info */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-3xl p-6 border border-border">
          <p className="text-foreground text-[15px] mb-2">Learn Duaa</p>
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            This journey you’ve started is beautiful, and it comes with the assurance that Allah sees every effort you make, even the quiet ones. He is the Most Merciful, and He accepts every sincere whisper from the heart.
Take things slowly. You don’t need to memorise everything at once. Start with small steps, practise at your own pace, and allow yourself to grow gently. Every day, even a little bit, brings you closer to understanding, peace, and connection with Allah.
May this guide be a source of comfort and ease as you begin learning and building your relationship with your Creator. 🌙
          </p>
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            
          </p>
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

        {/* Bottom spacing */}
        <div className="h-8" />
      </div>
      </div>
  );
}