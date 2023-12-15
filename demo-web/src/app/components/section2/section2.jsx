import React from 'react'
import Image from "next/image";

function Section2() {
  return (
    <div className="flex flex-row items-center justify-center gap-16 py-12 px-44">
      <div className="flex flex-col ml-10">
        {" "}
        {/* Added margin for spacing */}
        <h1 className="text-[#6B3CC9] font-bold text-[27px]">
          Digital Strategy Consulting
        </h1>
        <p className="w-[542px] pt-5 text-base">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <div className="mt-3">
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-[414px] h-[414px] bg-white relative">
        <Image
          src="/images/image1.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default Section2