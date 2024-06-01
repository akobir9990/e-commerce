import telegram from "../../../assets/icons/telegram.png";
import vk from "../../../assets/icons/vk.png";
import ok from "../../../assets/icons/ok.png";

export default function Footer() {
  return (
    <div className="bg-secondary md:pb-4 pb-20 py-4">
      <div className="container grid gap-10 justify-center relative">
        <h1 className="text-40 font-montserrat-semibold">LANDING</h1>
        <div className="flex justify-between">
          <div className="size-10 flex items-center justify-center">
            <img src={telegram} alt="" className="w-6 h-auto" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <img src={vk} alt="" className="w-6 h-auto" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <img src={ok} alt="" className="h-6 " />
          </div>
        </div>
      </div>
    </div>
  );
}
