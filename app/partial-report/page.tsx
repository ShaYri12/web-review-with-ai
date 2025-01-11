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
          <div className="bg-white text-gray-900 rounded-xl p-6 mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                Your Custom Report
              </h1>
              <p className="text-gray-500">www.yourwebsite.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/box.svg"
                alt="box"
                width={27.5}
                height={31.6}
                className="2xl:w-[27.5px] lg:w-[25px] w-[24px] 2xl:h-[31.6px] lg:h-[25px] h-[24px]"
              />
              <span className="font-semibold">Polygonal Research, LLC</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[300px,1fr] md:gap-8 gap-[100px]">
            {/* Left Sidebar */}
            <div className="space-y-6">
              <div className="relative">
                <div className="rounded-lg p-4">
                  <Image
                    src="/assets/laptop.png"
                    alt="Website Screenshot"
                    width={545}
                    height={337}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="absolute lg:top-[3%] top-[5%] lg:right-[8%] right-[10%]">
                  <GradeBadge grade="B-" className="w-[70px] h-[70px]" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">
                  Get your full detailed PDF report by email today!
                </h2>
                <button className="w-full bg-emerald-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-emerald-500 transition-colors">
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
              <div className="bg-white text-gray-900 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <BiPlus />

                    <h2 className="font-semibold">Summary</h2>
                  </div>
                  <GradeBadge grade="B" />
                </div>
                <ul className="list-disc ml-5 mb-4 text-gray-600">
                  <li>Our understanding of the goal of the website</li>
                  <li>High level summary of our takeaways</li>
                  <li>Grades for each category</li>
                </ul>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Visual Appeal Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Visual Appeal</h2>
                    </div>
                    <GradeBadge grade="C" />
                  </div>
                  <ul className="list-disc ml-5 mb-4 text-gray-600">
                    <li>Image quality / relevance</li>
                    <li>Use of white space</li>
                    <li>Color scheme</li>
                    <li>Visual "freshness", modernity</li>
                  </ul>
                </div>

                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Usability</h2>
                    </div>
                    <GradeBadge grade="A" />
                  </div>
                  <ul className="list-disc ml-5 mb-4 text-gray-600">
                    <li>Ease of navigation</li>
                    <li>Mobile responsiveness</li>
                    <li>Page load speed</li>
                  </ul>
                </div>
              </div>

              {/* Additional Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Content</h2>
                    </div>
                    <GradeBadge grade="A" />
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Branding</h2>
                    </div>
                    <GradeBadge grade="B" />
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              {/* Bottom Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Trustworthy</h2>
                    </div>
                    <GradeBadge grade="C" />
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h2 className="font-semibold">Call to Action</h2>
                    </div>
                    <GradeBadge grade="F" />
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
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
