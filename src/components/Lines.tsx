'use client';

import { DataType } from '@/data';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

export const Lines = ({ list, radius, active }: Props) => {
  const centerX = 300; // X coordinate of the center (half of the container's width)
  const centerY = 300; // Y coordinate of the center (half of the container's height)

  return (
    <motion.svg className="absolute top-0 left-0 w-full h-full">
      {list.map(({ slug }, index) => {
        const angle = (index / list.length) * 360;
        const xPos = centerX + radius * Math.cos((angle * Math.PI) / 180);
        const yPos = centerY + radius * Math.sin((angle * Math.PI) / 180);

        const gradientId = `gradient-${index}`;

        if (active.relations.includes(slug)) {
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
                key={index}
                x1={centerX}
                y1={centerY}
                x2={xPos}
                y2={yPos}
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Fragment>
          );
        }
      })}
    </motion.svg>
  );
};

type Props = {
  radius: number;
  active: DataType;
  list: DataType[];
};
