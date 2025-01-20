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

      <main className="px-4 lg:px-[24px] pt-[16px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto grid md:grid-cols-[1fr,2.3fr] gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:space-y-[35px] md:space-y-[30px] sm:space-y-[20px] space-y-[10px]">
            <h1 className="xl:font-[800] font-[700] text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px]">
              How does <br className="md:flex hidden" /> it{" "}
              <span className="text-cyan">work?</span>
            </h1>
            <p className="2xl:text-[22px] md:text-[20px] sm:text-[18px] md:mb-[40px] mb-[30px]">
              Follow these three easy steps to get actionable insights about
              your website's performance today!
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-[14px]">
            {/* Step 1 */}
            <div className="bg-[#181C1E] rounded-[20px] md:px-[18px] px-4 py-[15px] flex md:gap-4 gap-2 w-full">
              <div className="h-[56px] min-w-[5px] w-[5px] bg-cyan flex mt-1 rounded-[5px]"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[16px] text-[14px] font-[700] mb-0">
                  Step 1
                </div>
                <h2 className="lg:text-[25px] md:text-[20px] text-[18px] font-[700]">
                  Enter your website URL
                </h2>
                <p className="text-[15px] pb-1">
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
                  className="w-full bg-[#31373D] rounded md:px-[18px] md:px-4 px-[10px] py-[6px] lg:text-[20px] text-base text-white placeholder-[#252A2E] focus:outline-none focus:ring-2 focus:ring-cyan rounded-[10px] cursor-pointer"
                  onClick={handleInputClick}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#181C1E] rounded-[20px] md:px-[18px] px-4 py-[15px] flex gap-3 w-full">
              <div className="h-[56px] min-w-[5px] w-[5px] bg-cyan flex mt-1 rounded-[5px]"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[16px] text-[14px] font-[700] mb-0">
                  Step 2
                </div>
                <h2 className="lg:text-[25px] md:text-[20px] text-[18px] font-[700]">
                  AI to the rescue!
                </h2>
                <p className="text-[15px] pb-1">
                  Our smart <span className="text-cyan">AI engine</span> dives
                  into your website, pinpointing hidden issues that might be
                  affecting your business.
                </p>
                <div className="md:space-y-2 space-y-[6px]">
                  <div className="h-[8px] md:h-[10px] bg-[#0E8B6E] rounded-full w-full glow-background delay-0"></div>
                  <div className="h-[8px] md:h-[10px] bg-[#11977D] rounded-full w-[70%] glow-background delay-200"></div>
                  <div className="h-[8px] md:h-[10px] bg-[#18D1A1] rounded-full w-[35%] glow-background delay-400"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#181C1E] rounded-[20px] md:px-[18px] px-4 py-[15px] flex md:gap-4 gap-2 w-full">
              <div className="h-[56px] min-w-[5px] w-[5px] bg-cyan flex mt-1 rounded-[5px]"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[16px] text-[14px] font-[700] mb-0">
                  Step 3
                </div>
                <h2 className="lg:text-[25px] md:text-[20px] text-[18px] font-[700]">
                  Get your tailored report
                </h2>
                <p className="text-[15px] pb-1">
                  Receive a <span className="text-cyan">detailed report</span>{" "}
                  with actionable insights to drive revenue now!
                </p>
                <div id="step3" className="max-w-[652px]">
                  <div className="flex items-center justify-between mb-1 text-[15px] lg:text-[16px]">
                    <span className="">Overall Score</span>
                    <span className=" font-[700] text-cyan">A-</span>
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
      <div className="mt-[-50px] w-full">
        <Footer />
      </div>
    </div>
  );
}
