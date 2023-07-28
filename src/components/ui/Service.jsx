import serviceImage from "../../assets/service-image.png";
import cardImage1 from "../../assets/1.png";
import cardImage2 from "../../assets/23.png";
import cardImage3 from "../../assets/24.png";
import cardImage4 from "../../assets/25.png";
import cardIcon1 from "../../assets/icon1.png";
import cardIcon2 from "../../assets/icon2.png";
import cardIcon3 from "../../assets/icon3.png";
import cardIcon4 from "../../assets/icon4.png";

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-[#001E43] to-[#570169] rounded-[70px]">
      <div className="max-w-screen-xl w-10/12 pt-20 mx-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="mt-10 md:mt-0">
            <img src={serviceImage} alt="serviceImage" />
          </div>
          <div className=" flex justify-center items-center">
            <div className="text-white">
              <h2 className="font-bold text-[55px] text-center">
                Our Services
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative mt-8 md:mt-0">
                  <div className="absolute left-[35px] -top-[35px] bg-white h-[70px] w-[70px] flex justify-center items-center rounded-[26px] border border-solid border-[#B3BCC7]">
                    <img className="h-[36px] w-[36px]" src={cardIcon1} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={cardImage1} alt="" />
                  </div>
                </div>
                <div className="relative mt-8 md:mt-0">
                  <div className="absolute left-[35px] -top-[35px] bg-white h-[70px] w-[70px] flex justify-center items-center rounded-[26px] border border-solid border-[#B3BCC7]">
                    <img className="h-[36px] w-[36px]" src={cardIcon2} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={cardImage2} alt="" />
                  </div>
                </div>

                <div className="relative mt-8">
                  <div className="absolute left-[35px] -top-[35px] bg-white h-[70px] w-[70px] flex justify-center items-center rounded-[26px] border border-solid border-[#B3BCC7]">
                    <img className="h-[36px] w-[36px]" src={cardIcon3} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={cardImage4} alt="" />
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="absolute left-[35px] -top-[35px] bg-white h-[70px] w-[70px] flex justify-center items-center rounded-[26px] border border-solid border-[#B3BCC7]">
                    <img className="h-[36px] w-[36px]" src={cardIcon4} alt="" />
                  </div>
                  <div>
                    <img className="w-full" src={cardImage3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
