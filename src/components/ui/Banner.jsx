import bannerIcon1 from "../../assets/icon2.png";
import bannerIcon2 from "../../assets/icon1.png";
import bannerIcon3 from "../../assets/icon3.png";
import banner from "../../assets/banner.png";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";

const Banner = () => {
  const [value, setValue] = useState();
  return (
    <div className="max-w-screen-xl w-10/12 mx-auto my-10">
      <div className="flex flex-col-reverse gap-10 mb-10 md:flex-row">
        <div className="md:w-1/2 text-center">
          <h1 className="text-4xl text-[#001E43] font-bold">
            Start Your IELTS Preparation <br /> And Get Desire Bands
          </h1>
          <ul className="text-base mt-2">
            <li>&#8226; Get access to IELTS Centralised Library</li>
            <li>&#8226; British Council Certified Teacher</li>
          </ul>
          <div className="p-10 mt-5 mb-8 shadow-slate-400 shadow-xl rounded-3xl">
            <div className="flex justify-evenly mb-5 items-center">
              <div className="flex justify-center items-center">
                <p className="text-white text-sm h-5 w-5 mr-2 flex justify-center items-center rounded-full bg-[#001E43]">
                  1
                </p>
                <span className="text-lg font-medium">Start</span>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-white text-sm h-5 w-5 mr-2 flex justify-center items-center rounded-full bg-[#001E43]">
                  2
                </p>
                <span className="text-lg font-medium">Fill Detail</span>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-white text-sm h-5 w-5 mr-2 flex justify-center items-center rounded-full bg-[#001E43]">
                  3
                </p>
                <span className="text-lg font-medium">Confirm</span>
              </div>
            </div>
            <h2 className="text-3xl text-left font-semibold text-[#001E43]">
              Free IELTS Classes
            </h2>
            <div className="">
              <form>
                <input
                  className="w-full outline-none shadow-lg shadow-slate-400 my-5 px-4 py-4 rounded-xl"
                  type="text"
                  placeholder="Enter your full name"
                />
                <PhoneInput
                  className="w-full outline-none shadow-lg shadow-slate-400 my-5 px-4 py-4 rounded-xl"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                />

                <button
                  className="w-full bg-[#001E43] text-white text-xl font-bold shadow-lg shadow-slate-400 my-5 px-4 py-4 rounded-xl"
                  type="submit"
                >
                  Continue
                </button>
                <p className="text-center text-sm">
                  By continuing, you agree to our Term of services & Privacy
                  policy
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex">
          <div className="flex justify-center items-center">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-[#0D1948] text-white text-center py-8 px-4 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="bg-white h-[70px] w-[70px] flex justify-center items-center rounded-full">
                <img className="h-[36px] w-[36px]" src={bannerIcon1} alt="" />
              </div>
            </div>
            <h2 className="text-[28px] mt-4 font-bold">Free IELTS Modules</h2>
            <p className="text-opacity-60 text-base">
              20,000+ Listed Properties across 5 countries.
            </p>
          </div>
          <div className="bg-[#0D1948] text-white text-center py-8 px-4 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="bg-white h-[70px] w-[70px] flex justify-center items-center rounded-full">
                <img className="h-[36px] w-[36px]" src={bannerIcon2} alt="" />
              </div>
            </div>
            <h2 className="text-[28px] mt-4 font-bold">Offline Classes</h2>
            <p className="text-opacity-60 text-base">
              20,000+ Listed Properties across 5 countries.
            </p>
          </div>
          <div className="bg-[#0D1948] text-white text-center py-8 px-4 rounded-3xl">
            <div className="flex justify-center items-center">
              <div className="bg-white h-[70px] w-[70px] flex justify-center items-center rounded-full">
                <img className="h-[36px] w-[36px]" src={bannerIcon3} alt="" />
              </div>
            </div>
            <h2 className="text-[28px] mt-4 font-bold">
              Live / Online Classes
            </h2>
            <p className="text-opacity-60 text-base">
              20,000+ Listed Properties across 5 countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
