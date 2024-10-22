'use client';

import { useHeroMeasures } from '@/lib/hooks';
import { DataType } from '@/lib/types';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Information } from './Information';
import { InnerCircle } from './InnerCircle';
import { Lines } from './Lines';
import { OuterCircle } from './OuterCircle';

export function Hero({ data }: { data: DataType[] }) {
  const [list, setList] = useState<DataType[]>(() =>
    data.filter((_, i) => i !== 0)
  );
  const [active, setActive] = useState<DataType>(() => data[0]);

  const { radius, containerWidth, containerHeight } = useHeroMeasures();

  const itemsCount = list.length;

  const onItemSwap = (item: DataType, index: number) => {
    setList((prevState) => {
      const newData = prevState.map((item, i) => (i === index ? active : item));
      return newData;
    });
    setActive(item);
  };

  return (
    <div className="mx-auto bg-gradient-to-t from-black-dark to-black border border-black-light rounded-xl p-[1rem] lg:p-[2.5rem] flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-4">
      <div
        style={{
          height: containerHeight,
          width: containerWidth,
        }}
        className="relative mx-auto lg:mx-0"
      >
        {/* w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] */}
        <Lines active={active} list={list} />

        <InnerCircle {...active} />

        {list.map((el, index) => {
          const angle = (index / itemsCount) * 360;
          const xPos = radius * Math.cos((angle * Math.PI) / 180);
          const yPos = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <OuterCircle
              key={index}
              active={active}
              {...el}
              xPos={xPos}
              yPos={yPos}
              clickHandler={() => onItemSwap(el, index)}
            />
          );
        })}
      </div>

      <div className="w-full lg:w-fit">
        <AnimatePresence mode="wait">
          {active && <Information key={active.slug} {...active} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
