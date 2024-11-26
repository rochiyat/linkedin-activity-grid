import React, { useState } from 'react';

const TooltipExample: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');

  const handleMouseEnter = (content: string) => {
    setTooltipContent(content);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative">
      <div
        className={`w-2.5 h-2.5 rounded-sm ${
          true ? 'bg-green-500' : 'bg-slate-500'
        }`}
        onMouseEnter={() => handleMouseEnter('Tooltip Content')}
        onMouseLeave={handleMouseLeave}
      ></div>
      {tooltipVisible && (
        <div className="absolute top-[-40px] left-0 bg-gray-800 text-white text-xs p-2 rounded">
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default TooltipExample;
