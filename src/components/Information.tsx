'use client';

import { DataType } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Information = ({ name, logo, info }: DataType) => {
  return (
    <motion.div
      className="border border-black-light p-4 rounded-lg w-[300px]"
      initial={{ x: '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-50%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Image src={logo} alt={name} width={56} height={56} />

        <div>
          <p>{name}</p>
          <p className="text-gray-500">https://google.com/</p>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-black-light to-black py-2 px-4 mb-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/assets/information.svg"
              alt={name}
              width={18}
              height={18}
            />
            <p>Total Bridge Volume:</p>
          </div>
          <Image
            src="/assets/information.svg"
            alt="info"
            width={18}
            height={18}
          />
        </div>
        <p className="font-semibold text-lg">
          ${info.bridge_volume.toLocaleString()}
        </p>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-black-light to-black py-2 px-4 mb-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/assets/information.svg"
              alt={name}
              width={18}
              height={18}
            />
            <p>Total Bridge Volume:</p>
          </div>
          <Image
            src="/assets/information.svg"
            alt="info"
            width={18}
            height={18}
          />
        </div>
        <p className="font-semibold text-lg">
          ${info.bridge_volume.toLocaleString()}
        </p>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-black-light to-black py-2 px-4 mb-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/assets/information.svg"
              alt={name}
              width={18}
              height={18}
            />
            <p>Total Bridge Volume:</p>
          </div>
          <Image
            src="/assets/information.svg"
            alt="info"
            width={18}
            height={18}
          />
        </div>
        <p className="font-semibold text-lg">
          ${info.bridge_volume.toLocaleString()}
        </p>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-black-light to-black py-2 px-4 mb-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/assets/information.svg"
              alt={name}
              width={18}
              height={18}
            />
            <p>Total Bridge Volume:</p>
          </div>
          <Image
            src="/assets/information.svg"
            alt="info"
            width={18}
            height={18}
          />
        </div>
        <p className="font-semibold text-lg">
          ${info.bridge_volume.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};
