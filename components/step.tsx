// step.tsx
'use client';

import { gradientStyle } from '@/lib/contants';

interface StepProps {
  num: string;
  content: string;
  active?: boolean;
  onClick: (num: string) => void;
}

export default function Step({ num, content, active = false, onClick }: StepProps) {
  return (
    <div
      onClick={() => onClick(num)}
      className="flex flex-row gap-3 justify-start items-center cursor-pointer"
    >
      {active ? (
        <div
          style={gradientStyle}
          className="rounded-full w-12 h-12 flex justify-center items-center overflow-hidden"
        >
          <p className="text-slate-50 text-2xl">{num}</p>
        </div>
      ) : (
        <div className="rounded-full w-12 h-12 flex justify-center items-center overflow-hidden bg-slate-300">
          <p className="text-slate-900 text-2xl">{num}</p>
        </div>
      )}
      <div className="font-bold">{content}</div>
    </div>
  );
}
