'use client';

import { DataType } from '@/data';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { InnerCircle } from './InnerCircle';
import { Lines } from './Lines';
import { OuterCircle } from './OuterCircle';

export function Hero({ data }: { data: DataType[] }) {
  const [list, setList] = useState<DataType[]>(() =>
    data.filter((_, i) => i !== 0)
  );
  const [active, setActive] = useState<DataType>(() => data[0]);
  const radius = 220; // Radius for outer circle (distance from inner circle)
  const innerCircleRadius = 50; // Radius for the inner circle
  const itemsCount = list.length;

  return (
    <AnimatePresence>
      <div className="bg-gradient-to-t from-black-dark to-black border border-black-light rounded-xl p-[1.5rem] flex">
        <div className="relative w-[600px] h-[600px] ">
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
                clickHandler={() => {
                  setList((prevState) => {
                    const newData = prevState.map((item, i) =>
                      i === index ? active : item
                    );
                    return newData;
                  });
                  setActive(el);
                }}
              />
            );
          })}
        </div>

        <div></div>
      </div>
    </AnimatePresence>
  );
}
