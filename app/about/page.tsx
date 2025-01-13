"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState } from "react";
import axios from "axios";

export default function About() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email data
    const emailData = {
      to: "polygonalresearchllc@gmail.com", // Send email to this address
      subject: "New Contact Form Submission",
      body: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    try {
      // Send email to your address
      await axios.post("/api/send-email", emailData);

      // If consent is checked, add the user to Mailchimp
      if (formData.consent) {
        const mailchimpData = {
          email_address: formData.email,
          status: "subscribed",
          merge_fields: {
            FNAME: formData.firstName,
            LNAME: formData.lastName,
          },
        };

        await axios.post("/api/mailchimp", mailchimpData);
      }

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      {/* Polygon Design Image */}
      <img
        src="/assets/polygon-design.svg"
        alt="polygon-design"
        className="fixed right-0 top-0 z-1 h-screen w-auto"
      />

      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          <div className="xl:max-w-[71%] lg:max-w-[60%] pb-[30px]">
            {/* Story Section */}
            <h1 className="xl:font-[800] font-[700] text-[37px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[70px] 3xl:text-[80px] lg:mb-[20px] sm:mb-4 mb-3">
              <span className="text-white">Our </span>
              <span className="text-emerald-400">story</span>
            </h1>

            <p className="3xl:text-[30px] md:text-[24px] sm:text-[20px] md:mb-[40px] mb-[30px] text-justify">
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
              <h2 className="text-[20px] md:text-[28px] lg:text-[35px] font-bold mb-3 md:mb-[20px] xl:mb-[32px]">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-[15px]">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-[18px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-white font-[400]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    aria-label="First Name"
                    className="w-full p-2 bg-white rounded text-black focus:outline-none focus:ring-2 focus:ring-cyan"
                    required
                    minLength={2}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-[18px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-white font-[400]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    aria-label="Last Name"
                    className="w-full p-2 bg-white rounded text-black focus:outline-none focus:ring-2 focus:ring-cyan"
                    required
                    minLength={2}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[18px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-white font-[400]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Email"
                    className="w-full p-2 bg-white rounded text-black focus:outline-none focus:ring-2 focus:ring-cyan"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-[18px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-white font-[400]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    aria-label="Message"
                    className="w-full p-2 bg-white rounded text-black focus:outline-none focus:ring-2 focus:ring-cyan"
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-start gap-2 md:gap-3 xl:gap-[15px] pb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1"
                    aria-label="Consent to email notifications focus:outline-none focus:ring-2 focus:ring-cyan"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm md:text-[16px] lg:text-[18px] xl:text-[20px] text-white cursor-pointer"
                  >
                    I accept that Polygonal Research may send me, via email,
                    information about marketing, sales, and new information. I
                    can withdraw my consent at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan text-white 2xl:text-[25px] lg:text-[20px] md:text-[18px] py-[6px] rounded-[5px] font-[400] hover:bg-emerald-500 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
