import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsAndService = () => {
  return (
    <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto py-3 sm:py-6">
      <Header />
      <div className="mb-0 sm:mb-6 px-4 lg:px-6 text-white">
        <p className="mt-3 sm:mb-4 text-base sm:text-[20px] font-normal">
          This Privacy Policy describes how Ready2Launch, operated by Polygonal
          Research, LLC ("we," "us," or "our"), collects, uses, and protects
          your information when you use our website analysis service.
        </p>

        <div className="">
          {/* Information Collection */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                1
              </div>
              Information Collection
            </h2>
            <ul className="pl-[60px] sm:pl-[75px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['1.1'] before:absolute before:-left-[30px] before:text-primary before:font-medium">
                We collect the following types of information:
                <ul className="list-disc pl-4 sm:pl-5 pt-1 sm:pt-2">
                  <li>
                    <span>Public URLs: </span> When you submit a website for
                    analysis, we collect the URL you provide.
                  </li>
                  <li>
                    <span>Email Addresses: </span> We collect email addresses
                    during the checkout process for paid reports or when users
                    opt-in to receive marketing communications.
                  </li>
                  <li>
                    <span>IP Addresses </span> We log IP addresses to prevent
                    service abuse and ensure compliance with our usage limits.
                  </li>
                  <li>
                    <span>Payment Information: </span> When you purchase an
                    advanced report, payment information is collected and
                    processed by our third-party payment processor, Stripe.
                  </li>
                </ul>
              </li>
              <li className="text-base sm:text-lg relative before:content-['1.2'] before:absolute before:-left-[35px] before:text-primary before:font-medium">
                We do not collect personally identifiable information unless
                voluntarily provided by the user.
              </li>
            </ul>
          </div>

          {/* Use of Information */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                2
              </div>
              Use of Information
            </h2>
            <p className="text-base sm:text-lg pl-[34px] sm:pl-11 font-light">
              We use the collected information for the following purposes:
            </p>
            <ul className="pl-[65px] sm:pl-[85px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['2.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Service Provision: </span> To
                generate and deliver website analysis reports to users.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Payment Processing:</span> To
                process payments for advanced reports through our payment
                processor, Stripe.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Communication:</span> To send
                transactional emails related to purchased reports and, if
                opted-in, marketing communications via Mailchimp.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.4'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Service Improvement:</span> To
                analyze usage patterns and improve our service offerings.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.5'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Abuse Prevention:</span> To
                monitor and prevent misuse or abuse of our service.
              </li>
            </ul>
          </div>

          {/* Data Storage and Security */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                3
              </div>
              Data Storage and Security
            </h2>
            <ul className="pl-[65px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['3.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Third-Party Services: </span> We
                utilize reputable third-party services (Mailchimp, Stripe) for
                data encryption, anonymization, and storage. These services have
                their own privacy policies and security measures.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Payment Information:</span> We do
                not store or have direct access to user payment information. All
                payment data is handled securely by Stripe.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Local Processing:</span> The
                analysis of submitted websites occurs on the user's local
                machine in their browser, minimizing data transfer.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.4'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Report Storage:</span> Purchased
                reports are securely stored on our servers for 90 days to allow
                user access.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.5'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Security Measures:</span> We
                implement industry-standard security measures to protect against
                unauthorized access, alteration, disclosure, or destruction of
                data.
              </li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                4
              </div>
              Cookies and Tracking
            </h2>
            <ul className="pl-[63px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['4.1'] before:absolute before:-left-[30px] before:text-primary before:font-medium">
                We use cookies and similar tracking technologies to:
                <ul className="list-disc pl-4 sm:pl-5 pt-1 sm:pt-2">
                  <li>
                    Enhance user experience by remembering preferences and login
                    status
                  </li>
                  <li>Analyze user behavior and improve our service</li>
                  <li>Track the effectiveness of our marketing campaigns</li>
                </ul>
              </li>
              <li className="text-base sm:text-lg relative before:content-['4.2'] before:absolute before:-left-[35px] before:text-primary before:font-medium">
                Users can control cookie settings through their browser
                preferences. However, disabling cookies may limit some features
                of our service.
              </li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                5
              </div>
              Third-Party Services
            </h2>
            <ul className="pl-[65px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['5.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Payment Processing: </span> We use Stripe for secure payment processing. For information on how Stripe handles your payment data, please refer to its privacy policy.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Email Marketing:</span> We use Mailchimp for email marketing communications. Users who opt-in to marketing emails are subject to Mailchimp's privacy policy.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Analytics:</span> We may use third-party analytics services to help us understand how users interact with our website.
              </li>
            </ul>
          </div>

          {/* User Rights */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                6
              </div>
              User Rights
            </h2>
            <p className="text-base sm:text-lg pl-[34px] sm:pl-11 font-light">
              Users have the following rights regarding their personal data:
            </p>
            <ul className="pl-[65px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['6.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Access: </span> You can request access to the personal data we hold about you.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Correction:</span>You can request that we correct any inaccurate or incomplete personal data.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Deletion:</span> You can request the deletion of your personal data, subject to legal requirements.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.4'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Opt-out:</span>You can opt out of marketing communications at any time by using the unsubscribe link in our emails or contacting us directly.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.5'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Data Portability:</span> You can request a copy of your data in a structured, commonly used, and machine-readable format.
              </li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                7
              </div>
              Data Retention
            </h2>
            <ul className="pl-[65px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['7.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Free Reports: </span> Data associated with free reports is not retained.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Purchased Reports:</span> Advanced reports are retained for 90 days from the date of purchase.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Marketing Data:</span> Email addresses and related data for marketing purposes are retained until the user unsubscribes or requests deletion.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.3'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Log Data:</span> IP addresses and usage logs may be retained for up to 30 days for security and abuse prevention purposes.
              </li>
            </ul>
          </div>

          {/* International Data Transfers */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                8
              </div>
              International Data Transfers
            </h2>
            <ul className="pl-[65px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['7.1'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Data Processing Location: </span> Our services are primarily operated and managed in the United States. If you access our services from outside the United States, your information may be transferred to, stored, and processed in the United States.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.2'] before:absolute before:-left-[32px] before:text-primary before:font-medium">
                <span className="font-normal">Data Protection Measures:</span> We take appropriate measures to ensure that your personal data receives an adequate level of protection in the jurisdictions in which we process it.
              </li>
            </ul>
          </div>

          {/* Children's Privacy*/}
          <div className="pt-3 sm:pt-5 space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5">
                9
              </div>
              Children's Privacy
            </h2>
            <p className="text-base sm:text-lg pl-9 sm:pl-11 font-light">
              Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                10
              </div>
              Policy Updates
            </h2>
            <ul className="pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['10.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                We may update this Privacy Policy occasionally to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                We will post the updated Privacy Policy on our website and update the "Last updated" date.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                Continued use of our service after any changes to the Privacy Policy constitutes acceptance of those changes.
              </li>
            </ul>
          </div>

          {/* Contact Information*/}
          <div className="pt-3 sm:pt-5 space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5">
                11
              </div>
              Contact Information
            </h2>
            <p className="text-base sm:text-lg pl-9 sm:pl-11 font-light">
              For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at polygonalresearchllc@gmail.com
            </p>
          </div>

          {/* Data Breach Notification */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                12
              </div>
              Data Breach Notification
            </h2>
            <ul className="pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['12.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Notification Process: </span>  In the event of a data breach that affects your personal information, we will notify you via email within 72 hours of becoming aware of the breach.
              </li>
              <li className="text-base sm:text-lg relative before:content-['12.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Information Provided: </span> Our notification will include the nature of the breach, the types of data potentially affected, and steps we are taking to address the breach.
              </li>
            </ul>
          </div>

          {/* California Residents' Rights */}
          <div className="pt-3 sm:pt-5 space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl">
                13
              </div>
              California Residents' Rights
            </h2>
            <p className="text-base sm:text-lg pl-[34px] sm:pl-11 font-light">
              Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information:
            </p>
            <ul className="pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light">
              <li className="text-base sm:text-lg relative before:content-['13.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Right to Know: </span> You can request information about the personal data we've collected about you over the past 12 months.
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Right to Delete:</span> You can request deletion of your personal information, subject to certain exceptions.
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Right to Opt-Out: </span> You can opt out of the sale of your personal information. However, we do not sell personal information.
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className="font-normal">Non-Discrimination:</span> We will not discriminate against you for exercising your CCPA rights
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                To exercise your rights under CCPA, please contact us at polygonalresearchllc@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-5 text-base sm:text-[20px] font-normal">
          By using Ready2Launch, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndService;
