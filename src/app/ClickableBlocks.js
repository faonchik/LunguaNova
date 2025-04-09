import React from 'react';

const ClickableBlocks = ({ handleClick }) => {
  return (
    <>
      <div
        className="w-[93px] h-[18px] left-[36px] top-[77px] absolute text-center justify-start text-white text-base font-semibold font-['Inter'] hover:bg-gray-700 active:bg-gray-500"
        onClick={() => handleClick('ВЗРОСЛЫЙ')}
      >
        ВЗРОСЛЫЙ
      </div>
      <div
        className="w-[90.80px] left-[197.54px] top-[77px] absolute text-center justify-start text-[#47b6f2] text-base font-semibold font-['Inter'] hover:bg-blue-700 active:bg-blue-500"
        onClick={() => handleClick('РЕБЕНОК')}
      >
        РЕБЕНОК
      </div>
    </>
  );
};

export default ClickableBlocks;
