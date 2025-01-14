"use client";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/Header";
import FooterLogo from "../components/FooterLogo";
import SocialLink from "../components/SocialLink";
import Payment from "./Payment";
import Review from "./Review";
import { PaymentData, ReviewData } from "./paymentTypes";
import Footer from "../components/Footer";

type StepType = "payment" | "review";

export default function Checkout() {
  const [step, setStep] = useState<StepType>("payment");
  const [paymentData, setPaymentData] = useState<PaymentData>({
    paymentOption: "card",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    email: "",
    name: "",
  });
  const [reviewData, setReviewData] = useState<ReviewData>({
    image: "/assets/checkout-img1.png",
    title: "Customized website review",
    subTotal: 4.99,
    taxes: 0.25,
  });

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <main className="w-full relative z-[0]">
        <div className=" w-full mx-auto">
          <div className="grid lg:grid-cols-2 md:gap-12">
            <div className="lg:max-w-[510px] w-full mx-auto pb-[50px]">
              {/* <Header /> */}
              <Header />
              <div className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
                <div className="lg:max-w-[560px] mx-auto">
                  <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[80px] lg:mb-[20px] sm:mb-3 mb-2">
                    Checkout
                  </h1>

                  {/* Breadcrumb */}
                  <div className="flex items-center gap-3 xl:text-[20px] md:text-[18px] text-base font-[300]">
                    <span className="">Cart</span>
                    <MdKeyboardArrowRight className="w-[22px] h-[22px]" />
                    <span className={`${step === "payment" && "text-cyan"}`}>
                      Payment
                    </span>
                    <MdKeyboardArrowRight className="w-[22px] h-[22px]" />
                    <span className={`${step === "review" && "text-cyan"}`}>
                      Review
                    </span>
                  </div>

                  {step === "payment" && (
                    <Payment
                      step={step}
                      setStep={setStep}
                      paymentData={paymentData}
                      setPaymentData={setPaymentData}
                    />
                  )}

                  {step === "review" && (
                    <Review
                      step={step}
                      setStep={setStep}
                      paymentData={paymentData}
                      reviewData={reviewData}
                    />
                  )}
                  <div className="w-full md:flex hidden">
                    <SocialLink />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Cards */}
            <div className="bg-[#31373D] h-full">
              <div className="flex flex-wrap items-center justify-center gap-[20px] h-full px-4 py-[80px]">
                <Image
                  src="/assets/checkout-img1.png"
                  alt="web-img-1"
                  width={280}
                  height={380}
                />
                <Image
                  src="/assets/checkout-img2.png"
                  alt="web-img-2"
                  width={280}
                  height={380}
                />
              </div>
              <div className="md:flex hidden absolute right-10 bottom-8">
                <FooterLogo />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="md:hidden flex w-full">
        <Footer />
      </div>
    </div>
  );
}
