import React from 'react';

type IconProps = {
    className?: string;
}

export const SunIcon: React.FC<IconProps> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

export const BoltIcon: React.FC<IconProps> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-7.184 8.25 8.25 0 0 1 3.362 2.797Z" />
    </svg>
);

export const SnowflakeIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15m4.243-4.243L16.243 15m-10.486 0L16.243 4.5" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
    </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm9 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>
);

export const StopIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
        <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
    </svg>
);


export const RewindIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
);

export const FastForwardIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const MinusIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
);

export const InformationCircleIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 1 1 9 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V11.25m-3-3.75h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75v-3.75m0 0a3.75 3.75 0 0 1 3.75-3.75h.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3.75m0 0a3.75 3.75 0 0 0-3.75-3.75H8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 0 1-3.75-3.75V9.75A1.5 1.5 0 0 1 9.75 8.25h4.5a1.5 1.5 0 0 1 1.5 1.5v2.25a3.75 3.75 0 0 1-3.75 3.75Z" />
    </svg>
);

export const SwitchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        {/* Back clock face, slightly dimmed and offset */}
        <circle cx="15" cy="9" r="7" className="opacity-60" />
        
        {/* Front clock face with hands */}
        <circle cx="9" cy="15" r="7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12v3h2.5" />
    </svg>
);

export const ThermometerIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 9h4" />
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
    </svg>
);

// Flags
export const FlagUKIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}><path d="M0 0h60v30H0z" fill="#00247d"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/><path d="M0 0l60 30m0-30L0 30" stroke="#cf142b" strokeWidth="4"/><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/><path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6"/></svg>
);
export const FlagDEIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className={className}><path d="M0 0h5v3H0z"/><path d="M0 1h5v2H0z" fill="#D00"/><path d="M0 2h5v1H0z" fill="#FFCE00"/></svg>
);
export const FlagPLIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" className={className}><path fill="#fff" d="M0 0h8v5H0z"/><path fill="#dc143c" d="M0 2.5h8v2.5H0z"/></svg>
);
export const FlagDKIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28" className={className}><path fill="#c60c30" d="M0 0h37v28H0z"/><path fill="#fff" d="M12 0h4v28h-4z"/><path fill="#fff" d="M0 12h37v4H0z"/></svg>
);
export const FlagSEIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" className={className}><path fill="#006aa7" d="M0 0h16v10H0z"/><path fill="#fecc00" d="M5 0h2v10H5z"/><path fill="#fecc00" d="M0 4h16v2H0z"/></svg>
);
export const FlagNOIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className={className}><path fill="#ef2b2d" d="M0 0h22v16H0z"/><path fill="#fff" d="M6 0h4v16H6zM0 6h22v4H0z"/><path fill="#002868" d="M7 0h2v16H7zM0 7h22v2H0z"/></svg>
);
export const FlagFIIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" className={className}><path fill="#fff" d="M0 0h18v11H0z"/><path fill="#003580" d="M5 0h3v11H5zM0 4h18v3H0z"/></svg>
);