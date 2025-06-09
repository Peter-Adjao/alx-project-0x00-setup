import Image from "next/image";

import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[300px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ml-4">
        <Image src="/assets/images/house.png" alt="House"
         width={100} height={100} />

      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">
            Sideman, Bali, Indonesia
          </p>
        </div>
        <div className="flex items-center">
         <Image src="/assets/images/star.png" alt="Star" width={20} height={20} />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {/* Amenities grid */}
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          {/* Bed */}
          <div className="flex items-center">
            {/* [SVG] */}
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          {/* Guest */}
          <div className="flex items-center">
            {/* [SVG] */}
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          {/* Bathroom */}
          <div className="flex items-center">
            {/* [SVG] */}
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
