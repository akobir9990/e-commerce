import phoneIcon from "../../../assets/phone.png";

export default function Header() {
  return (
    <div>
      <div className="container flex justify-between items-center py-6">
        <div className="flex text-lg gap-[12.8px]">
          <div className="">burger</div>Меню
        </div>
        <div className="font-montserrat-semibold text-[40px]">LANDING</div>
        <div className="font-pt-root-ui-regular flex items-center text-[8px]">
          <img className="size-4" src={phoneIcon} alt="" />
          +7 777 777 77 77
        </div>
      </div>
    </div>
  );
}
