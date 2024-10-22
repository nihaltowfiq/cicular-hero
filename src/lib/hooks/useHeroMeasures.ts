import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export function useHeroMeasures(): ReturnType {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('sm');
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 1024) setScreenSize('lg');
    else if (width >= 641) setScreenSize('md');
    else setScreenSize('sm');
  }, [width]);

  const circleMeasures = {
    lg: {
      radius: 200, // Radius for outer circle (distance from inner circle)
      innerCircleRadius: 50,
      centerX: 250, // X coordinate of the center (half of the container's width)
      centerY: 250, // Y coordinate of the center (half of the container's height)
      containerHeight: 500,
      containerWidth: 500,
    },
    md: {
      radius: 200, // Radius for outer circle (distance from inner circle)
      innerCircleRadius: 50,
      centerX: 250, // X coordinate of the center (half of the container's width)
      centerY: 250, // Y coordinate of the center (half of the container's height)
      containerHeight: 500,
      containerWidth: 500,
    },
    sm: {
      radius: 120, // Radius for outer circle (distance from inner circle)
      innerCircleRadius: 25,
      centerX: 160, // X coordinate of the center (half of the container's width)
      centerY: 160, // Y coordinate of the center (half of the container's height)
      containerHeight: 320,
      containerWidth: 320,
    },
  };

  return circleMeasures[screenSize];
}

type ReturnType = {
  radius: number;
  innerCircleRadius: number;
  centerX: number;
  centerY: number;
  containerHeight: number;
  containerWidth: number;
};
