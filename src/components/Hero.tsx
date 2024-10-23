'use client';

import { useHeroMeasures } from '@/lib/hooks';
import { DataType, Nullish } from '@/lib/types';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Information } from './Information';
import { InnerCircle } from './InnerCircle';
import { Lines } from './Lines';
import { OuterCircle } from './OuterCircle';

export function Hero({ data }: { data: DataType[] }) {
  const [list, setList] = useState<Nullish<DataType>[]>(() =>
    // data.map((el, i) => (i === 0 ? null : el))
    data.filter((_, i) => i !== 0)
  );
  const [active, setActive] = useState<DataType>(() => data[0]);
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const { radius, containerWidth, containerHeight } = useHeroMeasures();

  const itemsCount = list.length;

  const onItemSwap = (item: Nullish<DataType>, index: number) => {
    setList((prevState) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // const newData = prevState.map((el) => (el === null ? active : el)) as any;
      // newData[index] = null;

      // console.log(newData);

      const newData = prevState.map((item, i) => (i === index ? active : item));
      return newData;
    });
    setActive(item as DataType);
  };

  return (
    <div className="mx-auto bg-gradient-to-t from-black-dark to-black border border-black-light rounded-xl p-[1rem] lg:p-[2.5rem] flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-4">
      <div
        style={{
          width: containerWidth,
          height: containerHeight,
        }}
        className="relative mx-auto lg:mx-0"
      >
        <Lines active={active} list={list} />

        <InnerCircle isMount={isMount} {...active} />

        {list.map((el, index) => {
          const angle = (index / itemsCount) * 360;
          const xPos = radius * Math.cos((angle * Math.PI) / 180);
          const yPos = radius * Math.sin((angle * Math.PI) / 180);

          if (el === null)
            return (
              <div
                key={index}
                className="absolute w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
              ></div>
            );

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
