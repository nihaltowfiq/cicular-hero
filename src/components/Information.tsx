'use client';

import { DataType } from '@/lib/types';
import { toCapitalizedWords } from '@/utils/helpers';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const Information = ({
  name,
  relations,
  website,
  logo,
  info,
}: DataType) => {
  const iconMapping: Record<string, string> = {
    bridge_volume: '/link-circle.png',
    inbound_volume: '/receive-square.png',
    outbound_volume: '/send-sqaure.png',
  };

  return (
    <motion.div
      className="border border-black-light p-4 rounded-lg w-full lg:w-[300px]"
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, x: '50%' }}
      transition={{ duration: 0.2, delay: 1, ease: 'linear' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Image src={logo} alt={name} width={56} height={56} />

        <div>
          <p>{name}</p>
          <p className="text-gray-500">{website}</p>
        </div>
      </div>

      <div className="overflow-hidden overflow-y-auto h-[435px] custom-scrollbar py-3 pr-2">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 rounded-xl bg-gradient-to-r from-black-light to-black px-4 mb-3"
          >
            <AccordionTrigger className="hover:no-underline items-start ">
              <div className="w-full">
                <p className="text-left mb-2 text-gray-400">
                  {relations.length} connections point
                </p>

                <div className="flex items-center justify-between -mr-4">
                  <Image
                    src={logo}
                    alt={name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-gray-800"
                  />
                  <div className="flex">
                    {relations.map(({ name, logo }, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt={name}
                        width={32}
                        height={32}
                        style={{
                          zIndex:
                            i !== 0
                              ? relations.length - i
                              : relations.length + 1,
                        }}
                        className={`w-8 h-8 rounded-full border-gray-800 ${
                          i !== 0 ? '-ml-4' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t border-black-light">
              {relations.map((el, i) => (
                <div key={i} className="pt-2 my-3">
                  <div className="flex gap-2">
                    <Image
                      src={logo}
                      alt={name}
                      width={18}
                      height={18}
                      className="w-6 h-6 rounded-full border-2 border-gray-800"
                    />

                    <Image
                      key={i}
                      src={el.logo}
                      alt={el.name}
                      width={18}
                      height={18}
                      className="w-6 h-6 rounded-full border-2 border-gray-800"
                    />
                  </div>

                  <div className="border-l-2 border-gray-500 pl-3 mt-2 mb-4">
                    <p className="text-gray-500 text-sm">
                      {name} &#8594; {el.name}
                    </p>
                    <p className="text-lg">
                      {info.bridge_volume.toLocaleString()}
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-500 pl-3 mt-2">
                    <p className="text-gray-500 text-sm">
                      {el.name} &#8594; {name}
                    </p>
                    <p className="text-lg">
                      {info.bridge_volume.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {Object.entries(info).map(([key, value], i) => {
          if (key === 'active_users') return null;

          return (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-r from-black-light to-black py-5 px-5 mb-3"
            >
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Image
                    alt={name}
                    width={18}
                    height={18}
                    src={iconMapping[key]}
                  />
                  <p className="text-gray-500">
                    {key == 'bridge_volume' ? `Total ` : ''}
                    {toCapitalizedWords(key)}:
                  </p>
                </div>
                <Image
                  src="/assets/information.svg"
                  alt="info"
                  width={18}
                  height={18}
                />
              </div>
              <p className="font-semibold text-lg mt-2">
                ${value.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
