import React from 'react'
import Image from "next/image";


function Section1() {
  return (
    <div className="flex flex-row items-center justify-center gap-16 py-12 px-44 max-[1200px]:px-5 max-[768px]:px-10 max-[680px]:px-5 max-[375px]:flex-col">
      <div className="w-[414px] h-[414px] bg-white relative max-[1200px]:h-[346px] max-[1200px]:w-[346px] max-[1024px]:w-[300px] max-[1024px]:h-[300px] max-[768px]:h-[275px] max-[768px]:w-[275px] max-[680px]:h-[200px] max-[680px]:w-[200px] max-[375px]:h-[275px] max-[375px]:w-[275px] ">
        <Image
          src="/images/image2.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col ml-10 max-[768px]:w-[393px] max-[1200px]:ml-5 max-[680px]:ml-2 max-[680px]:w-[300px]">
        {" "}
        {/* Added margin for spacing */}
        <h1 className="text-[#6B3CC9] font-bold text-[27px] max-[680px]:text-[25px] max-[375px]:text-center">
          Web & Mobile App Development
        </h1>
        <p className="w-[542px] pt-5 text-base max-[768px]:w-[393px] max-[680px]:w-[300px] max-[375px]:text-center">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <div className="mt-3 flex max-[375px]:items-center max-[375px]:justify-center">
          <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[129px] h-[38px] ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1