import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsAndService = () => {
  return (
    <div className='3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto py-3 sm:py-6'>
      <Header />
      <div className='mb-0 sm:mb-6 px-4 lg:px-6 text-white'>
        <p className='mt-3 sm:mb-4 text-base sm:text-[20px] font-normal'>Welcome to Ready2Launch, a service provided by Polygonal Research, LLC ("we," "us," or "our"). By accessing or using our service, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, do not use our service.</p>
        <div className="">
          {/* Service Description */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>1</div>
              Service Description
            </h2>
            <p className='text-base sm:text-lg pl-8 sm:pl-11 font-light'>
              Ready2Launch is an AI-powered website analysis tool that provides users with a free analysis of their website. Users can also purchase a more comprehensive, advanced report through our secure payment system.
            </p>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['1.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Free Analysis:</span> Our free service provides a basic overview and scorecard of the submitted website's look and
                feel, messaging, and functionality.
              </li>
              <li className="text-base sm:text-lg relative before:content-['1.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Advanced Reports:</span> For a fee, users can access detailed insights and recommendations to improve their website.
              </li>
            </ul>
          </div>

          {/* User Eligibility and Account */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>2</div>
              User Eligibility and Account
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['2.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Global Availability:</span> Our service is available worldwide, subject to payment restrictions that may be imposed by our payment processor, Stripe.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Age Restrictions:</span> While there are no specific age restrictions for using Ready2Launch, users must have the legal capacity to enter into a binding agreement.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Usage Limits:</span> To prevent abuse and ensure fair access, users are limited to three URL submissions per IP address daily.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Account Security:</span> Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
              </li>
              <li className="text-base sm:text-lg relative before:content-['2.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Service Abuse:</span> We reserve the right to restrict or terminate access from specific IP addresses or regions if we detect abuse, suspicious activity, or violation of these Terms.
              </li>
            </ul>
          </div>

          {/* User Data and Privacy */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className=' text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>3</div>
              User Data and Privacy
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-lg relative before:content-['3.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Data Collection:</span> To use our service, users must provide a public URL for analysis. For paid reports, email addresses are collected during the checkout process.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Marketing Communications:</span> Users may opt-in to receive marketing communications from us. These communications will be managed through our email service provider, Mailchimp.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Data Usage:</span> We use collected data solely to provide our service, improve our offerings, and communicate with users who have opted in to receive marketing materials.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Third-Party Services:</span> We use reputable third-party services for payment processing and email communications. These services have their own privacy policies and terms of use.
              </li>
              <li className="text-base sm:text-lg relative before:content-['3.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Privacy Policy:</span> We implement reasonable security measures to protect user data. For more detailed information on our data handling practices, please refer to our Privacy Policy.
              </li>
            </ul>
          </div>

          {/* Payment and Refunds */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>4</div>
              Payment and Refunds
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['4.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Payment Processing:</span> Payments for advanced reports are securely processed through Stripe, a third-party payment processor.
              </li>
              <li className="text-base sm:text-lg relative before:content-['4.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Pricing:</span> Prices for our advanced reports are clearly displayed before purchase. We reserve the right to change our pricing at any time.
              </li>
              <li className="text-base sm:text-lg relative before:content-['4.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Refund Policy:</span> Refunds may be issued at our discretion if the report quality is demonstrably poor due to technical failures. Examples include:
                <ul className='list-disc pl-4 sm:pl-5 pt-2'>
                  <li>Failure to access the submitted website</li>
                  <li>Analysis of only part of a larger site</li>
                  <li>Significant AI hallucinations or factual errors</li>
                </ul>
              </li>
              <li className="text-base sm:text-lg relative before:content-['4.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Refund Exclusions:</span> We do not offer refunds based on subjective disagreement with insights or perceived lack of utility.
              </li>
              <li className="text-base sm:text-lg relative before:content-['4.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Refund Process:</span> To request a refund, users must contact our customer support within 3 days of purchase, providing a detailed explanation of the issue.
              </li>
            </ul>
          </div>

          {/* Intellectual Property Rights */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>5</div>
              Intellectual Property Rights
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['5.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>User Content:</span> Users retain all rights to the websites they submit for analysis.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Our Intellectual Property:</span> Ready2Launch, its design, brand, logos, algorithms, and underlying technology are the intellectual property of Polygonal Research, LLC. All rights are reserved.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>License to Use:</span> We grant users a limited, non-exclusive, non-transferable license to use our service for its intended purpose.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Restrictions:</span> Users are strictly prohibited from:
                <ul className='list-disc pl-4 sm:pl-5 pt-2'>
                  <li>Reverse engineering our service or methodology</li>
                  <li>Copying, modifying, or creating derivative works of our service</li>
                  <li>Using our service to create a competing product</li>
                </ul>
              </li>
              <li className="text-lg relative before:content-['5.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>User Reports:</span> Purchased reports become the property of the user, who may use the information for any lawful purpose.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.6'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>User License:</span> We grant you a non-exclusive, non-transferable, revocable license to access and use our Services solely for your personal, non-commercial use or internal business purpose.
              </li>
              <li className="text-base sm:text-lg relative before:content-['5.7'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Additional Restrictions:</span> You are strictly prohibited from:
                <ul className='list-disc pl-4 sm:pl-5 pt-2'>
                  <li>Copying, modifying, or creating derivative works of our service</li>
                  <li>Using our service to create a competing product</li>
                  <li>Engaging in unauthorized framing of or linking to the Services</li>
                  <li>Attempting to access or use the Services through automated means</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Report Retention and Access */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>6</div>
              Report Retention and Access
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['6.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Free Reports:</span> Free reports are not stored for later retrieval.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Purchased Reports:</span> Advanced reports are available for purchase within 7 days of running the initial analysis. Once purchased, advanced reports are stored on our secure servers and remain accessible to users for 90 days from the date of purchase.
              </li>
              <li className="text-base sm:text-lg relative before:content-['6.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Data Deletion:</span> After the retention period, reports are automatically deleted from our systems.
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>7</div>
              Limitation of Liability
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['7.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Informational Purpose:</span> Ready2Launch provides insights and recommendations for informational purposes only. We do not guarantee specific outcomes or results from using our service.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>No Professional Advice:</span> Our reports do not constitute professional or legal advice. Users should consult with qualified professionals before making significant changes to their websites or businesses.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>User Responsibility:</span> We are not liable for any actions taken by users based on our reports. Users are solely responsible for the implementation of any recommendations.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Accuracy Disclaimer:</span> While we strive for accuracy, we do not guarantee error-free results due to the nature of AI technology and the complexity of website analysis.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Consequential Damages:</span> In no event shall Polygonal Research, LLC be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our service.
              </li>
              <li className="text-base sm:text-lg relative before:content-['7.6'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Third-Party Content:</span> We are not responsible for any third-party websites or content accessed through our Services. You access such content at your own risk.
              </li>
            </ul>
          </div>

          {/* Acceptable Use */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>8</div>
              Acceptable Use
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['8.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Intended Use:</span> Ready2Launch is intended for analyzing websites to improve design, marketing, SEO, and related aspects.
              </li>
              <li className="text-base sm:text-lg relative before:content-['8.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Prohibited Activities:</span> Users are prohibited from:
                <ul className='list-disc pl-4 sm:pl-5 pt-2'>
                  <li>Using our service for any illegal or unauthorized purpose</li>
                  <li>Attempting to interfere with or disrupt our service or servers</li>
                  <li>Accessing data not intended for the user</li>
                  <li>Using our service to infringe on intellectual property rights</li>
                </ul>
              </li>
              <li className="text-base sm:text-lg relative before:content-['8.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Additional Prohibited Activities:</span> Users are also prohibited from:
                <ul className='list-disc pl-4 sm:pl-5 pt-2'>
                  <li>Attempting to interfere with or disrupt our service or servers</li>
                  <li>Using the Services for any illegal or unauthorized purpose</li>
                  <li>Uploading or transmitting viruses, malware, or other malicious code</li>
                  <li>Collecting user information without consent</li>
                  <li>Impersonating another user or person</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Modifications to Terms */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-center gap-2 sm:gap-3'>
              <div className='w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl'>9</div>
              Modifications to Terms
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['9.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Updates:</span> We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.
              </li>
              <li className="text-base sm:text-lg relative before:content-['9.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Notification:</span> We will make reasonable efforts to notify users of significant changes to these Terms. Continued use of our service after changes constitute acceptance of the modified Terms.
              </li>
            </ul>
          </div>

          {/* Governing Law and Dispute Resolution */}
          <div className='pt-3 sm:pt-5 space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
              <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-1'>10</div>
              Governing Law and Dispute Resolution
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['10.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'> Governing Law:</span> These Terms are governed by and construed in accordance with the laws of the State of Colorado, USA, without regard to its conflict of law principles.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'> Dispute Resolution:</span> In the event of any dispute arising from or relating to these Terms or our service, the parties agree to first attempt to resolve the dispute through good-faith negotiations.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Mediation:</span> If negotiations are unsuccessful, the parties agree to attempt to resolve the dispute through mediation before pursuing arbitration or litigation.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Arbitration:</span> Any dispute not resolved through negotiation or mediation shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association.
              </li>
              <li className="text-base sm:text-lg relative before:content-['10.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Individual Basis:</span> Any legal proceedings will be conducted solely on an individual basis. Users waive any right to bring claims on a class, consolidated, or representative basis.
              </li>
            </ul>
          </div>

          {/* Miscellaneous */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
              <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>11</div>
              Miscellaneous
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['11.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Entire Agreement:</span> These Terms constitute the entire agreement between users and Polygonal Research, LLC regarding the use of Ready2Launch.
              </li>
              <li className="text-base sm:text-lg relative before:content-['11.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Severability:</span> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect.
              </li>
              <li className="text-base sm:text-lg relative before:content-['11.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Waiver:</span> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </li>
              <li className="text-base sm:text-lg relative before:content-['11.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Assignment:</span> Users may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign or transfer these Terms, at our sole discretion, without restriction.
              </li>
              <li className="text-base sm:text-lg relative before:content-['11.5'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Force Majeure:</span> Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, or global pandemics.
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
              <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>12</div>
              Contact Information
            </h2>
            <p className='text-base sm:text-lg pl-9 sm:pl-11 font-light'>
              For any questions or concerns regarding these Terms of Service, please contact us at polygonalresearchllc@gmail.com
            </p>
          </div>

          {/* Copyright and DMCA Policy */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
              <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-1'>13</div>
              Copyright and DMCA Policy
            </h2>
            <ul className='pl-[70px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['13.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Copyright Respect:</span> We respect the intellectual property rights of others and expect our users to do the same.
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>DMCA Notices:</span> If you believe that material available through our service infringes your copyright, you may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA).
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Counter-Notices:</span> If material you submitted has been removed due to a DMCA notice, you may submit a counter-notice.
              </li>
              <li className="text-base sm:text-lg relative before:content-['13.4'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Repeat Infringers:</span> We will terminate the accounts of users who are repeat infringers of copyright.
              </li>
            </ul>
          </div>

          <div className='pt-3 sm:pt-5 space-y-2'>
            <h2 className='text-[24px] font-semibold flex sm:items-center gap-3'>
              <div className='min-w-6 sm:w-8 h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-lg sm:text-2xl'>14</div>
              <p className='text-base sm:text-lg font-light'>
                For the full process of submitting DMCA notices and counter-notices, please contact us at polygonalresearchllc@gmail.com
              </p>
            </h2>
          </div>

          {/* Indemnification */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
              <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-1'>15</div>
              Indemnification
            </h2>
            <p className='text-base sm:text-lg pl-8 sm:pl-11 font-light'>
              You agree to indemnify, defend, and hold harmless Polygonal Research, LLC, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul className='pl-[50px] sm:pl-[84px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className=' list-disc'>Your use of the Service</li>
              <li className=' list-disc'>Your violation of these Terms</li>
              <li className=' list-disc'>Your violation of any third party right, including without limitation any copyright, property, or privacy right</li>
              <li className=' list-disc'>Any claim that your use of the Service caused damage to a third party</li>
            </ul>
          </div>

          {/* Term and Termination */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
            <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>16</div>
              Term and Termination
            </h2>
            <ul className='pl-[70px] sm:pl-[85px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['15.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Duration:</span> These Terms shall remain in full force and effect while you use the Services.
              </li>
              <li className="text-base sm:text-lg relative before:content-['15.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Termination Rights:</span> We reserve the right to terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </li>
              <li className="text-base sm:text-lg relative before:content-['15.3'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Post-Termination:</span> Upon termination, your right to use the Services will immediately cease. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party.
              </li>
            </ul>
          </div>

          {/* Corrections */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
            <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>17</div>
              Corrections
            </h2>
            <p className='text-base sm:text-lg pl-9 sm:pl-11 font-light'>
              <span className='font-normal'>Errors and Omissions:</span> There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </div>

          {/* Electronic Communications */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
            <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>18</div>
              Electronic Communications
            </h2>
            <ul className='pl-[70px] sm:pl-[85px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['17.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Consent:</span> By using our Services, you consent to receive electronic communications from us. These communications may include notices about your account, transaction confirmations, and other information concerning or related to the Services.
              </li>
              <li className="text-base sm:text-lg relative before:content-['17.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Electronic Format:</span> You agree that any agreements, notices, disclosures, or other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
              </li>
            </ul>
          </div>

          {/* Service Interruptions */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
            <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>19</div>
              Service Interruptions
            </h2>
            <ul className='pl-[70px] sm:pl-[85px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className="text-base sm:text-lg relative before:content-['18.1'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Availability:</span> We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.
              </li>
              <li className="text-base sm:text-lg relative before:content-['18.2'] before:absolute before:-left-[40px] before:text-primary before:font-medium">
                <span className='font-normal'>Modifications:</span> We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you.
              </li>
            </ul>
          </div>

          {/* Service Interruptions */}
          <div className='pt-3 sm:pt-5 space-y-1.5 sm:space-y-2'>
            <h2 className='text-xl sm:text-xl md:text-[24px] font-semibold flex items-start gap-2 sm:gap-3'>
            <div className='min-w-6 sm:w-8 min-h-6 sm:h-8 bg-cyan flex items-center justify-center rounded text-base sm:text-2xl mt-0.5'>20</div>
              User Representations
            </h2>
            <p className='text-base sm:text-lg pl-[34px] sm:pl-11 font-light'>By using the Services, you represent and warrant that:</p>
            <ul className='pl-[54px] sm:pl-[85px] sm:pt-1 space-y-1.5 sm:space-y-3 font-light'>
              <li className='list-disc'>All registration information you submit is true, accurate, and complete</li>
              <li className='list-disc'>You have the legal capacity to agree to these Terms</li>
              <li className='list-disc'>You are not a minor in your jurisdiction</li>
              <li className='list-disc'>You will not access the Services through automated means</li>
              <li className='list-disc'>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsAndService