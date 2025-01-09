export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h1 className="text-6xl font-bold leading-tight mb-8">
            How does{" "}
            <div>
              it <span className="text-emerald-400">work?</span>
            </div>
          </h1>
          <p className="text-xl leading-relaxed">
            Follow these three easy steps to get actionable insights about your
            website's performance today!
          </p>
        </div>

        {/* Right Column - Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="text-emerald-400 mb-4">Step 1</div>
            <h2 className="text-3xl font-bold mb-4">Enter your website URL</h2>
            <p className="mb-4">
              Getting started is easy! Just enter your website URL on the home
              screen and click <span className="text-emerald-400">Analyze</span>
              .
            </p>
            <input
              type="url"
              placeholder="https://www.yourwebsite.com"
              className="w-full bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="text-emerald-400 mb-4">Step 2</div>
            <h2 className="text-3xl font-bold mb-4">AI to the rescue!</h2>
            <p className="mb-6">
              Our smart <span className="text-emerald-400">AI engine</span>{" "}
              dives into your website, pinpointing hidden issues that might be
              affecting your business.
            </p>
            <div className="space-y-2">
              <div className="h-2 bg-emerald-400 rounded-full w-full"></div>
              <div className="h-2 bg-emerald-400 rounded-full w-11/12"></div>
              <div className="h-2 bg-emerald-400 rounded-full w-8/12"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="text-emerald-400 mb-4">Step 3</div>
            <h2 className="text-3xl font-bold mb-4">
              Get your tailored report
            </h2>
            <p className="mb-6">
              Receive a{" "}
              <span className="text-emerald-400">detailed report</span> with
              actionable insights to drive revenue now!
            </p>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm">Overall Score</div>
              <div className="text-2xl font-bold text-emerald-400">A-</div>
            </div>
            <div className="h-2 rounded-full bg-gray-700">
              <div className="h-2 rounded-full bg-emerald-400 w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
