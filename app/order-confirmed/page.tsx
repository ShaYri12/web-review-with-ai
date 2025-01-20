"use client";
import { useSearchParams } from "next/navigation";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { LuCircleCheckBig } from "react-icons/lu";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function OrderConfirmed() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex md:flex-row flex-col gap-6 md:gap-[80px] lg:gap-[140px] xl:gap-[140px] items-center">
          {/* Left Column */}
          <div className="w-full">
            <h1 className="xl:font-[800] font-[700] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[55px] md:text-left text-center">
              Order Confirmed!
            </h1>

            <div className="flex justify-center md:hidden sm:mt-[16px] mt-2">
              <LuCircleCheckBig
                className="w-[100px] h-[100px] text-cyan"
                strokeWidth={2.3}
              />
            </div>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] font-[400] md:text-left text-center mt-1">
              Your website is about to kick some{" "}
              <span className="relative inline-flex">
                <span className="z-[2] relative font-[700] pe-[1px]">
                  serious butt!
                </span>
                <span className="2xl:h-[11px] md:h-[8px] sm:h-[6px] h-[5px] w-full z-[1] absolute 2xl:bottom-[6px] bottom-[2px] left-0 bg-cyan rounded-[3px] flex"></span>
              </span>{" "}
            </p>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] font-[400] md:text-left text-center xl:mt-[10px] md:mt-[8px] mt-[4px]">
              Your report has just been sent to your email:{" "}
              <span className="italic text-white inline-flex">
                {email ? email : "N/A"}
              </span>
            </p>

            <div className="bg-[#181C1E] rounded-[25px] px-4 xl:py-[40px] lg:py-[30px] md:py-[20px] py-[16px] 2xl:space-y-[50px] xl:space-y-[40px] lg:space-y-[30px] md:space-y-[20px] space-y-[16px] 2xl:mt-[30px] xl:mt-[28px] md:mt-[25px] mt-[20px]">
              <h2 className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] font-bold text-center">
                Follow us on Social!
              </h2>
              <div className="flex 2xl:gap-[50px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] gap-[16px] items-center justify-center">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-cyan transition-colors"
                >
                  <FaFacebook
                    size={77}
                    className="2xl:w-[60px] xl:w-[40px] lg:w-[35px] md:w-[28px] w-[25px]"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-cyan transition-colors"
                >
                  <BsInstagram
                    size={77}
                    className="2xl:w-[60px] xl:w-[40px] lg:w-[35px] md:w-[28px] w-[25px]"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="hover:text-cyan transition-colors"
                >
                  <FaLinkedin
                    size={77}
                    className="2xl:w-[60px] xl:w-[40px] lg:w-[35px] md:w-[28px] w-[25px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Check Icon */}
          <div className="flex justify-center md:justify-end md:block hidden">
            <LuCircleCheckBig
              className="xl:w-[340px] lg:w-[300px] w-64 2xl:h-[388px] xl:h-[350px] lg:h-[300px] h-64 text-cyan"
              strokeWidth={2.3}
            />
          </div>
        </div>
      </main>
      <div className="mt-[-80px] w-full">
        <Footer social={false} />
      </div>
    </div>
  );
}
