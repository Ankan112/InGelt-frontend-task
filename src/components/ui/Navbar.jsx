import BannerIcon from "../../assets/icon.png";

const Navbar = () => {
  return (
    <div className="bg-[#051C45]">
      <div className="max-w-screen-xl py-1 w-10/12 mx-auto">
        <img className="w-[72px] h-[72px]" src={BannerIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
