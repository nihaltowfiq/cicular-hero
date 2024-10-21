'use client';

import { DataType } from '@/data';
import classNames from '@/utils';
import { Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const OuterCircle = ({
  xPos,
  yPos,
  logo,
  name,
  info,
  active,
  slug,
  clickHandler,
}: Props) => {
  return (
    <motion.div
      className="absolute w-[80px] h-[80px]"
      style={{
        top: `calc(50% + ${yPos}px)`,
        left: `calc(50% + ${xPos}px)`,
      }}
      initial={{ scale: 0.5, opacity: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      onClick={clickHandler}
    >
      <Tooltip
        className="bg-black-dark border border-black-light"
        classNames={{ content: 'mt-6 min-w-[12rem]' }}
        placement="bottom"
        content={
          <div className="px-1 py-2">
            <div className="">
              <p>{name} Bridge Volume:</p>
              <p>${info.bridge_volume.toLocaleString()}</p>
            </div>
            <div className="text-tiny">This is a custom tooltip content</div>
          </div>
        }
      >
        <div
          className={classNames(
            'border cursor-pointer z-10 rounded-full p-2 border-black',
            {
              'border-black-light hover:border-pink bg-black bg-gradient-to-tr from-black to-[#1f1d22] drop-shadow-lg':
                active.relations.includes(slug),
            }
          )}
        >
          <Image
            src={logo}
            alt={name}
            height={70}
            width={70}
            className="object-cover"
          />
        </div>
      </Tooltip>

      <p className="text-center">{name}</p>
    </motion.div>
  );
};

type Props = DataType & {
  xPos: number;
  yPos: number;
  active: DataType;
  clickHandler: () => void;
};
