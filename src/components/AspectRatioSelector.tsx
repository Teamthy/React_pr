import React from 'react';
import { SquareIcon, RectangleHorizontalIcon, RectangleVerticalIcon } from 'lucide-react';
import type { AspectRatios } from '../assets/assets';

interface AspectRatioSelectorProps {
  selectedAspectRatio: AspectRatios;
  onChange: (ratio: AspectRatios) => void;
}

const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ selectedAspectRatio, onChange }) => {
  const iconMapping: Record<AspectRatios, React.ReactNode> = {
    "1:1": <SquareIcon className="size-6" />,
    "16:9": <RectangleHorizontalIcon className="size-6" />,
    "9:6": <RectangleVerticalIcon className="size-6" />,
  };

  const ratios: AspectRatios[] = ["1:1", "16:9", "9:6"];

  return (
    <div className="space-y-3 dark:text-gray-300">
      <label className="block text-sm font-medium text-zinc-200">Aspect Ratio</label>
      <div className="flex flex-wrap gap-2">
        {ratios.map((ratio) => (
          <button
            key={ratio}
            type="button"
            onClick={() => onChange(ratio)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 text-white transition 
              ${selectedAspectRatio === ratio ? 'bg-pink-600' : 'bg-white/10 hover:bg-pink-600'}`}
          >
            {iconMapping[ratio]}
            <span className="tracking-widest">{ratio}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
