import React from "react";

function Hero() {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        {/* <div
          className="h-screen w-full bg-cover bg-no-repeat bg-center invisible max-[768px]:visible"
          style={{
            backgroundImage: "url('images/heroImage.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "brightness(98%)",
            
          }}
        ></div> */}
        <div
          className=" relative h-screen w-full bg-cover bg-no-repeat bg-center max-[768px]:bg-auto max-[768px]:bg-top  max-[680px]:bg-auto max-[680px]:bg-top max-[680px]:w-full max-[680px]:h-screen max-[375px]:bg-auto max-[375px]:bg-top max-[375px]:w-full max-[375px]:h-screen"
          style={{
            backgroundImage: "url('images/heroImage.png')",
            filter: "brightness(98%)", // Set the height to 100vh for full screen coverage
          }}
        ></div>

        {/* Gradient Box */}
        <div className="absolute bottom-0 left-0 ml-14 w-[630px] h-[306px] mb-10 max-[768px]:w-full max-[768px]:m-0 max-[768px]:p-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] flex items-center justify-center">
            <div className="mb-16 w-[556px] h-[192px]">
              <h1 className="text-5xl font-bold text-white max-[375px]:text-4xl max-[375px]:pl-3">
                We crush your competitors, goals, and sales records - without
                the B.S.
              </h1>
              {/* Button */}
              <div className="mt-3 max-[375px]:pl-3">
                <button className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[214px] h-[38px]">
                  Get free consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
