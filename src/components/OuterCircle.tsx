import { DataType } from '@/data';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';

export const OuterCircle = ({
  xPos,
  yPos,
  logo,
  name,
  info,
  clickHandler,
}: Props) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 !w-[90x] !h-[90px]"
      style={{
        top: `calc(50% + ${yPos}px)`,
        left: `calc(50% + ${xPos}px)`,
      }}
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
          onClick={clickHandler}
          className="border cursor-pointer border-black-light rounded-full p-2 bg-black bg-gradient-to-tr from-black to-[#1f1d22] drop-shadow-lg"
        >
          <Image
            src={logo}
            alt={name}
            height={75}
            width={75}
            className="object-cover"
          />
        </div>
      </Tooltip>

      <p className="text-center">{name}</p>
    </div>
  );
};

type Props = DataType & {
  xPos: number;
  yPos: number;
  clickHandler: () => void;
};
