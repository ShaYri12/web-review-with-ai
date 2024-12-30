import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252A2E] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-[70vh] px-4 lg:px-[24px] 3xl:py-[80px] py-[24px]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="">
            {/* Hero Section */}
            <div className="flex items-center space-x-4">
              <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[75px] 3xl:text-[100px] 2xl:leading-[136.18px] lg:leading-[110px] md:leading-[90px] sm:leading-[80px] leading-[50px]">
                Review your Website with AI{" "}
                <span className="inline-flex items-center">
                  <Image
                    src="/assets/brain.svg"
                    alt="brain"
                    width={80}
                    height={72}
                    className="my-auto 3xl:w-[80px] lg:w-[60px] md:w-[40px] sm:w-[33px] w-[29px]"
                  />
                </span>
              </h1>
            </div>

            <p className="sm:mt-0 mt-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[30px] 3xl:text-[40px] font-[300] sm:max-w-[1029px] max-w-[360px]">
              You deserve a website that works as{" "}
              <span className="relative">
                <span className="z-[2] relative font-[700]">
                  hard as you do
                  <span className="font-[400] md:pe-0 pe-[1px]">.</span>
                </span>
                <span className="3xl:h-[15px] 2xl:h-[12px] md:h-[8px] sm:h-[6px] h-[5px] w-full z-[1] absolute 3xl:bottom-[4px] bottom-[2px] left-0 bg-cyan rounded-[3px] flex"></span>
              </span>{" "}
              <br className="sm:block hidden" />
              We&apos;re here to help!
            </p>

            {/* Analysis Section */}
            <div className="3xl:mt-[80px] lg:mt-[70px] md:mt-[60px] mt-[50px] flex lg:flex-row flex-col justify-between gap-8 xl:gap-[100px]">
              {/* Step 1 */}
              <div className="relative flex-1 lg:w-auto max-w-[600px]">
                <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-[20px] 3xl:space-x-[26px] 3xl:mb-[80px] lg:mb-[60px] mb-[40px]">
                  <span className="3xl:w-[50px] lg:w-[40px] md:w-[35px] w-[30px] 3xl:h-[50px] lg:h-[40px] md:h-[35px] h-[30px] rounded-full 3xl:text-[30px] lg:text-[22px] md:text-[18px] font-bold bg-cyan flex items-center justify-center">
                    1
                  </span>
                  <span className="text-[18px] lg:text-[20px] 3xl:text-[25px]">
                    Enter your URL here
                  </span>
                </div>

                <div className="flex flex-wrap justify-end bg-[#5E656C] rounded-[15px] p-[4px] lg:gap-0 gap-1">
                  <input
                    type="text"
                    placeholder="Enter your website URL here..."
                    className="flex-1 px-4 py-[6px] bg-[#5E656C] rounded-[15px] placeholder:text-[#31373D] outline-none text-white md:text-[18px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[30px]"
                  />
                  <button className="analyze-btn sm:flex-grow-0 flex-grow px-5 py-2 bg-cyan rounded-[10px] text-white md:text-[18px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[30px] font-[600] hover:bg-emerald-300 transition-colors">
                    Analyze
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex lg:flex-nowrap flex-wrap lg:items-start justify-between gap-[18px]">
                <div className="flex space-x-2 md:space-x-4 lg:space-x-[20px] 3xl:space-x-[26px] 3xl:mb-[80px] lg:mb-[60px] mt-[60px]">
                  <span className="3xl:w-[50px] lg:w-[40px] md:w-[35px] w-[32px] 3xl:h-[50px] lg:h-[40px] md:h-[35px] h-[32px] rounded-full 3xl:text-[30px] lg:text-[22px] md:text-[18px] font-bold bg-cyan flex items-center justify-center">
                    2
                  </span>
                  <p className="text-[18px] lg:text-[20px] 3xl:text-[25px] max-w-[260px] lg:max-w-[250px] 3xl:max-w-[300px]">
                    Press <span className="text-cyan">Analyze</span> to get your
                    personalized report
                  </p>
                </div>

                <div className="relative">
                  <div className="3xl:w-[261px] lg:w-[240px] w-[220px] 3xl:h-[316px] mt-[20px]">
                    <Image
                      src="/assets/pages.svg"
                      alt="pages"
                      width={261}
                      height={316}
                    />
                    <span className="lg:flex hidden absolute left-[-70px] top-0 3xl:w-[50px] w-[40px] 3xl:h-[50px] h-[40px] rounded-full 3xl:text-[30px] lg:text-[24px] text-[20px] font-bold bg-cyan items-center justify-center">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
