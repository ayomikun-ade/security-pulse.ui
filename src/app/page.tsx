import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">
          Security Pulse
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Stay ahead of the curve with real-time cybersecurity intelligence.
          Monitor critical CISA vulnerabilities and global security news in one
          place.
        </p>

        <div className="pt-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ring-offset-gray-900"
          >
            Scan Global Threats
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-blue-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              CISA KEV Feed
            </h3>
            <p className="text-gray-400">
              Instant access to the Known Exploited Vulnerabilities catalog.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-purple-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Global News
            </h3>
            <p className="text-gray-400">
              Aggregated security news from top industry sources.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-green-400 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time</h3>
            <p className="text-gray-400">
              Up-to-the-minute data fetching for immediate situational
              awareness.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
