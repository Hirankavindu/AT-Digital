import React from 'react'
import Image from "next/image";


function Section1() {
  return (
    <div className="flex flex-row items-center justify-center gap-16 py-12 px-44">
      <div className="w-[414px] h-[414px] bg-white relative">
        <Image
          src="/images/image2.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col ml-10">
        {" "}
        {/* Added margin for spacing */}
        <h1 className="text-[#6B3CC9] font-bold text-[27px]">
          Web & Mobile App Development
        </h1>
        <p className="w-[542px] pt-5 text-base">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <div className="mt-3">
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1