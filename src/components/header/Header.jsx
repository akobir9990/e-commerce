import phoneIcon from "../../assets/phone.png";
export default function Header() {
  return (
    <div>
      <div className="container flex justify-between items-center py-6">
        <div className="flex text-[18px] gap-[12.8px]">
          <div className="burger">burger</div>Меню
        </div>
        <div className="font-[montserrat-600] text-[40px]">LANDING</div>
        <div className="font-[ptRootUI-400] flex items-center text-4">
          <img className="w-4 h-4" src={phoneIcon} alt="" />
          +7 777 777 77 77
        </div>
      </div>
    </div>
  );
}
