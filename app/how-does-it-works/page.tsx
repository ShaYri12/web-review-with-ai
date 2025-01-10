import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HowDoesItWorks() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto grid md:grid-cols-[1fr,2.3fr] gap-12 items-start">
          {/* Left Column */}
          <div className="lg:space-y-[42px] md:space-y-[30px] space-y-[20px]">
            <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[100px] 2xl:leading-[102px]">
              How does <br className="md:flex hidden" /> it{" "}
              <span className="text-cyan">work?</span>
            </h1>
            <p className="3xl:text-[30px] md:text-[24px] sm:text-[20px] md:mb-[40px] mb-[30px]">
              Follow these three easy steps to get actionable insights about
              your website's performance today!
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="3xl:space-y-[50px] 2xl:space-y-[40px] xl:space-y-[30px] space-y-[20px]">
            {/* Step 1 */}
            <div className="bg-[#181C1E] rounded-[20px] lg:px-[22px] md:px-[20px] px-4 py-[20px] flex md:gap-4 gap-2 w-full">
              <div className="h-[65.5px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[20px] text-[18px] font-[700] mb-0">
                  Step 1
                </div>
                <h2 className="2xl:text-[48px] xl:text-[40px] lg:text-[35px] md:text-[28px] text-[20px] font-[700] 2xl:leading-[54px] 2xl:pb-2">
                  Enter your website URL
                </h2>
                <p className="text-[16px] lg:text-[18px] 2xl:text-[19px] pb-2">
                  Getting started is easy! Just enter your website URL on the
                  home screen and click{" "}
                  <span className="text-cyan">Analyze</span>.
                </p>
                <input
                  type="url"
                  placeholder="https://www.yourwebsite.com"
                  className="w-full bg-[#31373D] rounded md:px-[18px] md:px-4 px-[10px] py-2 md:py-[10.5px] lg:text-[20px] md:text-[18px] text-base text-white placeholder-[#252A2E] focus:outline-none focus:ring-2 focus:ring-cyan rounded-[10px]"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#181C1E] rounded-[20px] lg:px-[22px] md:px-[20px] px-4 py-[20px] flex gap-3 w-full">
              <div className="h-[65.5px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[20px] text-[18px] font-[700] mb-0">
                  Step 2
                </div>
                <h2 className="2xl:text-[48px] xl:text-[40px] lg:text-[35px] md:text-[28px] text-[20px] font-[700] 2xl:leading-[54px] 2xl:pb-2">
                  AI to the rescue!
                </h2>
                <p className="text-[16px] lg:text-[18px] 2xl:text-[19px] pb-2">
                  Our smart <span className="text-cyan">AI engine</span> dives
                  into your website, pinpointing hidden issues that might be
                  affecting your business.
                </p>
                <div className="md:space-y-2 space-y-[6px]">
                  <div className="h-[8px] md:h-[10px] lg:h-[12px] xl:h-[15px] bg-[#0E8B6E80] rounded-full w-full"></div>
                  <div className="h-[8px] md:h-[10px] lg:h-[12px] xl:h-[15px] bg-[#11977D80] rounded-full w-[70%]"></div>
                  <div className="h-[8px] md:h-[10px] lg:h-[12px] xl:h-[15px] bg-[#18D1A180] rounded-full w-[35%]"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#181C1E] rounded-[20px] lg:px-[22px] md:px-[20px] px-4 py-[20px] flex md:gap-4 gap-2 w-full">
              <div className="h-[65.5px] min-w-[5px] w-[5px] bg-cyan flex mt-1"></div>
              <div className="w-full md:space-y-0 space-y-1">
                <div className="text-cyan md:text-[20px] text-[18px] font-[700] mb-0">
                  Step 3
                </div>
                <h2 className="2xl:text-[48px] xl:text-[40px] lg:text-[35px] md:text-[28px] text-[20px] font-[700] 2xl:leading-[54px] 2xl:pb-2">
                  Get your tailored report
                </h2>
                <p className="text-[16px] lg:text-[18px] 2xl:text-[19px] pb-2">
                  Receive a <span className="text-cyan">detailed report</span>{" "}
                  with actionable insights to drive revenue now!
                </p>
                <div className="max-w-[652px]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[16px] lg:text-[18px] 2xl:text-[20px]">
                      Overall Score
                    </div>
                    <div className="text-2xl font-[700] text-cyan">A-</div>
                  </div>
                  <div className="h-[8px] md:h-[10px] rounded-full bg-[#31373D]">
                    <div className="h-[8px] md:h-[10px] rounded-full bg-cyan w-[75%]"></div>
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
