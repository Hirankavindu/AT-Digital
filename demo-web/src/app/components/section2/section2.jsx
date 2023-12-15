import React from 'react'
import Image from "next/image";

function Section2() {
  return (
    <div className="flex flex-row items-center justify-center py-12 max-[1200px]:px-5 max-[768px]:px-10 max-[680px]:px-5 max-[375px]:flex-col">
      <div className="flex flex-col ml-10 max-[1200px]:ml-5 max-[768px]:w-[393px] max-[680px]:ml-2 max-[680px]:w-[300px]">
        {" "}
        {/* Added margin for spacing */}
        <div className=" bg-white relative invisible max-[375px]:h-[275px] max-[375px]:w-[275px] max-[375px]:visible">
          <Image
            src="/images/image1.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h1 className="text-[#6B3CC9] font-bold text-[27px] max-[680px]:text-[25px] max-[375px]:text-center">
          Digital Strategy Consulting
        </h1>
        <p className="w-[542px] pt-5 text-base max-[768px]:w-[393px] max-[680px]:w-[300px] max-[375px]:text-center">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <div className="mt-3 flex max-[375px]:items-center max-[375px]:justify-center">
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-[414px] h-[414px] bg-white relative max-[1200px]:h-[346px] max-[1200px]:w-[346px] max-[1024px]:w-[300px] max-[1024px]:h-[300px] max-[768px]:h-[275px] max-[768px]:w-[275px] max-[680px]:h-[200px] max-[680px]:w-[200px] max-[375px]:invisible max-[375px]:h-0 max-[375px]:w-0">
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