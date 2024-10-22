'use client';

import { useHeroMeasures } from '@/lib/hooks';
import { DataType } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const InnerCircle = ({ logo, slug, name }: Props) => {
  const { innerCircleRadius } = useHeroMeasures();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-t to-purple from-pink"
        style={{
          width: `${innerCircleRadius * 2 + 10}px`,
          height: `${innerCircleRadius * 2 + 10}px`,
        }}
        initial={{ scale: 0.1, opacity: 0.5, x: '-50%', y: '-50%' }}
        exit={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-full m-[1px] p-5 bg-gradient-to-tr from-black to-[#1f1d22] drop-shadow-lg">
          <Image
            src={logo}
            alt={name}
            height={90}
            width={90}
            // className="w-[3rem] h-[3rem] md:w-[5.65rem] md:h-[5.65rem]"
          />
        </div>

        <p className="text-center pt-3">{name}</p>
      </motion.div>
    </AnimatePresence>
  );
};

type Props = DataType;
