import Image from "next/image";
import { GradeBadge } from "./GradeBadge";
import { BiPlus } from "react-icons/bi";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ReportPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          {/* Header Card */}
          <div className="bg-white text-gray-900 rounded-xl xl:px-[51px] lg:px-[45px] md:px-[30px] sm:px-[20px] px-4 xl:py-[42px] lg:py-[38px] md:py-[30px] py-[20px] xl:mb-[62px] lg:mb-[50px] md:mb-[40px] mb-[30px] flex justify-between items-center gap-2 md:flex-nowrap flex-wrap">
            <div>
              <h1 className="2xl:text-[56px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[20px] text-[18px] font-bold">
                Your Custom Report
              </h1>
              <p className="font-[300] 2xl:text-[35px] xl:text-[28px] lg:text-[20px] md:text-[18px] text-base md:mt-1">
                www.yourwebsite.com
              </p>
            </div>
            <div className="flex items-center md:gap-2 gap-[6px]">
              <Image
                src="/assets/box.svg"
                alt="box"
                width={52.05}
                height={59.8}
                className="2xl:w-[52.05px] lg:w-[40px] md:w-[30px] w-[24px] 2xl:h-[59.8px] lg:h-[40px] md:h-[30px] h-[24px]"
              />
              <span className="font-[600] 2xl:text-[42px] xl:text-[40px] lg:text-[30px] md:text-[20px] text-base">
                Polygonal Research, LLC
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[300px,1fr] md:gap-8 gap-[100px]">
            {/* Left Sidebar */}
            <div className="space-y-6">
              <div className="relative">
                <div className="rounded-[10px] overflow-hidden p-4">
                  <Image
                    src="/assets/laptop.png"
                    alt="Website Screenshot"
                    width={545}
                    height={337}
                    className="w-full rounded-[10px] overflow-hidden"
                  />
                </div>
                <div className="absolute lg:top-[3%] top-[5%] lg:right-[8%] right-[10%]">
                  <GradeBadge
                    grade="B-"
                    className="md:w-[70px] w-[55px] md:h-[70px] h-[55px] border-[4.5px] 2xl:text-[30px] xl:text-[30px] lg:text-[20px] md:text-[18px] text-[16px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">
                  Get your full detailed PDF report by email today!
                </h2>
                <button className="w-full bg-cyan text-gray-900 py-3 px-6 rounded-[10px] overflow-hidden font-semibold hover:bg-emerald-500 transition-colors">
                  Unlock ($4.99)
                </button>
              </div>

              <div className="relative mx-auto 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[358.4px] mt-[20px]">
                {/* First page - back */}
                <div className="absolute right-0 top-8 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page3.png"
                    alt="Website Review Page 3"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg ms-auto object-contain"
                  />
                </div>

                {/* Second page - middle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page2.png"
                    alt="Website Review Page 2"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg mx-auto object-contain"
                  />
                </div>

                {/* Third page - front */}
                <div className="relative left-0 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page1.png"
                    alt="Website Review Page 1"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg relative left-0 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Summary Section */}
              <div className="bg-white text-white rounded-[10px] overflow-hidden">
                <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                  <div className="flex items-center gap-2">
                    <BiPlus />

                    <h2 className="font-[400]">Summary</h2>
                  </div>
                  <GradeBadge grade="B" />
                </div>
                <div className="md:px-[18px] px-4 py-[14px]">
                  <ul className="list-disc ml-5 mb-4 text-[#252A2E]">
                    <li>Our understanding of the goal of the website</li>
                    <li>High level summary of our takeaways</li>
                    <li>Grades for each category</li>
                  </ul>
                  <p className="text-[#252A2E]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Visual Appeal Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Visual Appeal</h2>
                    </div>
                    <GradeBadge grade="C" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <ul className="list-disc ml-5 mb-4 text-[#252A2E]">
                      <li>Image quality / relevance</li>
                      <li>Use of white space</li>
                      <li>Color scheme</li>
                      <li>Visual "freshness", modernity</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Usability</h2>
                    </div>
                    <GradeBadge grade="A" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <ul className="list-disc ml-5 mb-4 text-[#252A2E]">
                      <li>Ease of navigation</li>
                      <li>Mobile responsiveness</li>
                      <li>Page load speed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Content</h2>
                    </div>
                    <GradeBadge grade="A" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <p className="text-[#252A2E]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Branding</h2>
                    </div>
                    <GradeBadge grade="B" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <p className="text-[#252A2E]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Trustworthy</h2>
                    </div>
                    <GradeBadge grade="C" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <p className="text-[#252A2E]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="bg-white text-white rounded-[10px] overflow-hidden">
                  <div className="flex justify-between items-center md:px-[18px] px-4 py-[6px] bg-[#5E656C]">
                    <div className="flex items-center gap-2">
                      <BiPlus />

                      <h2 className="font-[400]">Call to Action</h2>
                    </div>
                    <GradeBadge grade="F" />
                  </div>
                  <div className="md:px-[18px] px-4 py-[14px]">
                    <p className="text-[#252A2E]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
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
