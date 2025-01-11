"use client";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Checkout() {
  const [step, setStep] = useState("payment");
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <div className="lg:max-w-[510px] my-auto">
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
                <>
                  {/* Payment Methods */}
                  <div className="grid grid-cols-3 2xl:gap-[32px] xl:gap-[28px] lg:gap-[22px] md:gap-[22px] sm:gap-[16px] gap-[8px] lg:mt-[30px] mt-[25px]">
                    <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-[#0270DE] gap-1">
                      <BsFillCreditCardFill className="w-[16px] h-[16px] text-[#0270DE]" />
                      <span className="text-[#0270DE] font-[700] text-[14px] text-left">
                        Card
                      </span>
                    </button>
                    <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-white gap-1">
                      <Image
                        src="/assets/google-pay.svg"
                        alt="google-pay"
                        width={30}
                        height={16}
                      />
                      <span className="text-[#6D6E78] font-[700] text-[14px] text-left">
                        Google Pay
                      </span>
                    </button>
                    <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-white gap-1">
                      <Image
                        src="/assets/apple-pay.svg"
                        alt="apple-pay"
                        width={24.99}
                        height={16}
                      />
                      <span className="text-[#6D6E78] font-[700] text-[14px] text-left">
                        Apple Pay
                      </span>
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-[12px] mt-[12px]">
                    <div>
                      <label
                        htmlFor="card"
                        className="block text-[14.88px] mb-2"
                      >
                        Card number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card"
                          placeholder="1234 1234 1234 1234"
                          className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px] pr-[124px]"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-[3px]">
                          <Image
                            src="/assets/master-card.svg"
                            alt="Mastercard"
                            width={24}
                            height={16}
                            className="h-[16] w-auto"
                          />
                          <Image
                            src="/assets/visa-card.svg"
                            alt="Visa"
                            width={24}
                            height={16}
                            className="h-[16] w-auto"
                          />
                          <Image
                            src="/assets/amex-card.svg"
                            alt="Discover"
                            width={24}
                            height={16}
                            className="h-[16] w-auto"
                          />
                          <Image
                            src="/assets/discover-card.svg"
                            alt="Discover"
                            width={24}
                            height={16}
                            className="h-[16] w-auto"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="expiry"
                          className="block text-[14.88px] mb-2"
                        >
                          Expiration
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM / YY"
                          className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvc"
                          className="block text-[14.88px] mb-2"
                        >
                          CVC
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cvc"
                            placeholder="CVC"
                            className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px] pr-[40px]"
                          />
                          <Image
                            src="/assets/credit-card-cvc.svg"
                            alt="Mastercard"
                            width={24}
                            height={24}
                            className="h-[24] w-auto absolute right-3 top-1/2 -translate-y-1/2"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-[14.88px] mb-2"
                      >
                        Country
                      </label>
                      <div className="relative w-full">
                        <select
                          id="country"
                          className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px] appearance-none cursor-pointer"
                        >
                          <option value="">Select</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                        </select>
                        <MdKeyboardArrowRight
                          size={22}
                          className="rotate-[90deg] w-[21px] absolute right-3 text-[#6D6E78] top-1/2 -translate-y-1/2"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[14.88px] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[14.88px] mb-2"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="First and last name"
                        className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between 2xl:pt-[65px] xl:pt-[55px] lg:pt-[45px] md:pt-[35px] pt-[25px] gap-4">
                    <button
                      onClick={() => {
                        setStep("payment");
                      }}
                      className="text-white font-[300] hover:font-[400] lg:text-[20px] md:text-[18px] text-base flex items-center gap-1 transition-weight duration-200 ease-in-out"
                    >
                      <MdKeyboardArrowRight className="w-[22px] h-[22px] rotate-180 text-white" />
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setStep("review");
                      }}
                      className="bg-cyan md:max-w-[260px] max-w-[200px] w-full text-white px-4 md:py-[11px] py-[9px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors"
                    >
                      Review
                    </button>
                  </div>
                </>
              )}

              {step === "review" && (
                <div className="2xl:space-y-[30px] xl:space-y-[25px] lg:space-y-[20px] space-y-[18px] lg:mt-[30px] mt-[25px]">
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex md:gap-4 gap-3 items-center">
                      <div className="relative w-[48px] min-w-[48px] h-[62.49px]">
                        <Image
                          src="/assets/checkout-img1.png"
                          alt="web-img-1"
                          width={358}
                          height={463}
                        />
                        <span className="absolute top-[-6px] right-[-6px] rounded-full flex items-center justify-center w-[20px] h-[20px] min-w-[20px] bg-cyan font-bold text-sm leading-[20.3px]">
                          1
                        </span>
                      </div>
                      <h4 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                        Customized website review
                      </h4>
                    </div>
                    <h4 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                      $4.99
                    </h4>
                  </div>
                  <h4 className="flex gap-4 items-center justify-between">
                    <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                      Subtotal
                    </span>
                    <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                      $4.99
                    </span>
                  </h4>
                  <h4 className="flex gap-4 items-center justify-between">
                    <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                      Taxes
                    </span>
                    <span className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-base">
                      $0.25
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
                      $5.24
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
              )}
            </div>

            {/* Preview Cards */}
            <div className="flex flex-wrap  p-4 gap-[20px] justify-center items-center bg-[#31373D]">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
