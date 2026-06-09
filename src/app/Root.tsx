import { Outlet } from "react-router";
import { StatusBar } from "./components/StatusBar";

export default function Root() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gray-100 flex items-center justify-center">
      <div className="relative w-[390px] h-[844px] shrink-0 bg-white rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-black flex flex-col mx-auto p-[0px]">
        {/* Fixed Status Bar */}
        <StatusBar />

        {/* Notch simulation */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-[110] pointer-events-none">
          <div className="w-40 h-6 bg-black rounded-b-3xl"></div>
        </div>

        <div className="flex-1 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
