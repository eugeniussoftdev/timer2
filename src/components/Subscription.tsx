import { useState } from "react";

const Guardian = () => {
  return (
    <svg
      className="fill-current"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.3333 17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665C13.4638 3.66665 10.0724 5.0714 7.57189 7.57189C5.0714 10.0724 3.66665 13.4638 3.66665 17V23.6666H8.66665C9.10867 23.6666 9.5326 23.8422 9.84516 24.1548C10.1577 24.4674 10.3333 24.8913 10.3333 25.3333V30.3333H23.6666V25.3333C23.6666 24.8913 23.8422 24.4674 24.1548 24.1548C24.4674 23.8422 24.8913 23.6666 25.3333 23.6666H30.3333V17ZM27 27V32C27 32.442 26.8244 32.8659 26.5118 33.1785C26.1993 33.4911 25.7753 33.6666 25.3333 33.6666H8.66665C8.22462 33.6666 7.8007 33.4911 7.48814 33.1785C7.17558 32.8659 6.99998 32.442 6.99998 32V27H1.99998C1.55795 27 1.13403 26.8244 0.821468 26.5118C0.508908 26.1993 0.333313 25.7753 0.333313 25.3333V17C0.333313 7.79498 7.79498 0.333313 17 0.333313C26.205 0.333313 33.6666 7.79498 33.6666 17V25.3333C33.6666 25.7753 33.4911 26.1993 33.1785 26.5118C32.8659 26.8244 32.442 27 32 27H27ZM9.49998 20.3333C9.17168 20.3333 8.84659 20.2687 8.54327 20.143C8.23996 20.0174 7.96436 19.8332 7.73221 19.6011C7.50007 19.3689 7.31592 19.0933 7.19028 18.79C7.06464 18.4867 6.99998 18.1616 6.99998 17.8333C6.99998 17.505 7.06464 17.1799 7.19028 16.8766C7.31592 16.5733 7.50007 16.2977 7.73221 16.0655C7.96436 15.8334 8.23996 15.6493 8.54327 15.5236C8.84659 15.398 9.17168 15.3333 9.49998 15.3333C10.163 15.3333 10.7989 15.5967 11.2677 16.0655C11.7366 16.5344 12 17.1703 12 17.8333C12 18.4964 11.7366 19.1322 11.2677 19.6011C10.7989 20.0699 10.163 20.3333 9.49998 20.3333ZM24.5 20.3333C24.1717 20.3333 23.8466 20.2687 23.5433 20.143C23.24 20.0174 22.9644 19.8332 22.7322 19.6011C22.5001 19.3689 22.3159 19.0933 22.1903 18.79C22.0646 18.4867 22 18.1616 22 17.8333C22 17.505 22.0646 17.1799 22.1903 16.8766C22.3159 16.5733 22.5001 16.2977 22.7322 16.0655C22.9644 15.8334 23.24 15.6493 23.5433 15.5236C23.8466 15.398 24.1717 15.3333 24.5 15.3333C25.163 15.3333 25.7989 15.5967 26.2677 16.0655C26.7366 16.5344 27 17.1703 27 17.8333C27 18.4964 26.7366 19.1322 26.2677 19.6011C25.7989 20.0699 25.163 20.3333 24.5 20.3333Z" />
    </svg>
  );
};
const Mage = () => {
  return (
    <svg
      className="fill-current"
      width="34"
      height="36"
      viewBox="0 0 34 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0.333313C26.205 0.333313 33.6667 7.79498 33.6667 17V23.2733C33.6666 23.8925 33.4942 24.4994 33.1686 25.026C32.843 25.5527 32.3772 25.9782 31.8233 26.255L27 28.6666V30.3333C27.0001 31.6087 26.5128 32.8358 25.6379 33.7637C24.7629 34.6917 23.5665 35.2502 22.2933 35.325L21.9167 35.3333C21.9533 35.1518 21.9778 34.9681 21.99 34.7833L22 34.5V33.6666C22.0003 32.8257 21.6827 32.0157 21.1108 31.3991C20.539 30.7824 19.7553 30.4047 18.9167 30.3416L18.6667 30.3333H15.3333C14.4924 30.333 13.6824 30.6507 13.0657 31.2225C12.4491 31.7943 12.0714 32.5781 12.0083 33.4166L12 33.6666V34.5C12 34.785 12.0283 35.065 12.0833 35.3333H12C10.6739 35.3333 9.40214 34.8065 8.46446 33.8688C7.52678 32.9312 7 31.6594 7 30.3333V28.6666L2.17666 26.255C1.62255 25.9781 1.15656 25.5523 0.83096 25.0253C0.505361 24.4984 0.33304 23.8911 0.333329 23.2716V17C0.333329 7.79498 7.795 0.333313 17 0.333313ZM17 3.66665C13.536 3.66669 10.2079 5.01487 7.72049 7.42576C5.23307 9.83665 3.78158 13.121 3.67333 16.5833L3.66666 17V23.2733L10.3333 26.6066V29.2583L10.4583 29.1183C11.6388 27.8511 13.2669 27.0942 14.9967 27.0083L15.3333 27L18.7883 27.0016L19.16 27.0183C20.825 27.1416 22.31 27.8683 23.41 28.98L23.6667 29.2583V26.6066L30.3333 23.2733V17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665V3.66665ZM10.3333 15.3333C11.2174 15.3333 12.0652 15.6845 12.6904 16.3096C13.3155 16.9347 13.6667 17.7826 13.6667 18.6666C13.6667 19.5507 13.3155 20.3985 12.6904 21.0237C12.0652 21.6488 11.2174 22 10.3333 22C9.44927 22 8.60143 21.6488 7.97631 21.0237C7.35118 20.3985 7 19.5507 7 18.6666C7 17.7826 7.35118 16.9347 7.97631 16.3096C8.60143 15.6845 9.44927 15.3333 10.3333 15.3333V15.3333ZM23.6667 15.3333C24.5507 15.3333 25.3986 15.6845 26.0237 16.3096C26.6488 16.9347 27 17.7826 27 18.6666C27 19.5507 26.6488 20.3985 26.0237 21.0237C25.3986 21.6488 24.5507 22 23.6667 22C22.7826 22 21.9348 21.6488 21.3096 21.0237C20.6845 20.3985 20.3333 19.5507 20.3333 18.6666C20.3333 17.7826 20.6845 16.9347 21.3096 16.3096C21.9348 15.6845 22.7826 15.3333 23.6667 15.3333V15.3333Z" />
    </svg>
  );
};
const Phantom = () => {
  return (
    <svg
      className="fill-current"
      width="30"
      height="35"
      viewBox="0 0 30 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 0.333313C18.7572 0.333313 22.3606 1.82587 25.0173 4.48263C27.6741 7.1394 29.1667 10.7427 29.1667 14.5C29.1667 25.3333 20 34.5 15 34.5C10 34.5 0.833328 25.3333 0.833328 14.5C0.833328 10.7427 2.32588 7.1394 4.98265 4.48263C7.63942 1.82587 11.2428 0.333313 15 0.333313ZM15 3.66665C12.1268 3.66665 9.37132 4.80801 7.33967 6.83966C5.30803 8.8713 4.16666 11.6268 4.16666 14.5C4.16666 22.49 11.1083 31.1666 15 31.1666C18.8917 31.1666 25.8333 22.49 25.8333 14.5C25.8333 11.6268 24.692 8.8713 22.6603 6.83966C20.6287 4.80801 17.8732 3.66665 15 3.66665ZM24.1667 15.3333C24.4333 15.3333 24.6983 15.3466 24.9583 15.375C25.0764 16.4873 24.9442 17.612 24.5714 18.6667C24.1986 19.7213 23.5945 20.6792 22.8036 21.4702C22.0126 22.2612 21.0547 22.8652 20 23.2381C18.9454 23.6109 17.8207 23.7431 16.7083 23.625C16.5973 22.5791 16.7075 21.5216 17.0317 20.5212C17.356 19.5207 17.887 18.5996 18.5903 17.8176C19.2937 17.0357 20.1536 16.4104 21.1143 15.9824C22.075 15.5544 23.115 15.3333 24.1667 15.3333ZM5.83333 15.3333C6.88504 15.3333 7.92501 15.5544 8.8857 15.9824C9.84638 16.4104 10.7063 17.0357 11.4097 17.8176C12.113 18.5996 12.644 19.5207 12.9683 20.5212C13.2925 21.5216 13.4027 22.5791 13.2917 23.625C12.1793 23.7431 11.0546 23.6109 9.99996 23.2381C8.94531 22.8652 7.98741 22.2612 7.19643 21.4702C6.40546 20.6792 5.80143 19.7213 5.42859 18.6667C5.05575 17.612 4.92355 16.4873 5.04166 15.375C5.3 15.3466 5.56666 15.3333 5.83333 15.3333Z" />
    </svg>
  );
};
// const RightIcon = () => {
//   return (
//     <svg
//       className="fill-current"
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
//     </svg>
//   );
// };
const PRICING_DATA = [
  {
    name: "Guardian",
    price: "Free Forever",
    iconComponent: <Guardian />,
    benefits: [
      "Edit up to 100 hours of podcast audio files.",
      "Set your landing page.",
      "Advanced analytics.",
      "Day support",
    ],
  },
  {
    name: "Mage",
    price: "$450",
    iconComponent: <Mage />,
    benefits: [
      "Edit up to 400 hours of podcast audio files.",
      "Set your landing page.",
      "12/7 support.",
      "Advanced analytics.",
    ],
  },
  {
    name: "Phantom",
    price: "$600",
    iconComponent: <Phantom />,
    benefits: [
      "Edit up to 1,000 hours of podcast audio files.",
      "Set your landing page.",
      "24/7 support.",
      "Advanced analytics.",
    ],
  },
];
export const _Subscription = () => {
  return (
    <>
      <img
        src="https://www.tailwindtap.com/assets/components/pricing/flexible-pricing/office.jpg"
        alt="high demand pricing plan background"
        className="h-screen w-full opacity-70 hidden lg:inline-block"
      />
      <div className="bg-gray-300 font-sans lg:bg-transparent flex flex-col lg:flex-row absolute justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 px-5 xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch">
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="relative">
            <div className="max-w-sm xl:w-[384px] p-6 bg-white group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]">
              <div className="flex flex-row gap-5 items-center">
                <div>{data.iconComponent}</div>
                <span className="text-3xl font-bold">{data.name}</span>
              </div>
              <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                What You&apos;ll Get
              </span>
              {data.benefits.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                >
                  <div className="pt-1 shrink-0">{/* <RightIcon /> */}</div>
                  <span>{data}</span>
                </div>
              ))}
              <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
              <div className="h-36">
                <div className="bottom-6 left-6 right-6 absolute">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[32px] font-bold ">{data.price}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-xl">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const pricingData = [
  {
    mainTitle: "Freebie",
    infoNote: "Ideal for individuals who need quick access to basic features.",
    isSelected: false,
    monthlyPrice: 2,
    yerlyPrice: 20,
    getIn: [
      {
        rightIcon: true,
        description: "20,000+ of PNG & SVG graphics",
      },
      {
        rightIcon: true,
        description: "Access to 100 million stock images",
      },
      {
        rightIcon: false,
        description: "Instant Access to our design system",
      },
      {
        rightIcon: false,
        description: "Create teams to collaborate on designs",
      },
    ],
  },
  {
    mainTitle: "Professional",
    monthlyPrice: 5,
    yerlyPrice: 50,
    infoNote: "Ideal for individuals who need quick access to basic features.",
    isSelected: true,
    getIn: [
      {
        rightIcon: true,
        description: "20,000+ of PNG & SVG graphics",
      },
      {
        rightIcon: true,
        description: "Access to 100 million stock images",
      },
      {
        rightIcon: false,
        description: "Instant Access to our design system",
      },
      {
        rightIcon: false,
        description: "Create teams to collaborate on designs",
      },
    ],
  },
  {
    mainTitle: "Enterprise",
    infoNote: "Ideal for individuals who need quick access to basic features.",
    isSelected: false,
    monthlyPrice: 10,
    yerlyPrice: 100,
    getIn: [
      {
        rightIcon: true,
        description: "20,000+ of PNG & SVG graphics",
      },
      {
        rightIcon: true,
        description: "Access to 100 million stock images",
      },
      {
        rightIcon: false,
        description: "Instant Access to our design system",
      },
      {
        rightIcon: false,
        description: "Create teams to collaborate on designs",
      },
    ],
  },
];
const RightIcon = ({ fillColor }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="32" height="32" rx="16" fill="#E8EDFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
        fill={fillColor}
      />
    </svg>
  );
};
const CloseIcon = ({ fillColor }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="32" height="32" rx="16" fill="#F7F8F9" />
    <path
      d="M20.2421 20.2426C20.5025 19.9822 20.5025 19.5601 20.2421 19.2997L16.9428 16.0004L20.243 12.7001C20.5034 12.4397 20.5034 12.0176 20.243 11.7573C19.9827 11.4969 19.5606 11.4969 19.3002 11.7573L15.9999 15.0576L12.6997 11.7573C12.4393 11.4969 12.0172 11.4969 11.7568 11.7573C11.4965 12.0176 11.4965 12.4397 11.7568 12.7001L15.0571 16.0004L11.7578 19.2997C11.4974 19.5601 11.4974 19.9822 11.7578 20.2426C12.0181 20.5029 12.4402 20.5029 12.7006 20.2426L15.9999 16.9432L19.2993 20.2426C19.5597 20.5029 19.9818 20.5029 20.2421 20.2426Z"
      fill={fillColor}
    />
  </svg>
);
const Arrow = ({ strokColor }) => {
  return (
    <svg
      width="107"
      height="88"
      viewBox="0 0 107 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 md:w-20 h-20 -mt-8"
    >
      <path
        d="M95.4463 61.5975C83.1573 64.6611 68.4838 65.2433 57.6839 57.506C50.782 52.5613 47.1171 42.5628 49.6964 34.4471C52.1324 26.7825 57.8212 20.0482 66.3457 20.2534C70.789 20.3604 74.6201 22.4047 75.429 27.084C76.6648 34.2329 69.5331 41.6308 63.8629 44.7405C46.1672 54.4452 21.1341 53.9052 4.27686 42.6407"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11.7068 55.8447C9.64482 52.9634 5.14208 46.2418 3.62681 42.4054"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M3.62695 42.4055C7.1396 41.942 15.124 40.6363 18.9603 39.121"
        stroke={strokColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const Subscription = () => {
  const [monthPrice, setMonthPrice] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center py-3 bg-gray-300 min-h-screen font-sans">
      {/* heading section  */}
      <div className="flex flex-col w-auto px-6 text-center text-2xl sm:text-3xl md:text-4xl">
        <span className="font-medium">Powerful features for</span>
        <span className="font-medium pt-4 text-transparent bg-clip-text bg-[#365CCE]">
          powerful creators.
        </span>
        <span className="text-xl mt-4">
          Chose a plan that&apos;s right for you
        </span>
        <div className="text-base mt-8 md:mt-12 gap-4 flex items-center justify-center pl-5">
          <span>Pay monthly </span>
          <div className="items-center flex">
            <label
              htmlFor="small-toggle"
              className="inline-flex relative cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                onClick={() => setMonthPrice(!monthPrice)}
                id="small-toggle"
                className="sr-only peer"
              />
              <div className="w-9 h-5 flex-1 align-middle bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#365CCE]"></div>
            </label>
          </div>
          <span>Pay yearly</span>
        </div>
      </div>
      <div className="w-[300px] sm:w-[350px] md:w-[590px] flex justify-end pt-2 md:pt-0">
        <Arrow strokColor={`#365CCE`} />
        <span className="text-sm md:text-lg text-[#365CCE] font-medium pr-2 pt-2">
          Save 25%
        </span>
      </div>
      {/* pricing section   */}
      <div className="flex flex-col lg:flex-row gap-6 h-full px-5">
        {pricingData.map((data, index) => (
          <div
            className={`flex flex-col h-full max-w-[378px] py-6 px-5 sm:px-10 lg:w-auto xl:w-[378px] rounded-xl ${
              data?.isSelected
                ? `bg-[#365CCE] text-white`
                : "bg-white text-black"
            }`}
            key={index}
          >
            <div className="flex flex-col text-left">
              <div className="flex flex-col gap-3">
                <span className="text-2xl">{data?.mainTitle}</span>
                <span>{data?.infoNote}</span>
              </div>
              <div className="flex items-center gap-3 my-4">
                <span className="text-6xl font-semibold">
                  ${monthPrice ? data?.monthlyPrice : data?.yerlyPrice}
                </span>
                <span className="font-light">
                  /&nbsp;&nbsp;{monthPrice ? "Month" : "Year"}
                </span>
              </div>
              <button
                className={`w-full border-[1px] rounded py-2.5 text-[#365CCE] ${
                  data?.isSelected
                    ? "bg-white"
                    : "bg-transparent border-[#365CCE]"
                }`}
              >
                Get Started Now
              </button>
              <div className="mt-10 space-y-3">
                {data?.getIn?.map((description, index) => (
                  <div className="flex items-center gap-4 max-w-xs" key={index}>
                    <div className="w-8 h-8">
                      {description?.rightIcon ? (
                        <RightIcon fillColor={`#365CCE`} />
                      ) : (
                        <CloseIcon fillColor={`#365CCE`} />
                      )}
                    </div>
                    <span className="font-medium text-base">
                      {description?.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
