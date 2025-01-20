"use client";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "../components/Header";
import FooterLogo from "../components/FooterLogo";
import SocialLink from "../components/SocialLink";
import Payment from "./Payment";
import { ReviewData } from "./paymentTypes";
import Footer from "../components/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubCurrency from "../lib/convertToSubCurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

type StepType = "payment" | "review";

export default function Checkout() {
  const [step, setStep] = useState<StepType>("payment");

  const [reviewData, setReviewData] = useState<ReviewData>({
    image: "/assets/checkout-img1.png",
    title: "Customized website review",
    subTotal: 4.99,
    taxes: 0.25,
  });

  const totalAmount = reviewData.subTotal + reviewData.taxes;

  const appearance = {
    theme: "stripe" as const,
    variables: {
      fontSizeBase: "16px", // Ensure readability
    },
    rules: {
      ".Label": {
        color: "#ffffff", // Explicitly set the label color to white
        marginBottom: "8px",
      },
    },
  };

  return (
    <div className="lg:min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <main className="w-full relative z-[0]">
        <div className=" w-full mx-auto">
          <div className="grid lg:grid-cols-2 md:gap-12">
            <div className="lg:max-w-[510px] w-full mx-auto pb-[50px]">
              {/* <Header /> */}
              <Header />
              <div className="px-4 lg:px-[24px] py-[16px] w-full relative z-[0]">
                <div className="lg:max-w-[560px] mx-auto">
                  <h1 className="xl:font-[800] font-[700] text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] sm:mb-3 mb-2">
                    Checkout
                  </h1>

                  {/* Breadcrumb */}
                  <div className="flex items-center gap-3 xl:text-[18px] md:text-[17px] text-base font-[300]">
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
                  <div className="lg:min-h-screen lg:mt-[28px] mt-[25px]">
                    <Elements
                      stripe={stripePromise}
                      options={{
                        mode: "payment",
                        amount: convertToSubCurrency(totalAmount),
                        currency: "usd",
                        appearance,
                      }}
                    >
                      <Payment
                        step={step}
                        setStep={setStep}
                        totalAmount={totalAmount}
                        reviewData={reviewData}
                      />
                    </Elements>
                  </div>
                  <div className="w-full md:flex hidden">
                    <SocialLink />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Cards */}
            <div className="bg-[#31373D] h-full">
              <div className="flex flex-wrap items-center justify-center gap-[20px] h-full px-4 lg:pt-[100px] lg:pb-[160px] pt-[80px] pb-[80px]">
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
