import icon1 from "../../assets/bxs_phone-call.png";
import icon2 from "../../assets/carbon_location-filled.png";
import icon3 from "../../assets/ic_sharp-email.png";
import icon4 from "../../assets/g1.png";
import icon5 from "../../assets/g3.png";
import icon6 from "../../assets/g2.png";

const Contact = () => {
  return (
    <div className="max-w-screen-xl my-5 w-10/12 mx-auto">
      <h1 className="text-center text-[42px] font-semibold text-[#0D1948]">
        Get in Touch with Us
      </h1>
      <div className="border-b-2 border-solid border-[#041C45] w-[200px] mx-auto"></div>
      <p className="text-2xl font-medium text-center text-gray-700 mt-3">
        Elevate Your Institute Management and Student Success - Contact Us Now!
      </p>
      <div className="flex flex-col md:flex-row mt-10 relative">
        <div className="md:w-[80%] shadow-lg shadow-slate-400 py-20 pl-20 rounded-s-3xl">
          <div>
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p className="text-2xl font-medium">
              Feel Free to contact us any time. We will get <br /> back to you
              as soon as we can!
            </p>
            <form>
              <div className="mt-8">
                <p>Name</p>
                <input
                  type="text"
                  className="outline-none w-[60%] border-b-2 border-solid border-black"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-8">
                <p>Email</p>
                <input
                  type="text"
                  className="outline-none w-[60%] border-b-2 border-solid border-black"
                  placeholder="Your Email"
                />
              </div>
              <div className="mt-8">
                <p>Message</p>
                <input
                  type="textarea"
                  className="outline-none w-[60%] border-b-2 border-solid border-black"
                  placeholder="Your Message"
                />
              </div>
              <div className="mt-14">
                <button
                  className="w-[60%] bg-[#0D1948] py-2 rounded-xl text-white"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#001E43] w-[400px] rounded-s-3xl mx-auto absolute top-[150px] right-0">
            <div className="text-white p-16 ">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="flex items-center mt-3">
                <div>
                  <img className="w-5 h-5" src={icon1} alt="" />
                </div>
                <h4 className="text-base font-medium ml-1">+1012 3456 789</h4>
              </div>
              <div className="flex items-center mt-5">
                <div>
                  <img className="w-5 h-5" src={icon2} alt="" />
                </div>
                <h4 className="text-base font-medium ml-1">demo@gmail.com</h4>
              </div>
              <div className="flex mt-5">
                <div>
                  <img className="w-5 h-5 mt-1" src={icon3} alt="" />
                </div>
                <h4 className="text-base font-medium ml-1">
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                  States
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] bg-[#0064E1]">
          <div className="flex justify-evenly h-full pb-6 items-end">
            <div>
              <img src={icon4} alt="" />
            </div>
            <div>
              <img src={icon5} alt="" />
            </div>
            <div>
              <img src={icon6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
