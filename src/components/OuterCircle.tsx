'use client';

import { DataType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

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
  const relationSlugs = active.relations.map((el) => el.slug);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        className="absolute w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
        initial={{ top: '50%', left: '50%', scale: 0, x: '-50%', y: '-50%' }}
        animate={{
          scale: 1,
          opacity: 1,
          left: `calc(50% + ${xPos}px)`,
          top: `calc(50% + ${yPos}px)`,
        }}
        transition={{ duration: 1, ease: 'linear' }}
        exit={{ scale: 1, opacity: 1, top: '50%', left: '50%' }}
        whileHover={{ scale: 1.1 }}
        onClick={clickHandler}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className={cn(
                  'border relative cursor-pointer z-10 text-center rounded-full hover:border-pink border-black aspect-square',
                  {
                    'border-black-light bg-black bg-gradient-to-tr from-black to-[#1f1d22] drop-shadow-lg':
                      relationSlugs.includes(slug),
                  }
                )}
              >
                <Image fill src={logo} alt={name} className="object-cover" />
              </motion.div>
            </TooltipTrigger>
            <TooltipContent content="bottom" align="start">
              <div className="py-3 px-2 w-full text-[0.75rem]">
                <div>
                  <p className="text-gray-500">{name} Bridge Volume:</p>
                  <p className="font-semibold text-[0.85rem] mt-1">
                    ${info.bridge_volume.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <Image
                    src={active.logo}
                    height={22}
                    width={22}
                    alt={active.name}
                  />
                  <Image src={logo} height={22} width={22} alt={name} />
                </div>

                <div className="flex mt-1">
                  <div className="h-1 w-[30%] bg-purple"></div>
                  <div className="h-1 w-[70%] bg-pink"></div>
                </div>
                <div className="flex justify-between items-center gap-2 mt-2">
                  <div>
                    <p className="text-gray-500">From {active.name}</p>
                    <p className="text-[0.85rem] mt-1 font-semibold">
                      ${active.info.bridge_volume.toLocaleString()}
                    </p>
                  </div>
                  <Image
                    src="/assets/arrow-left-right.svg"
                    height={16}
                    width={16}
                    alt="arrow"
                  />
                  <div>
                    <p className="text-gray-500">To {name}</p>
                    <p className="text-[0.85rem] mt-1 font-semibold">
                      ${info.bridge_volume.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className="fixed text-xs lg:text-sm top-full left-0 right-0 text-center lg:whitespace-nowrap">
          {name}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

type Props = DataType & {
  xPos: number;
  yPos: number;
  active: DataType;
  clickHandler: () => void;
};
