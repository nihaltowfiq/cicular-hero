'use client';

import { DataType } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const InnerCircle = ({ logo, name, innerCircleRadius }: Props) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-t to-purple from-pink"
      style={{
        width: `${innerCircleRadius * 2 + 10}px`,
        height: `${innerCircleRadius * 2 + 10}px`,
        // transform: 'translate(-50%, -50%)', // Correct centering
      }}
      initial={{ scale: 0.5, opacity: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-full m-[1px] p-5 bg-gradient-to-tr from-black to-[#1f1d22]  drop-shadow-lg">
        <Image src={logo} alt={name} height={90} width={90} className="" />
      </div>

      <p className="text-center pt-3">{name}</p>
    </motion.div>
  );
};

type Props = DataType & {
  innerCircleRadius: number;
};
