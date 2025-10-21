
import type { Protocol } from './types';
import { Goal, StageType } from './types';

export const PROTOCOLS: Protocol[] = [
  {
    id: 'relax_1',
    name: 'protocol_relax_1_name',
    description: 'protocol_relax_1_desc',
    cycles: 2,
    goal: Goal.Relax,
    stages: [
      { type: StageType.Sauna, duration: 10 * 60 },
      { type: StageType.Cold, duration: 1 * 60 },
      { type: StageType.Rest, duration: 10 * 60 },
    ],
  },
  {
    id: 'relax_2',
    name: 'protocol_relax_2_name',
    description: 'protocol_relax_2_desc',
    cycles: 3,
    goal: Goal.Relax,
    stages: [
      { type: StageType.Sauna, duration: 15 * 60 },
      { type: StageType.Cold, duration: 2 * 60 },
      { type: StageType.Rest, duration: 15 * 60 },
    ],
  },
  {
    id: 'perf_1',
    name: 'protocol_perf_1_name',
    description: 'protocol_perf_1_desc',
    cycles: 3,
    goal: Goal.Performance,
    stages: [
      { type: StageType.Sauna, duration: 12 * 60 },
      { type: StageType.Cold, duration: 3 * 60 },
      { type: StageType.Rest, duration: 8 * 60 },
    ],
  },
    {
    id: 'perf_2',
    name: 'protocol_perf_2_name',
    description: 'protocol_perf_2_desc',
    cycles: 4,
    goal: Goal.Performance,
    stages: [
      { type: StageType.Sauna, duration: 15 * 60 },
      { type: StageType.Cold, duration: 4 * 60 },
      { type: StageType.Rest, duration: 10 * 60 },
    ],
  },
];

export const STAGE_CONTENT: Record<StageType, { microcopy: string[], tips: string[] }> = {
  [StageType.Sauna]: {
    microcopy: [
      'microcopy_sauna_1',
      'microcopy_sauna_2',
      'microcopy_sauna_3',
      'microcopy_sauna_4',
      'microcopy_sauna_5',
    ],
    tips: [
        'tip_sauna_1',
        'tip_sauna_2',
        'tip_sauna_3',
    ]
  },
  [StageType.Cold]: {
    microcopy: [
      'microcopy_cold_1',
      'microcopy_cold_2',
      'microcopy_cold_3',
      'microcopy_cold_4',
      'microcopy_cold_5',
    ],
    tips: [
        'tip_cold_1',
        'tip_cold_2',
        'tip_cold_3',
    ]
  },
  [StageType.Rest]: {
    microcopy: [
      'microcopy_rest_1',
      'microcopy_rest_2',
      'microcopy_rest_3',
      'microcopy_rest_4',
      'microcopy_rest_5',
    ],
    tips: [
        'tip_rest_1',
        'tip_rest_2',
        'tip_rest_3',
    ]
  },
};

export const STAGE_COLORS: Record<StageType, { bg: string; text: string; ring: string; ringBg: string }> = {
  [StageType.Sauna]: {
    bg: 'bg-slate-900',
    text: 'text-amber-400',
    ring: 'stroke-amber-500',
    ringBg: 'stroke-amber-500/20',
  },
  [StageType.Cold]: {
    bg: 'bg-slate-900',
    text: 'text-blue-400',
    ring: 'stroke-blue-500',
    ringBg: 'stroke-blue-500/20',
  },
  [StageType.Rest]: {
    bg: 'bg-slate-900',
    text: 'text-slate-300',
    ring: 'stroke-slate-500',
    ringBg: 'stroke-slate-500/20',
  },
};
