import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252A2E] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-[75vh] px-4 3xl:py-[80px] py-[24px]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="">
            {/* Hero Section */}
            <div className="flex items-center space-x-4">
              <h1 className="xl:font-[800] font-[700] md:text-[40px] lg:text-[60px] xl:text-[75px] 3xl:text-[100px] xl:leading-[136.18px] lg:leading-[] text-5xl font-bold">
                Review your Website with AI{" "}
                <span className="inline-flex items-center">
                  <Image
                    src="/assets/brain.svg"
                    alt="brain"
                    width={80}
                    height={72}
                    className="my-auto 3xl:w-[80px] xl:w-[60px] w-[50px]"
                  />
                </span>
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-2xl">
                You deserve a website that works as{" "}
                <span className="bg-emerald-400/20 px-2 py-1 text-emerald-400">
                  hard as you do
                </span>
                .
              </p>
              <p className="text-xl text-gray-400">We&apos;re here to help!</p>
            </div>

            {/* Analysis Section */}
            <div className="mt-[80px] grid lg:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-center space-x-4 mb-[80px]">
                  <span className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center">
                    1
                  </span>
                  <span className="text-lg">Enter your URL here</span>
                </div>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your website URL here..."
                    className="flex-1 p-3 rounded-l bg-gray-800 border border-gray-700 text-white"
                  />
                  <button className="px-6 py-3 bg-emerald-400 text-gray-900 font-medium rounded-r hover:bg-emerald-300 transition-colors">
                    Analyze
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-[18px]">
                <div className="mt-[60px]">
                  <span className="text-lg">Press </span>
                  <span className="text-emerald-400">Analyze</span>
                  <span className="text-lg"> to get</span>
                  <br />
                  <span className="text-lg">your personalized report</span>
                </div>

                <div className="relative">
                  <div className="w-[261px] h-[316px] mt-[20px]">
                    <Image
                      src="/assets/pages.svg"
                      alt="pages"
                      width={261}
                      height={316}
                    />
                    <span className="absolute left-[-70px] top-0 3xl:w-[50px] w-[40px] 3xl:h-[50px] h-[40px] rounded-full 3xl:text-[30px] lg:text-[24px] text-[20px] font-bold bg-cyan flex items-center justify-center">
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
