"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
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
            <div className="space-y-8 max-w-[510px]">
              <h1 className="text-6xl font-bold mb-6">Checkout</h1>

              {/* Breadcrumb */}
              <div className="flex items-center gap-3 mb-12 text-sm">
                <Link href="/cart" className="text-gray-400 hover:text-white">
                  Cart
                </Link>
                <IoIosArrowForward className="w-4 h-4 text-gray-600" />
                <span className="text-emerald-400">Payment</span>
                <IoIosArrowForward className="w-4 h-4 text-gray-600" />
                <span className="text-gray-400">Review</span>
              </div>
              {/* Payment Methods */}
              <div className="grid grid-cols-3 gap-4">
                <button className="bg-white p-4 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <BsFillCreditCardFill className="w-6 h-6 text-gray-900" />
                </button>
                <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Image
                    src="/placeholder.svg?height=24&width=60"
                    alt="Google Pay"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                </button>
                <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Image
                    src="/placeholder.svg?height=24&width=60"
                    alt="Apple Pay"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />
                </button>
              </div>

              {/* Card Details */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="card" className="block text-sm mb-2">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="card"
                      placeholder="1234 1234 1234 1234"
                      className="w-full bg-white text-gray-900 p-3 rounded-lg pr-12"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <Image
                        src="/placeholder.svg?height=20&width=32"
                        alt="Mastercard"
                        width={32}
                        height={20}
                        className="h-5 w-auto"
                      />
                      <Image
                        src="/placeholder.svg?height=20&width=32"
                        alt="Visa"
                        width={32}
                        height={20}
                        className="h-5 w-auto"
                      />
                      <Image
                        src="/placeholder.svg?height=20&width=32"
                        alt="Discover"
                        width={32}
                        height={20}
                        className="h-5 w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm mb-2">
                      Expiration
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM / YY"
                      className="w-full bg-white text-gray-900 p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="CVC"
                      className="w-full bg-white text-gray-900 p-3 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-full bg-white text-gray-900 p-3 rounded-lg appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white text-gray-900 p-3 rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="First and last name"
                    className="w-full bg-white text-gray-900 p-3 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <IoIosArrowForward className="w-4 h-4 rotate-180" />
                  Back
                </Link>
                <button className="bg-emerald-400 text-gray-900 px-12 py-3 rounded-lg font-medium hover:bg-emerald-500 transition-colors">
                  Review
                </button>
              </div>
            </div>

            {/* Preview Cards */}
            <div className="flex flex-wrap gap-[20px] justify-center items-center bg-[#31373D]">
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
