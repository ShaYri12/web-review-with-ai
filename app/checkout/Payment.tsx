"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PaymentData } from "./paymentTypes";

type StepType = "payment" | "review";

const Payment = ({
  step,
  setStep,
  setPaymentData,
  paymentData,
}: {
  step: StepType;
  setStep: React.Dispatch<React.SetStateAction<StepType>>;
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentData>>;
  paymentData: PaymentData;
}) => {
  const [formData, setFormData] = useState<PaymentData>(paymentData);

  const countries = [
    { value: "", label: "Select" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleReview = () => {
    setPaymentData((prev) => {
      const updatedPaymentData = { ...formData };
      console.log("Updated PaymentData:", updatedPaymentData);
      return updatedPaymentData;
    });
    setStep("review");
  };

  return (
    <>
      {/* Payment Methods */}
      <div className="grid grid-cols-3 2xl:gap-[32px] xl:gap-[28px] lg:gap-[22px] md:gap-[22px] sm:gap-[16px] gap-[8px] lg:mt-[30px] mt-[25px]">
        <button
          onClick={() => {
            setFormData({ ...formData, paymentOption: "card" });
          }}
          className={`bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] ${
            formData.paymentOption === "card"
              ? "border-[#0270DE]"
              : "border-white"
          } gap-1`}
        >
          <BsFillCreditCardFill className="w-[16px] h-[16px] text-[#0270DE]" />
          <span className="text-[#0270DE] font-[700] text-[14px] text-left">
            Card
          </span>
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, paymentOption: "google" });
          }}
          className={`bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] ${
            formData.paymentOption === "google"
              ? "border-[#0270DE]"
              : "border-white"
          } gap-1`}
        >
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
        <button
          onClick={() => {
            setFormData({ ...formData, paymentOption: "apple" });
          }}
          className={`bg-white p-[9px] rounded-[5px] flex flex-col items-start justify-center hover:bg-gray-100 transition-colors border-[3px] ${
            formData.paymentOption === "apple"
              ? "border-[#0270DE]"
              : "border-white"
          } gap-1`}
        >
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
          <label htmlFor="cardNumber" className="block text-[14.88px] mb-2">
            Card number
          </label>
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 1234 1234 1234"
              className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px] pr-[124px]"
              value={formData.cardNumber}
              onChange={handleInputChange}
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
            <label htmlFor="expiry" className="block text-[14.88px] mb-2">
              Expiration
            </label>
            <input
              type="text"
              id="expiry"
              placeholder="MM / YY"
              className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px]"
              value={formData.expiry}
              onChange={handleInputChange}
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
                value={formData.cvc}
                onChange={handleInputChange}
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
          <label htmlFor="country" className="block text-[14.88px] mb-2">
            Country
          </label>
          <div className="relative w-full">
            <select
              id="country"
              className="w-full bg-white text-gray-900 placeholder-[#77787D] p-3 rounded-[5px] appearance-none cursor-pointer"
              value={formData.country}
              onChange={handleInputChange}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-[50px] flex items-center justify-between 2xl:pt-[65px] xl:pt-[55px] lg:pt-[45px] md:pt-[35px] pt-[25px] gap-4">
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
          onClick={handleReview}
          className="bg-cyan md:max-w-[260px] max-w-[200px] w-full text-white px-4 md:py-[11px] py-[9px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors"
        >
          Review
        </button>
      </div>
    </>
  );
};

export default Payment;
