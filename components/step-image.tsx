// step-image.tsx
'use client';

import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { StaticImageData } from 'next/image';

interface Props {
  imageSrc: StaticImageData | string;
  active: boolean;
}

export default function StepImage({ imageSrc, active }: Props) {
  if (!active) {
    return null;
  }

  return (
    <div className="flex justify-center items-center w-[250px] h-[500px]"> {/* Slightly larger dimensions */}
      <ExportedImage
        src={imageSrc}
        alt="Step Image"
        className="object-contain w-full h-full"
        basePath={basePath}
      />
    </div>
  );
}
