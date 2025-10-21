
import React from 'react';
import { PlayIcon, RewindIcon, FastForwardIcon } from './icons/Icons';
import { useLanguage } from '../contexts/LanguageContext';

export const MusicPlayer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 shadow-lg flex items-center space-x-4 text-slate-300">
      <div className="w-16 h-16 bg-slate-700 rounded-lg flex-shrink-0">
          <img src="https://picsum.photos/100/100?blur=1" alt="Album art" className="w-full h-full object-cover rounded-lg"/>
      </div>
      <div className="flex-grow">
        <p className="font-bold text-slate-200">{t('music_track_title')}</p>
        <p className="text-sm text-slate-400">{t('music_track_artist')}</p>
      </div>
      <div className="flex items-center space-x-2 text-slate-300">
        <button className="w-10 h-10 hover:text-white transition-colors"><RewindIcon /></button>
        <button className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center hover:bg-white transition-colors"><PlayIcon /></button>
        <button className="w-10 h-10 hover:text-white transition-colors"><FastForwardIcon /></button>
      </div>
    </div>
  );
};
