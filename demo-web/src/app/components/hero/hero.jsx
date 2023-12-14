import React from "react";

function Hero() {
  return (
    <div
      className="bg-cover bg-center text-white h-screen flex items-center justify-center w-{1440px} h-screen"
      style={{
        backgroundImage: "url('images/heroImage.png')",
        filter: "brightness(98%)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 ml-16 mb-10 "
        style={{
          width: "630px",
          height: "306px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] flex items-center justify-center">
          <div
            style={{
              width: "556px",
              height: "192px",
            }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold text-white">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>
            <div className="mt-3"><button
              className="text-transform: uppercase font-bold text-sm mt-2.5 text-white cursor-pointer rounded outline-none bg-[#F28D35] w-[214px] h-[38px]"
            >
              Get free consultation
            </button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
