"use client";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutPayment() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <div className="max-w-[510px]">
              <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[80px] lg:mb-[20px] sm:mb-3 mb-2">
                Checkout
              </h1>

              {/* Breadcrumb */}
              <div className="flex items-center gap-3 xl:mb-[20px] mb-4 xl:text-[20px] md:text-[18px] text-base font-[300]">
                <span className="">Cart</span>
                <MdKeyboardArrowRight className="w-[22px] h-[22px]" />
                <span className="text-cyan">Payment</span>
                <MdKeyboardArrowRight className="w-[22px] h-[22px]" />
                <span className="">Review</span>
              </div>
              {/* Payment Methods */}
              <div className="grid grid-cols-3 gap-[8px]">
                <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-[#0270DE] gap-1">
                  <BsFillCreditCardFill className="w-[16px] h-[16px] text-[#0270DE]" />
                  <span className="text-[#0270DE] font-[700]">Card</span>
                </button>
                <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-white gap-1">
                  <Image
                    src="/assets/google-pay.svg"
                    alt="google-pay"
                    width={30}
                    height={16}
                  />
                  <span className="text-[#6D6E78] font-[700]">Google Pay</span>
                </button>
                <button className="bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] border-white gap-1">
                  <Image
                    src="/assets/apple-pay.svg"
                    alt="apple-pay"
                    width={24.99}
                    height={16}
                  />
                  <span className="text-[#6D6E78] font-[700]">Apple Pay</span>
                </button>
              </div>

              {/* Card Details */}
              <div className="space-y-[12px] mt-[12px]">
                <div>
                  <label htmlFor="card" className="block text-[14.88px] mb-2">
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
                    <label htmlFor="cvc" className="block text-[14.88px] mb-2">
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
                  <label htmlFor="email" className="block text-[14.88px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px]"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-[14.88px] mb-2">
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

              <div className="flex items-center justify-between 2xl:pt-[65px] xl:pt-[55px] lg:pt-[45px] md:pt-[35px] pt-[25px]">
                <Link
                  href="/cart"
                  className="text-white font-[300] hover:font-[400] lg:text-[20px] md:text-[18px] text-base flex items-center gap-1 transition-weight duration-200 ease-in-out"
                >
                  <MdKeyboardArrowRight className="w-[22px] h-[22px] rotate-180 text-white" />
                  Back
                </Link>
                <button className="bg-cyan max-w-[260px] w-full text-white px-12 py-[11px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors">
                  Review
                </button>
              </div>
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
