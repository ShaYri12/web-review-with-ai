"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="h-full flex flex-col justify-between min-h-full items-center bg-[#252A2E] text-white">
      <img
        src="/assets/polygon-design.svg"
        alt="polygon-design"
        className="absolute right-0 top-0 z-1 h-fit"
      />
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="xl:max-w-[53%] lg:max-w-[60%]">
            {/* Story Section */}
            <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[80px] lg:mb-[20px]">
              <span className="text-white">Our </span>
              <span className="text-emerald-400">story</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed text-justify">
              At Polygonal Research, we believe that you deserve a website that
              tells your story{" "}
              <span className="relative inline-flex">
                <span className="z-[2] relative font-[700]">
                  as passionately as you live it
                  <span className="font-[400] md:pe-0 pe-[1px]">.</span>
                </span>
                <span className="3xl:h-[15px] 2xl:h-[12px] md:h-[8px] sm:h-[6px] h-[5px] w-full z-[1] absolute 3xl:bottom-[4px] bottom-[2px] left-0 bg-cyan rounded-[3px] flex"></span>
              </span>{" "}
              In our careers designing bleeding edge technology and digital
              marketing strategies, we’ve seen how the right online presence can
              open doors—and we’re passionate about helping others unlock that
              potential. We created this service because we know the digital
              world can be intimidating, so we're here to make it simple and
              impactful, helping businesses transform their websites into tools
              for growth, connection, and real opportunity.
            </p>

            {/* Contact Form */}
            <div className="mt-12 sm:mt-16 max-w-[496px]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact Us
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 text-gray-900"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    aria-label="First Name"
                    className="w-full p-2 bg-white rounded"
                    required
                    minLength={2}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    aria-label="Last Name"
                    className="w-full p-2 bg-white rounded"
                    required
                    minLength={2}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Email"
                    className="w-full p-2 bg-white rounded"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    aria-label="Message"
                    className="w-full p-2 bg-white rounded"
                    required
                    minLength={10}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1"
                    aria-label="Consent to email notifications"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-gray-300 leading-tight"
                  >
                    I accept that Polygonal Research may send me, via email,
                    information about marketing, sales, and new information. I
                    can withdraw my consent at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-400 text-gray-900 py-3 rounded font-medium hover:bg-emerald-500 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
