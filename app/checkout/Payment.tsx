"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PaymentData, ReviewData } from "./paymentTypes";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubCurrency from "../lib/convertToSubCurrency";
import Link from "next/link";
import Review from "./Review";

type StepType = "payment" | "review";

export const Payment = ({
  step,
  setStep,
  setPaymentData,
  paymentData,
  totalAmount,
  reviewData,
}: {
  step: StepType;
  setStep: React.Dispatch<React.SetStateAction<StepType>>;
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentData>>;
  paymentData: PaymentData;
  totalAmount: number;
  reviewData: ReviewData;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalAmount: convertToSubCurrency(totalAmount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalAmount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/order-confirmed?amount=${totalAmount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Redirect happens automatically, no need to manually handle it here.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="my-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Payment Form */}
      <form onSubmit={handleSubmit}>
        <div className={`${step === "review" && "h-0 invisible"}`}>
          {/* Use the PaymentElement for the entire payment form */}
          {clientSecret && <PaymentElement />}

          {errorMessage && <div>{errorMessage}</div>}
          <div className="mb-[50px] flex items-center justify-between 2xl:pt-[65px] xl:pt-[55px] lg:pt-[45px] md:pt-[35px] pt-[25px] gap-4">
            <Link
              href="/"
              className="text-white font-[300] hover:font-[400] lg:text-[20px] md:text-[18px] text-base flex items-center gap-1 transition-weight duration-200 ease-in-out"
            >
              <MdKeyboardArrowRight className="w-[22px] h-[22px] rotate-180 text-white" />
              Back
            </Link>
            <button
              disabled={!stripe || loading}
              onClick={() => {
                setStep("review");
              }}
              type="button" // Prevent form submission here
              className="bg-cyan md:max-w-[260px] max-w-[200px] w-full text-white px-4 md:py-[11px] py-[9px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors"
            >
              {!loading ? "Review" : "Processing..."}
            </button>
          </div>
        </div>

        {step === "review" && (
          <div className="2xl:space-y-[30px] xl:space-y-[25px] lg:space-y-[20px] space-y-[18px]">
            <Review
              step={step}
              setStep={setStep}
              paymentData={paymentData}
              reviewData={reviewData}
            />
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  setStep("payment");
                }}
                type="button" // Prevent form submission here
                className="text-white font-[300] hover:font-[400] lg:text-[20px] md:text-[18px] text-base flex items-center gap-1 transition-weight duration-200 ease-in-out"
              >
                <MdKeyboardArrowRight className="w-[22px] h-[22px] rotate-180 text-white" />
                Back
              </button>
              <button
                type="submit" // This will trigger form submission
                className="bg-cyan md:max-w-[260px] max-w-[200px] w-full text-white text-center px-4 md:py-[11px] py-[9px] rounded-[5px] lg:text-[20px] md:text-[18px] text-base font-bold hover:bg-emerald-500 transition-colors"
              >
                {!loading ? "Check out" : "Processing..."}
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default Payment;
