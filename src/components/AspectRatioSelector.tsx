import React from 'react';
import { SquareIcon, RectangleHorizontalIcon, RectangleVerticalIcon } from 'lucide-react';
import type { AspectRatios } from '../assets/assets';

const AspectRatioSelector = () => {
  const iconMapping: Record<string, React.ReactNode> = {
    "1:1": <SquareIcon className="size-6" />,
    "16:9": <RectangleHorizontalIcon className="size-6" />,
    "9:6": <RectangleVerticalIcon className="size-6" />,
  };

  const ratios: AspectRatios[] = ["1:1", "16:9", "9:6"];
  AspectRatioSelecto; onchange: (ratio: AspectRatios) => void

  return (
    <div className="space-y-3 dark:text-gray-300">
      <label className="block text-sm font-medium text-zinc-200">Aspect Ratio</label>
      <div className="flex flex-wrap gap-2">
        {ratios.map((ratio) => (
          <button
            key={ratio}
            type="button"
            onClick={()=>onchange(ratio)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-pink-600 transition"
          >
            {iconMapping[ratio]}
            <span className='tracking-widest'>{ratio}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
