import gelogoImg from "../../assets/gelogo.png";

const Header = () => {
  return (
    <header className="flex justify-center mb-6">
      <div className="w-max bg-gray-900 p-7 rounded-full">
        <div>
          <img className="h-48" src={gelogoImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
