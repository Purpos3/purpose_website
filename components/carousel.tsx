// carousel.tsx
'use client';

import { gradientStyle } from '@/lib/contants';
import step1 from '@/public/images/steps/step11.png';
import step2 from '@/public/images/steps/step22.png';
import step3 from '@/public/images/steps/step33.png';
import { useState } from 'react';
import Step from './step';
import StepImage from './step-image';

// Define types for the steps and images
type StepType = {
    num: string;
    content: string;
};

type StepImageType = {
    num: string;
    imageSrc: string;
};

// Define the data for steps and images
const STEPS: StepType[] = [
  { num: '1', content: 'Upload your CV' },
  { num: '2', content: 'Tweak preferences' },
  { num: '3', content: 'Get matched & Apply' },
];

const STEP_IMAGES: StepImageType[] = [
  { num: '1', imageSrc: step1 },
  { num: '2', imageSrc: step2 },
  { num: '3', imageSrc: step3 },
];

export default function Carousel() {
  const [currentActive, setCurrentActive] = useState<string>('1');

  const handleClick = (num: string) => {
    setCurrentActive(num);
  };

  return (
    <div className="md:m-6 p-6 md:py-32 bg-slate-200 md:rounded-lg flex flex-col-reverse md:flex-row gap-12">
      <div className="md:w-6/12">
        <div className="relative flex justify-center items-center w-full h-full">
          {STEP_IMAGES.map((s) => (
            <StepImage
              key={s.num}
              imageSrc={s.imageSrc}
              active={s.num === currentActive}
            />
          ))}
        </div>
      </div>
      <div className="md:w-6/12 p-6 flex flex-col justify-center">
        <div>
          <h3 className="text-2xl md:text-5xl font-bold">
            Here is how we help you{' '}
            <span
              style={{
                ...gradientStyle,
                backgroundClip: 'text',
              }}
              className="inline-block text-transparent"
            >
              in minutes
            </span>
          </h3>
          <p className="text-lg">
            Our technology reduces the application time by up to 80%
          </p>

          <div className="flex flex-col gap-12 mt-12">
            {STEPS.map((s) => (
              <Step
                key={s.num}
                num={s.num}
                content={s.content}
                active={currentActive === s.num}
                onClick={() => handleClick(s.num)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
