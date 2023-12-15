import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-custom-purple h-1/2 w-full flex md:flex-row flex-col justify-between items-start p-10 pr-14">
        <div className="pt-3 mr-52">
          <ul>
            <a href="/">
              <img
                src="/WhiteLogo.png"
                alt="Logo"
                className="h-{36px} w-{238.89px} pb-6"
              />
            </a>
            <div className="text-white text-base font-normal w-[430px] h-[57px] hover:text-yellow-200 cursor-pointer">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results
            </div>
          </ul>
        </div>
        <div className="pt-5 ">
          <ul>
            <p className="text-white font-semibold text-[21px] pb-4">
              Our Technologies
            </p>
            <li className="text-white text-md pb-2 font-normal hover:text-blue-600 cursor-pointer">
              React Js
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-600 cursor-pointer">
              Gatsby
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-600 cursor-pointer">
              NextJs
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-600 cursor-pointer">
              NodeJs
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-600 cursor-pointer">
              GraphQL
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-600 cursor-pointer">
              Laravel
            </li>
          </ul>
        </div>
        <div className="pt-5">
          <ul>
            <p className="text-white font-semibold text-[21px] pb-4">
              Our Services
            </p>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-400 cursor-pointer">
              social Media Marketing
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-400 cursor-pointer">
              Web & Mobile App Development
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-400 cursor-pointer">
              Data & Analytics
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-400 cursor-pointer">
              Google Marketing Solution
            </li>
            <li className="text-white text-sm pb-2 font-normal hover:text-blue-400 cursor-pointer">
              Search Engine Optimization
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center pb-5 bg-custom-purple">
        <div className="flex flex-row relative">
          <div className="border-t border-white w-[630px] absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <h1 className="text-white font-normal text-sm pr-3 pt-2">
            Privacy Policy
          </h1>
          <h1 className="text-white font-normal text-sm pr-3 pt-2">|</h1>
          <h1 className="text-white font-normal text-sm pr-3 pt-2">
            Terms & Conditions
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
