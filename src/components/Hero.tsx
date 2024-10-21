'use client';

import { DataType } from '@/data';
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
  const radius = 200; // Radius for outer circle (distance from inner circle)
  const innerCircleRadius = 50; // Radius for the inner circle
  const itemsCount = list.length;

  const onItemSwap = (item: DataType, index: number) => {
    setList((prevState) => {
      const newData = prevState.map((item, i) => (i === index ? active : item));
      return newData;
    });
    setActive(item);
  };

  return (
    <div className="bg-gradient-to-t from-black-dark to-black border border-black-light rounded-xl p-[2.5rem] flex justify-between gap-3">
      <div className="relative w-[500px] h-[500px]">
        <Lines active={active} list={list} radius={radius} />

        <InnerCircle innerCircleRadius={innerCircleRadius} {...active} />

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

      <div>
        <AnimatePresence mode="wait">
          {active && <Information key={active.slug} {...active} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
