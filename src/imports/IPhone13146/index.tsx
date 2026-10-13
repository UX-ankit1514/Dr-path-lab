import { useState } from "react";
import { useNavigate } from "react-router";
import { StatusBar } from "../../app/components/StatusBar";
import { IconTile, GridIcon, AllergyIcon, DropIcon, ThermometerIcon, HeartIcon, ThyroidIcon } from "../../app/components/PremiumIcons";
import svgPaths from "./svg-1cy9r5xgtn";
import imgImage10 from "./cfd573ee1adefc419b43c48ea5895bdeda84ae74.png";
import imgRectangle from "./4faa0b26208ed3c9ed281854e2b22e384bc5ff31.png";
import imgRectangle1 from "./b8d6bb4c995efcaab809fe7dc6e41d9e46ec8eb3.png";
import imgRectangle2 from "./61a3a74334fc54d53ef841d7044d0d774b983d9f.png";
import imgRectangle3 from "./31bcba805d2e0ea8eb9c6d3e7802555e3e6a447c.png";
import imgRectangle10 from "./ebeb1c8afe52486405af6469f3c9c2161b45cafb.png";
import imgRectangle11 from "./92591079146e27cea8940201aa0f26b595444508.png";
import imgRectangle12 from "./c1c551673b78fd99138a93c97585624779f05ef0.png";

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.05%_0.78%_8.34%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.108 21.814">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p28a07500} fill="var(--fill-0, #233F64)" />
            <path d={svgPaths.p1f3744c0} fill="var(--fill-0, #233F64)" />
            <path d={svgPaths.pc5538e0} fill="var(--fill-0, #233F64)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p3651e400} fill="var(--fill-0, #233F64)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteSearchLine() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:search-line">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_18.75%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 22">
          <g id="Group">
            <path d={svgPaths.p3ff37a00} id="Vector" stroke="var(--stroke-0, #233F64)" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1150b400} id="Vector_2" stroke="var(--stroke-0, #233F64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineVoice() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-park-outline:voice">
      <Group1 />
    </div>
  );
}

function Frame1() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[20px] right-[20px] px-[8px] py-[13px] rounded-[8px] top-[162px] cursor-pointer active:bg-gray-50 transition-colors"
      onClick={() => navigate("/search")}
    >
      <div aria-hidden className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <MingcuteSearchLine />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#233f64] text-[12px]">Search for Sugar fasting Test</p>
      <IconParkOutlineVoice />
    </div>
  );
}

function MdiCartOutline() {
  return (
    <div className="-translate-y-1/2 absolute right-[20px] size-[24px] top-[calc(50%+0.5px)]" data-name="mdi:cart-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:cart-outline">
          <path d={svgPaths.p29567c00} fill="var(--fill-0, #233F64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#fbc52d] h-[55px] left-0 overflow-clip top-[62px] w-[390px]">
      <div className="absolute h-[31px] left-[20px] top-[12px] w-[116px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[428.57%] left-[-4.31%] max-w-none top-[-165.71%] w-[109.48%]" src={imgImage10} />
        </div>
      </div>
      <MdiCartOutline />
    </div>
  );
}

