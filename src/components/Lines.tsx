'use client';

import { useHeroMeasures } from '@/lib/hooks';
import { DataType } from '@/lib/types';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

export const Lines = ({ list, active }: Props) => {
  const { radius, centerX, centerY } = useHeroMeasures();

  const relationSlugs = active.relations.map((el) => el.slug);

  return (
    <motion.svg
      key={active.slug}
      className="absolute top-0 left-0 w-full h-full"
    >
      {list.map(({ slug }, index) => {
        const angle = (index / list.length) * 360;
        const xPos = centerX + radius * Math.cos((angle * Math.PI) / 180);
        const yPos = centerY + radius * Math.sin((angle * Math.PI) / 180);

        const gradientId = `gradient-${index}`;

        if (relationSlugs.includes(slug)) {
          return (
            <Fragment key={index}>
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: '#672CB7', stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: '#672CB7', stopOpacity: 1 }}
                  />
                  <stop
                    offset="65%"
                    style={{ stopColor: '#1a191e', stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <motion.line
                key={`main-${index}`}
                x1={centerX}
                y1={centerY}
                x2={xPos}
                y2={yPos}
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                initial={{ opacity: 0, pathLength: 0 }}
                exit={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <motion.circle
                key={`dot-${index}`}
                cx={centerX}
                cy={centerY}
                fill="#eeb6ff"
                animate={{
                  opacity: 1,
                  r: '1', // Radius of the moving dot after animation
                  cx: [centerX, xPos], // Move along the X-axis from center to end
                  cy: [centerY, yPos], // Move along the Y-axis from center to end
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 1,
                }}
                initial={{ opacity: 0, r: '0' }}
                exit={{ opacity: 0, r: '0' }}
              />
            </Fragment>
          );
        }
      })}
    </motion.svg>
  );
};

type Props = {
  active: DataType;
  list: DataType[];
};
