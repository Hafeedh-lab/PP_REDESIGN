import React, { useState, useEffect } from 'react';

// Define TypeScript types for the component's props
interface AnimatedTargetIconProps {
  /** The total duration of the formation animation in seconds. Default: 1.5 */
  animationDuration?: number;
  /** The radius from the center where elements will scatter. Default: 60 */
  scatterRadius?: number;
}

const AnimatedTargetIcon: React.FC<AnimatedTargetIconProps> = ({
  animationDuration = 1.5,
  scatterRadius = 60,
}) => {
  const [isAssembled, setIsAssembled] = useState(false);

  // This effect triggers the animation once when the component mounts.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 100); // A small delay ensures initial styles are applied before transitioning.

    return () => clearTimeout(timer);
  }, []);

  // --- Animation Styles ---

  // Common transition style for all animated elements.
  const commonStyle: React.CSSProperties = {
    transition: `transform ${animationDuration}s cubic-bezier(0.25, 1, 0.5, 1)`,
  };

  // Calculates a random-but-stable scattered position for each element based on its index.
  const scatteredStyle = (index: number): React.CSSProperties => {
    // Using a golden angle approximation to distribute points evenly.
    const angle = (index * 137.5) * (Math.PI / 180);
    const radius = scatterRadius + index * 10;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const rotation = 180 + (index * 60);
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      transformOrigin: 'center', // Ensures rotation happens around the element's center.
    };
  };

  // The final, assembled state for all elements.
  const assembledStyle: React.CSSProperties = {
    transform: 'translate(0, 0) rotate(0deg)',
  };

  const chartElements = [
    // X and Y Axes
    <g key="axes" style={{ ...commonStyle, ...(isAssembled ? assembledStyle : scatteredStyle(0)) }}>
      <line x1="-20" y1="20" x2="20" y2="20" stroke="#adb5bd" strokeWidth="1.5" />
      <line x1="-20" y1="20" x2="-20" y2="-15" stroke="#adb5bd" strokeWidth="1.5" />
    </g>,
    // Bar 1
    <g key="bar1" style={{ ...commonStyle, ...(isAssembled ? assembledStyle : scatteredStyle(1)) }}>
      <rect x="-15" y="-5" width="8" height="25" fill="#3b82f6" rx="1" />
    </g>,
    // Bar 2
    <g key="bar2" style={{ ...commonStyle, ...(isAssembled ? assembledStyle : scatteredStyle(2)) }}>
      <rect x="-3" y="-15" width="8" height="35" fill="#3b82f6" rx="1" />
    </g>,
    // Bar 3
    <g key="bar3" style={{ ...commonStyle, ...(isAssembled ? assembledStyle : scatteredStyle(3)) }}>
      <rect x="9" y="-10" width="8" height="30" fill="#3b82f6" rx="1" />
    </g>,
  ];

  return (
    <div style={{ width: '192px', height: '192px' }}>
      <svg width="192" height="192" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
        {/* This group centers all elements within the SVG canvas. */}
        <g transform="translate(50, 50)">
          {chartElements}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedTargetIcon;
