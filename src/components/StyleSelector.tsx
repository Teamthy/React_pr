import React from 'react';
import { PaintbrushIcon, MinimizeIcon, BoldIcon } from 'lucide-react';

type Styles = "modern" | "minimal" | "bold";

interface StyleSelectorProps {
  selectedStyle: Styles;
  onChange: (style: Styles) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onChange }) => {
  const iconMapping: Record<Styles, React.ReactNode> = {
    modern: <PaintbrushIcon className="size-6" />,
    minimal: <MinimizeIcon className="size-6" />,
    bold: <BoldIcon className="size-6" />,
  };

  const styles: Styles[] = ["modern", "minimal", "bold"];

  return (
    <div className="space-y-3 dark:text-gray-300">
      <label className="block text-sm font-medium text-zinc-200">Style</label>
      <div className="flex flex-wrap gap-2">
        {styles.map((style) => (
          <button
            key={style}
            type="button"
            onClick={() => onChange(style)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 text-white transition 
              ${selectedStyle === style ? 'bg-pink-600' : 'bg-white/10 hover:bg-pink-600'}`}
          >
            {iconMapping[style]}
            <span className="capitalize tracking-widest">{style}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
