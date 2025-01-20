"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HowDoesItWorks() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% of the element needs to be visible
    );

    const stepElement = document.querySelector("#step3");
    if (stepElement) observer.observe(stepElement);

    return () => {
      if (stepElement) observer.unobserve(stepElement);
    };
  }, []);

  const handleInputClick = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] pt-4 w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto grid md:grid-cols-[1fr,2.3fr] gap-8 md:gap-8 items-start">
          {/* Left Column */}
          <div className="sm:space-y-[20px] space-y-[10px]">
            <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px]">
              How does <br className="md:flex hidden" /> it{" "}
              <span className="text-cyan">work?</span>
            </h1>
            <p className="md:text-[24px] sm:text-[20px]">
              Follow these three easy steps to get actionable insights about
              your website's performance today!
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-[18px]">
            {/* Step 1 */}
            <div className="bg-[#181C1E] rounded-[14px] lg:px-[22px] md:px-[20px] px-4 py-[16px] flex md:gap-4 gap-2 w-full">
              <div className="h-[46px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan text-[16px] font-bold">
                  Step 1
                </div>
                <h2 className="md:text-[23px] text-[20px] font-[700] pb-1">
                  Enter your website URL
                </h2>
                <p className="text-[14px] lg:text-[16px] pb-2">
                  Getting started is easy! Just enter your website URL on the
                  home screen and click{" "}
                  <Link href="/" className="text-cyan">
                    Analyze
                  </Link>
                  .
                </p>
                <input
                  type="url"
                  placeholder="https://www.yourwebsite.com"
                  className="w-full bg-[#31373D] md:px-[18px] px-[10px] py-1.5 lg:text-[20px] md:text-[18px] text-base text-white placeholder-[#252A2E] focus:outline-none focus:ring-2 focus:ring-cyan rounded-[10px] cursor-pointer"
                  onClick={handleInputClick}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#181C1E] rounded-[14px] lg:px-[22px] md:px-[20px] px-4 py-[16px] flex gap-3 w-full">
              <div className="h-[46px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan text-[16px] font-[700] mb-0">
                  Step 2
                </div>
                <h2 className="md:text-[23px] text-[20px] font-[700] pb-1">
                  AI to the rescue!
                </h2>
                <p className="text-[14px] lg:text-[16px] pb-2">
                  Our smart <span className="text-cyan">AI engine</span> dives
                  into your website, pinpointing hidden issues that might be
                  affecting your business.
                </p>
                <div className="md:space-y-2 space-y-[6px]">
                  <div className="h-[8px] sm:h-[10px] bg-[#0E8B6E] rounded-full w-full glow-background delay-0"></div>
                  <div className="h-[8px] sm:h-[10px] bg-[#11977D] rounded-full w-[70%] glow-background delay-200"></div>
                  <div className="h-[8px] sm:h-[10px] bg-[#18D1A1] rounded-full w-[35%] glow-background delay-400"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#181C1E] rounded-[14px] lg:px-[22px] md:px-[20px] px-4 py-[16px] flex md:gap-4 gap-2 w-full">
              <div className="h-[46px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan text-[16px] font-[700] mb-0">
                  Step 3
                </div>
                <h2 className="md:text-[23px] text-[20px] font-[700] pb-1">
                  Get your tailored report
                </h2>
                <p className="text-[14px] lg:text-[16px] pb-2">
                  Receive a <span className="text-cyan">detailed report</span>{" "}
                  with actionable insights to drive revenue now!
                </p>
                <div id="step3" className="max-w-[652px]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[16px] lg:text-[18px]">
                      Overall Score
                    </div>
                    <div className="text-xl font-[700] text-cyan">A-</div>
                  </div>
                  <div className="h-[8px] md:h-[10px] rounded-full bg-[#31373D]">
                    <div
                      className={`progress-bar h-[8px] md:h-[10px] rounded-full bg-cyan ${
                        isVisible ? "animate-progress" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