function EpArrowUpBold() {
  const navigate = useNavigate();
  return (
    <div className="relative size-[16px] cursor-pointer" data-name="ep:arrow-up-bold" onClick={() => navigate("/")}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ep:arrow-up-bold">
          <path d={svgPaths.p1005cd00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[13px] items-center justify-center left-[20px] top-[133px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
        <div className="-rotate-90 flex-none">
          <EpArrowUpBold />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#233f64] text-[12px] whitespace-nowrap">{`Test & Packages`}</p>
    </div>
  );
}

function BoxiconsLocationFilled() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p27ffa680} fill="var(--fill-0, #FE0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start right-[20px] top-[132px]">
      <BoxiconsLocationFilled />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#233f64] text-[12px] whitespace-nowrap">Patna</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] px-[4px] py-[2px] rounded-[2px] top-[33px]" style={{ backgroundImage: "linear-gradient(107.322deg, rgb(255, 211, 128) 14.949%, rgb(255, 255, 255) 53.045%, rgb(255, 216, 143) 120.56%)" }}>
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(102.319deg, rgb(242, 201, 76) 8.3619%, rgb(140, 116, 44) 106.85%)" }}>
        Popular
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white border border-[#f2f2f2] border-solid h-[97px] left-[20px] overflow-clip rounded-[8px] top-[273px] w-[170px]">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[11px] text-black top-[11px] whitespace-nowrap">Full Body Checkup</p>
      <div className="-translate-y-1/2 absolute h-[47px] left-[105px] top-[calc(50%-4px)] w-[52px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.73%] left-0 max-w-none top-[-17.05%] w-full" src={imgRectangle} />
        </div>
      </div>
      <Frame6 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">₹1499</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[96px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] px-[4px] py-[2px] rounded-[2px] top-[33px]" style={{ backgroundImage: "linear-gradient(107.322deg, rgb(255, 211, 128) 14.949%, rgb(255, 255, 255) 53.045%, rgb(255, 216, 143) 120.56%)" }}>
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(102.319deg, rgb(242, 201, 76) 8.3619%, rgb(140, 116, 44) 106.85%)" }}>
        Popular
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white border border-[#f2f2f2] border-solid h-[97px] left-[20px] overflow-clip rounded-[8px] top-[380px] w-[170px]">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[11px] text-black top-[11px] whitespace-nowrap">Basic Health Care</p>
      <div className="-translate-y-1/2 absolute h-[47px] left-[105px] top-[calc(50%-4px)] w-[52px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[151.43%] left-[-15.39%] max-w-none top-[-22.86%] w-[138.47%]" src={imgRectangle1} />
        </div>
      </div>
      <Frame8 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">₹499</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[96px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] px-[4px] py-[2px] rounded-[2px] top-[33px]" style={{ backgroundImage: "linear-gradient(107.322deg, rgb(255, 211, 128) 14.949%, rgb(255, 255, 255) 53.045%, rgb(255, 216, 143) 120.56%)" }}>
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(102.319deg, rgb(242, 201, 76) 8.3619%, rgb(140, 116, 44) 106.85%)" }}>
        Popular
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white border border-[#f2f2f2] border-solid h-[97px] left-[calc(40%+44px)] overflow-clip rounded-[8px] top-[273px] w-[170px]">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[11px] text-black top-[11px] whitespace-nowrap">Diabetes Care</p>
      <div className="-translate-y-1/2 absolute h-[52px] left-[100px] top-[calc(50%-6.5px)] w-[57px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Frame10 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">₹699</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[96px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] px-[4px] py-[2px] rounded-[2px] top-[33px]" style={{ backgroundImage: "linear-gradient(107.322deg, rgb(255, 211, 128) 14.949%, rgb(255, 255, 255) 53.045%, rgb(255, 216, 143) 120.56%)" }}>
      <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(102.319deg, rgb(242, 201, 76) 8.3619%, rgb(140, 116, 44) 106.85%)" }}>
        Popular
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white border border-[#f2f2f2] border-solid h-[97px] left-[calc(40%+44px)] overflow-clip rounded-[8px] top-[380px] w-[170px]">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[11px] text-black top-[11px] whitespace-nowrap">Thyroid Profile</p>
      <div className="-translate-y-1/2 absolute h-[52px] left-[100px] top-[calc(50%-6.5px)] w-[57px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.49%] left-[-13.73%] max-w-none top-[-6.84%] w-[113.73%]" src={imgRectangle3} />
        </div>
      </div>
      <Frame12 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[11px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">₹699</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[96px] not-italic text-[#23408e] text-[10px] top-[72px] whitespace-nowrap">View Details</p>
    </div>
  );
}

const concernTabs = [
  { label: "All", Icon: GridIcon },
  { label: "Allergies", Icon: AllergyIcon },
  { label: "Diabetes", Icon: DropIcon },
  { label: "Fever", Icon: ThermometerIcon },
  { label: "Heart", Icon: HeartIcon },
  { label: "Thyroid", Icon: ThyroidIcon },
];

function ConcernTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="absolute left-[20px] top-[524px] flex gap-[10px]">
      {concernTabs.map(({ label, Icon }, i) => {
        const selected = i === active;
        return (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`w-[50px] h-[62px] rounded-[12px] flex flex-col items-center justify-start pt-[7px] gap-[4px] border transition-all duration-150 active:scale-[0.96] ${
              selected
                ? "bg-gradient-to-b from-[#FFF7DA] to-[#FFEBB0] border-[#FBDB80] shadow-[0_4px_12px_-6px_rgba(251,197,45,0.7)]"
                : "bg-white border-[#EEF0F4] shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
            }`}
          >
            <IconTile size={30} radius={9} tint={selected ? "#FFE7A0" : "#F2F5FB"}>
              <Icon size={19} strokeWidth={1.7} />
            </IconTile>
            <p className="font-['Inter',sans-serif] font-semibold text-[8px] leading-[10px] text-[#233F64] text-center">
              {label}
            </p>
          </button>
        );
      })}
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_359)" id="material-symbols:info-outline-rounded">
          <path d={svgPaths.p2fe3bf00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_359">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center justify-center left-[63px] top-[55px]">
      <MaterialSymbolsInfoOutlineRounded />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">1 Test</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_20.83%_12.5%_20.84%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 9.16667">
          <g id="Group">
            <path d={svgPaths.p7d457a0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
            <path d={svgPaths.p8924580} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerFile() {
  return (
    <div className="overflow-clip relative shrink-0 size-[11px]" data-name="tabler:file">
      <Group2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[148px] top-[54px]">
      <TablerFile />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">Reports in 24 hrs</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[#d1ffda] content-stretch flex items-center justify-center right-[20px] p-[4px] rounded-[5px] top-[6px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#43a155] text-[10px] whitespace-nowrap">20% OFF</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#fbc62c] content-stretch flex items-center justify-center right-[20px] px-[8px] py-[6px] rounded-[8px] top-[62px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">Add to cart</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#fefefe] h-[92px] left-[20px] right-[20px] rounded-[8px] top-[603px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[49px] left-[5px] top-[14px] w-[50px]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[62px] not-italic text-[12px] text-black top-[17px] whitespace-nowrap">Vitamin D ( 25-Hydroxy)</p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[62px] not-italic text-[8px] text-[rgba(0,0,0,0.6)] top-[34px] whitespace-nowrap">Detects Vitamin D deficiency</p>
        <Frame21 />
        <Frame22 />
        <Frame23 />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] right-[20px] not-italic text-[#23408e] text-[10px] top-[31px] whitespace-nowrap">₹959</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] right-[20px] line-through not-italic text-[#23408e] text-[10px] top-[45px] whitespace-nowrap">₹1,119</p>
        <Frame24 />
      </div>
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_359)" id="material-symbols:info-outline-rounded">
          <path d={svgPaths.p2fe3bf00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_359">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center justify-center left-[63px] top-[55px]">
      <MaterialSymbolsInfoOutlineRounded1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">1 Test</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_20.83%_12.5%_20.84%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 9.16667">
          <g id="Group">
            <path d={svgPaths.p7d457a0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
            <path d={svgPaths.p8924580} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerFile1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[11px]" data-name="tabler:file">
      <Group3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[148px] top-[54px]">
      <TablerFile1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">Reports in 24 hrs</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#d1ffda] content-stretch flex items-center justify-center right-[20px] p-[4px] rounded-[5px] top-[6px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#43a155] text-[10px] whitespace-nowrap">20% OFF</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-[#fbc62c] content-stretch flex items-center justify-center right-[20px] px-[8px] py-[6px] rounded-[8px] top-[62px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">Add to cart</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#fefefe] h-[92px] left-[20px] right-[20px] rounded-[8px] top-[706px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[62px] not-italic text-[12px] text-black top-[17px] whitespace-nowrap">HbA1c</p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[62px] not-italic text-[8px] text-[rgba(0,0,0,0.6)] top-[34px] whitespace-nowrap">Average blood sugar (2-3 months)</p>
        <Frame26 />
        <Frame27 />
        <Frame28 />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] right-[20px] not-italic text-[#23408e] text-[10px] top-[31px] whitespace-nowrap">₹959</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] right-[20px] line-through not-italic text-[#23408e] text-[10px] top-[45px] whitespace-nowrap">₹1,119</p>
        <Frame29 />
        <div className="-translate-y-1/2 absolute h-[48px] left-[3px] top-[calc(50%+1px)] w-[54px]" data-name="Rectangle">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[135.42%] left-[-0.13%] max-w-none top-[-18.75%] w-[100.27%]" src={imgRectangle11} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function MaterialSymbolsInfoOutlineRounded2() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="material-symbols:info-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_359)" id="material-symbols:info-outline-rounded">
          <path d={svgPaths.p2fe3bf00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_359">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center justify-center left-[63px] top-[55px]">
      <MaterialSymbolsInfoOutlineRounded2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">1 Test</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%_20.83%_12.5%_20.84%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 9.16667">
          <g id="Group">
            <path d={svgPaths.p7d457a0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
            <path d={svgPaths.p8924580} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.916667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerFile2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[11px]" data-name="tabler:file">
      <Group4 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[148px] top-[54px]">
      <TablerFile2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">Reports in 24 hrs</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#d1ffda] content-stretch flex items-center justify-center right-[20px] p-[4px] rounded-[5px] top-[6px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#43a155] text-[10px] whitespace-nowrap">20% OFF</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-[#fbc62c] content-stretch flex items-center justify-center right-[20px] px-[8px] py-[6px] rounded-[8px] top-[62px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">Add to cart</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[#fefefe] h-[92px] left-[20px] right-[20px] rounded-[8px] top-[809px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[62px] not-italic text-[12px] text-black top-[17px] whitespace-nowrap">Complete Blood Count (CBC)</p>
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[62px] not-italic text-[8px] text-[rgba(0,0,0,0.6)] top-[34px] whitespace-nowrap">Average blood sugar (2-3 months)</p>
        <Frame31 />
        <Frame32 />
        <Frame33 />
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] right-[20px] not-italic text-[#23408e] text-[10px] top-[31px] whitespace-nowrap">₹959</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] right-[20px] line-through not-italic text-[#23408e] text-[10px] top-[45px] whitespace-nowrap">₹1,119</p>
        <Frame34 />
        <div className="-translate-y-1/2 absolute h-[44px] left-[7px] top-1/2 w-[50px]" data-name="Rectangle">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[154.59%] left-0 max-w-none top-[-27.29%] w-full" src={imgRectangle12} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between leading-[normal] left-[20px] right-[20px] not-italic top-[9px] whitespace-nowrap">
      <p className="relative shrink-0 text-[10px] text-[rgba(0,0,0,0.7)]">Cart is Empty (0 items)</p>
      <p className="relative shrink-0 text-[#23408e] text-[14px]">₹0</p>
    </div>
  );
}

function MingcuteArrowUpLine() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="mingcute:arrow-up-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p2021c80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute bg-[#fde9b6] content-stretch flex gap-[8px] items-center justify-center left-[20px] right-[20px] px-[8px] py-[11px] rounded-[8px] top-[37px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.8)]">Proceed to Booking</p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
        <div className="flex-none rotate-90">
          <MingcuteArrowUpLine />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[93px] left-0 right-0 overflow-clip rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] bottom-0">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function IPhone() {
  return (
    <div className="relative bg-white w-[390px] min-h-[844px] mx-auto overflow-hidden" data-name="iPhone 13 & 14 - 2">
      <StatusBar />
      <Frame1 />
      <Frame3 />
      <Frame4 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[20px] not-italic text-[#233f64] text-[12px] top-[235px] whitespace-nowrap">Recommended Based on Past Reports</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[20px] not-italic text-[#233f64] text-[12px] top-[500px] whitespace-nowrap">Explore Tests by Health Concern</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(80%+16px)] not-italic text-[#5c9cdc] text-[11px] top-[236px] whitespace-nowrap">View all</p>
      <Frame2 />
      <Frame5 />
      <Frame7 />
      <Frame9 />
      <Frame11 />
      <ConcernTabs />
      <Frame20 />
      <Frame25 />
      <Frame30 />
      <Frame35 />
    </div>
  );
}

export default function IPhone1() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 13 & 14 - 6">
      <IPhone />
    </div>
  );
}