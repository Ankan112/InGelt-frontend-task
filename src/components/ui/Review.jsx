import quotes from "../../assets/Quotes.png";
import star from "../../assets/star.png";
import reviewImage from "../../assets/Image.png";
import reviewBg from "../../assets/Rectangle 5423.png";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
const Review = () => {
  return (
    <div className="max-w-screen-xl my-20 w-10/12 mx-auto">
      <div className="review-bg">
        <div className="w-10/12 mx-auto pt-10 p-10 relative">
          <div className="">
            <div>
              <h2 className="text-4xl mt-8 font-semibold">Freda Collier</h2>
              <div className="border-b-2 border-solid border-[#041C45] mt-1 w-[100px]"></div>
            </div>
            <div className="mt-[70px]">
              <div>
                <img src={quotes} alt="" />
              </div>
              <p className="text-xl font-medium w-1/2 mt-2">
                Ipsum vel nobis doloremque est aut non accusantium vero
                molestias. Et est minima dolorem eum modi atque sint nobis. Enim
                quod facere. Reiciendis necessitatibus ipsam non aspernatur
                voluptate id.
              </p>
              <div className="ml-[300px]">
                <img src={quotes} alt="" />
              </div>
            </div>
            <div className="mt-12">
              <img src={star} alt="" />
            </div>
          </div>
          <div className="absolute top-0 -right-[180px]">
            <div>
              <img className="" src={reviewBg} alt="" />
            </div>
            <div className="absolute top-10 right-20">
              <img src={reviewImage} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center absolute -bottom-[190px] left-[180px]">
            <div>
              <img src={leftArrow} alt="" />
            </div>
            <h1 className="text-5xl font-semibold px-4">
              01 <sub className="text-lg font-medium">/ 04</sub>
            </h1>
            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
