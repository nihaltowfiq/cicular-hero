'use client';

import { useHeroMeasures } from '@/lib/hooks';
import { DataType } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const InnerCircle = ({ logo, slug, name, isMount }: Props) => {
  const { innerCircleRadius } = useHeroMeasures();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        className="absolute p-[1px] top-1/2 left-1/2 rounded-full bg-gradient-to-t to-purple from-pink aspect-square"
        style={{
          width: `${innerCircleRadius * 2 + 10}px`,
          height: `${innerCircleRadius * 2 + 10}px`,
        }}
        initial={{
          scale: isMount ? 1 : 0,
          opacity: isMount ? 1 : 0,
          x: '-50%',
          y: '-50%',
        }}
        exit={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-full w-full z-10 rounded-full bg-gradient-to-tr from-black to-[#1f1d22] drop-shadow-lg ">
          <Image fill src={logo} alt={name} className="object-cover" />
        </div>

        <p className="fixed text-xs lg:text-sm top-full left-0 right-0 text-center pt-2 lg:whitespace-nowrap">
          {name}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

type Props = DataType & { isMount: boolean };
