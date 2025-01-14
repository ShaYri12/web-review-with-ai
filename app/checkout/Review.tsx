import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PaymentData, ReviewData } from "./paymentTypes";
import Link from "next/link";

type StepType = "payment" | "review"; // Define possible step values

const Review = ({
  step,
  setStep,
  paymentData,
  reviewData,
}: {
  step: StepType;
  setStep: React.Dispatch<React.SetStateAction<StepType>>;
  paymentData: PaymentData;
  reviewData: ReviewData;
}) => {
  return (
    <div className="2xl:space-y-[30px] xl:space-y-[25px] lg:space-y-[20px] space-y-[18px] lg:mt-[30px] mt-[25px]">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex md:gap-4 gap-3 items-center">
          <div className="relative w-[48px] min-w-[48px] h-[62.49px]">
            <Image
              src={reviewData.image}
              alt="web-img-1"
              width={358}
              height={463}
            />
            <span className="absolute top-[-6px] right-[-6px] rounded-full flex items-center justify-center w-[20px] h-[20px] min-w-[20px] bg-cyan font-bold text-sm leading-[20.3px]">
              1
            </span>
          </div>
          <h4 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
            {reviewData.title}
          </h4>
        </div>
        <h4 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
          ${reviewData.subTotal}
        </h4>
      </div>
      <h4 className="flex gap-4 items-center justify-between">
        <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
          Subtotal
        </span>
        <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
          ${reviewData.subTotal}
        </span>
      </h4>
      <h4 className="flex gap-4 items-center justify-between">
        <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
          Taxes
        </span>
        <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
          ${reviewData.taxes}
        </span>
      </h4>
      <h4 className="flex gap-4 items-center justify-between">
        <span className="font-bold 2xl:text-[32px] xl:text-[28px] lg:text-[22px] md:text-[20px] text-[18px]">
          Total
        </span>
        <span className="font-bold 2xl:text-[32px] xl:text-[28px] lg:text-[22px] md:text-[20px] text-[18px]">
          <span className="font-[400] 2xl:text-[18px] xl:text-[19px] lg:text-[18px] md:text-[16px] text-[14px]">
            USD
          </span>{" "}
          ${reviewData.subTotal + reviewData.taxes}
        </span>
      </h4>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => {
            setStep("payment");
          }}
          className="text-white font-[300] hover:font-[400] lg:text-[20px] md:text-[18px] text-base flex items-center gap-1 transition-weight duration-200 ease-in-out"
        >
          <MdKeyboardArrowRight className="w-[22px] h-[22px] rotate-180 text-white" />
          Back
        </button>
        <Link
          href="/order-confirmed"
          className="bg-cyan md:max-w-[260px] max-w-[200px] w-full text-white text-center px-4 md:py-[11px] py-[9px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Review;
