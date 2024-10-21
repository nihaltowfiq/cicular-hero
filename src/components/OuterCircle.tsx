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
      initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      onClick={clickHandler}
    >
      <Tooltip
        className="bg-black-dark border border-black-light"
        classNames={{ content: 'mt-5 min-w-[16rem]' }}
        placement="bottom"
        content={
          <div className="p-3 w-full text-[0.75rem]">
            <div>
              <p className="text-gray-500">{name} Bridge Volume:</p>
              <p className="font-medium">
                ${info.bridge_volume.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <Image
                src={active.logo}
                height={12}
                width={12}
                alt={active.name}
              />
              <Image src={logo} height={12} width={12} alt={name} />
            </div>
            {/* replace with progress bar */}
            <div className="flex mt-1">
              <div className="h-1 w-[30%] bg-purple"></div>
              <div className="h-1 w-[70%] bg-pink"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">From {active.name}</p>
                <p>${active.info.bridge_volume.toLocaleString()}</p>
              </div>
              <Image
                src="/assets/arrow-left-right.svg"
                height={16}
                width={16}
                alt="arrow"
              />
              <div>
                <p className="text-gray-500">To {name}</p>
                <p>${info.bridge_volume.toLocaleString()}</p>
              </div>
            </div>
          </div>
        }
      >
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
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
        </motion.div>
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
