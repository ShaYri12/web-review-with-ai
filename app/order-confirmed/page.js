import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { LuCircleCheckBig } from "react-icons/lu";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function OrderConfirmed() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex md:flex-row flex-col gap-6 md:gap-[30px] items-center">
          {/* Left Column */}
          <div className="w-full">
            <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[80px] md:text-left text-center">
              Order Confirmed!
            </h1>

            <div className="flex justify-center md:hidden sm:mt-[20px] mt-3">
              <LuCircleCheckBig
                className="w-[100px] h-[100px] text-cyan"
                strokeWidth={2.3}
              />
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] font-[400] md:text-left text-center mt-4 2xl:leading-[42px] xl:leading-[34px] lg:leading-[31px] md:leading-[27.5px] leading-[22px]">
              Your website is about to kick some{" "}
              <span className="relative inline-flex">
                <span className="z-[2] relative font-[700] pe-[1px]">
                  serious butt!
                </span>
                <span className="3xl:h-[15px] 2xl:h-[12px] md:h-[8px] sm:h-[6px] h-[5px] w-full z-[1] absolute 3xl:bottom-[4px] bottom-[2px] left-0 bg-cyan rounded-[3px] flex"></span>
              </span>{" "}
            </p>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[30px] 2xl:text-[40px] font-[400] md:text-left text-center xl:mt-[42px] md:mt-[28px] mt-[20px]">
              Your report has just been sent to your email:{" "}
              <span className="italic text-white inline-flex">
                {"<user email>"}
              </span>
            </p>

            <div className="bg-[#181C1E] rounded-[25px] px-4 2xl:py-[64px] xl:py-[50px] lg:py-[40px] md:py-[30px] py-[20px] 2xl:space-y-[60px] xl:space-y-[50px] lg:space-y-[40px] md:space-y-[30px] space-y-[20px]  2xl:mt-[42px] xl:mt-[42px] md:mt-[28px] mt-[20px]">
              <h2 className="2xl:text-[75px] xl:text-[65px] lg:text-[55px] md:text-[45px] text-[35px] font-bold text-center">
                Follow us on Social!
              </h2>
              <div className="flex 2xl:gap-[70px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] gap-[30px] items-center justify-center">
                <Link href="#" className="hover:text-cyan transition-colors">
                  <FaFacebook
                    size={77}
                    className="2xl:w-[77px] xl:w-[48px] lg:w-[35px] md:w-[30px] w-[25px]"
                  />
                </Link>
                <Link href="#" className="hover:text-cyan transition-colors">
                  <BsInstagram
                    size={77}
                    className="2xl:w-[77px] xl:w-[48px] lg:w-[35px] md:w-[30px] w-[25px]"
                  />
                </Link>
                <Link href="#" className="hover:text-cyan transition-colors">
                  <FaLinkedin
                    size={77}
                    className="2xl:w-[77px] xl:w-[48px] lg:w-[35px] md:w-[30px] w-[25px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Check Icon */}
          <div className="flex justify-center md:justify-end md:block hidden">
            <LuCircleCheckBig
              className="2xl:w-[388px] xl:w-[350px] lg:w-[300px] w-64 2xl:h-[388px] xl:h-[350px] lg:h-[300px] h-64 text-cyan"
              strokeWidth={2.3}
            />
          </div>
        </div>
      </main>
      <Footer social={false} />
    </div>
  );
}
