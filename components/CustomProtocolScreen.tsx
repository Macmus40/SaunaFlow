import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Goal, StageType } from '../types';
import type { Protocol, Stage } from '../types';
import { FireIcon, SnowflakeIcon, HeartIcon, PlusIcon, MinusIcon } from './icons/Icons';
import { useLanguage } from '../contexts/LanguageContext';


interface CustomProtocolScreenProps {
  goal: Goal | null;
  onStartProtocol: (protocol: Protocol) => void;
  onBack: () => void;
}

type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';

const StageConfig: React.FC<{
    icon: React.ReactNode;
    label: string;
    enabled: boolean;
    duration: number;
    onToggle: () => void;
    onDurationChange: (duration: number) => void;
}> = ({ icon, label, enabled, duration, onToggle, onDurationChange }) => {
    const { t } = useLanguage();
    return (
        <div className={`p-4 rounded-lg transition-all ${enabled ? 'bg-slate-700/50' : 'bg-slate-800 opacity-60'}`}>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6">{icon}</div>
                    <span className="font-bold text-lg">{label}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={enabled} onChange={onToggle} className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-amber-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
            </div>
            {enabled && (
                <div className="flex items-center space-x-4">
                    <input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={duration}
                        onChange={(e) => onDurationChange(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <span className="font-mono w-12 text-center">{duration} {t('minutes_short')}</span>
                </div>
            )}
        </div>
    )
};

export const CustomProtocolScreen: React.FC<CustomProtocolScreenProps> = ({ goal, onStartProtocol, onBack }) => {
    const { t } = useLanguage();
    const [name, setName] = useState(t('custom_ritual_default_name'));
    const [cycles, setCycles] = useState(3);
    const [sauna, setSauna] = useState({ enabled: true, duration: 15 });
    const [cold, setCold] = useState({ enabled: true, duration: 2 });
    const [rest, setRest] = useState({ enabled: true, duration: 10 });
    
    const [experience, setExperience] = useState<ExperienceLevel>('Intermediate');
    const [isLoadingAI, setIsLoadingAI] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);

    const handleExperienceSelect = async (level: ExperienceLevel) => {
        setExperience(level);
        setIsLoadingAI(true);
        setAiError(null);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = t('ai_prompt', { level: t(`experience_${level}`) });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            cycles: { type: Type.INTEGER, description: "Number of cycles" },
                            saunaDuration: { type: Type.INTEGER, description: "Sauna duration in minutes" },
                            coldDuration: { type: Type.INTEGER, description: "Cold therapy duration in minutes" },
                            restDuration: { type: Type.INTEGER, description: "Rest duration in minutes" },
                            isColdEnabled: { type: Type.BOOLEAN, description: "Whether the cold stage should be enabled" }
                        },
                        required: ["cycles", "saunaDuration", "coldDuration", "restDuration", "isColdEnabled"],
                    },
                },
            });

            const suggestion = JSON.parse(response.text);
            setCycles(suggestion.cycles);
            setSauna(prev => ({ ...prev, duration: suggestion.saunaDuration }));
            setCold({ enabled: suggestion.isColdEnabled, duration: suggestion.coldDuration });
            setRest(prev => ({ ...prev, duration: suggestion.restDuration }));

        } catch (error) {
            console.error("AI suggestion failed:", error);
            setAiError(t('ai_error'));
        } finally {
            setIsLoadingAI(false);
        }
    };

    const handleStart = () => {
        const stages: Stage[] = [];
        if (sauna.enabled) stages.push({ type: StageType.Sauna, duration: sauna.duration * 60 });
        if (cold.enabled) stages.push({ type: StageType.Cold, duration: cold.duration * 60 });
        if (rest.enabled) stages.push({ type: StageType.Rest, duration: rest.duration * 60 });

        if (stages.length === 0) {
            // Or show an error message
            return;
        }

        const customProtocol: Protocol = {
            id: `custom-${Date.now()}`,
            name: name || t('custom_ritual_default_name'),
            description: 'A personalized sauna ritual.',
            cycles,
            stages,
            goal: goal || Goal.Relax,
        };
        onStartProtocol(customProtocol);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 p-6 text-white">
            <div className="w-full max-w-2xl mx-auto">
                <div className="relative flex items-center justify-center mb-8">
                    <button onClick={onBack} className="absolute left-0 text-slate-300 hover:text-white transition-colors">&larr; {t('back')}</button>
                    <h1 className="text-3xl font-bold">{t('custom_ritual_header')}</h1>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="ritual-name" className="block text-sm font-medium text-slate-400 mb-1">{t('ritual_name_label')}</label>
                        <input
                            type="text"
                            id="ritual-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>

                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                        <span className="font-bold text-lg">{t('cycles')}</span>
                        <div className="flex items-center space-x-3">
                            <button onClick={() => setCycles(c => Math.max(1, c - 1))} className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"><MinusIcon /></button>
                            <span className="text-2xl font-bold w-10 text-center">{cycles}</span>
                            <button onClick={() => setCycles(c => c + 1)} className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600"><PlusIcon /></button>
                        </div>
                    </div>
                    
                    <StageConfig
                        icon={<FireIcon className="text-amber-400"/>}
                        label={t('stage_SAUNA')}
                        enabled={sauna.enabled}
                        duration={sauna.duration}
                        onToggle={() => setSauna(s => ({ ...s, enabled: !s.enabled }))}
                        onDurationChange={d => setSauna(s => ({...s, duration: d}))}
                    />

                    <StageConfig
                        icon={<SnowflakeIcon className="text-sky-400"/>}
                        label={t('stage_COLD')}
                        enabled={cold.enabled}
                        duration={cold.duration}
                        onToggle={() => setCold(c => ({ ...c, enabled: !c.enabled }))}
                        onDurationChange={d => setCold(c => ({...c, duration: d}))}
                    />
                    
                    <StageConfig
                        icon={<HeartIcon className="text-rose-400"/>}
                        label={t('stage_REST')}
                        enabled={rest.enabled}
                        duration={rest.duration}
                        onToggle={() => setRest(r => ({ ...r, enabled: !r.enabled }))}
                        onDurationChange={d => setRest(r => ({...r, duration: d}))}
                    />

                    <div className={`bg-slate-800/50 border border-slate-700 rounded-xl p-4 mt-8 transition-opacity ${isLoadingAI ? 'opacity-70' : ''}`}>
                         <h3 className="font-bold text-lg text-center text-slate-200 mb-2">{t('ai_suggestions_title')}</h3>
                         <p className="text-sm text-slate-400 text-center mb-4">{t('ai_suggestions_desc')}</p>
                         <div className="flex justify-center space-x-2 mb-4">
                             {(['Beginner', 'Intermediate', 'Advanced'] as ExperienceLevel[]).map(level => (
                                 <button key={level} onClick={() => handleExperienceSelect(level)} disabled={isLoadingAI} className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors disabled:cursor-not-allowed ${experience === level ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 hover:bg-slate-600'}`}>
                                     {t(`experience_${level}`)}
                                 </button>
                             ))}
                         </div>
                         {isLoadingAI && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                                <div className="w-4 h-4 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                                <span>{t('ai_loading')}</span>
                            </div>
                         )}
                         {aiError && <p className="text-rose-400 text-sm text-center mt-2">{aiError}</p>}
                    </div>
                </div>

                <div className="mt-10">
                    <button onClick={handleStart} className="w-full bg-amber-500 text-slate-900 font-bold py-4 px-10 rounded-full text-xl hover:bg-amber-400 transition-transform transform hover:scale-105 shadow-lg shadow-amber-500/20">
                        {t('start_custom_ritual')}
                    </button>
                </div>
            </div>
        </div>
    );
};