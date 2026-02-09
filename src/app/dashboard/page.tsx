"use client";

import { useState } from "react";
import { useAdvisory } from "../../hooks/useAdvisory";
import VulnerabilityCard from "../../components/VulnerabilityCard";
import NewsCard from "../../components/NewsCard";

export default function Home() {
  const [days, setDays] = useState(4);
  const { data, isLoading, isError, error, refetch, isRefetching } =
    useAdvisory(days);
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-red-500">
        <h1 className="text-2xl font-bold mb-4">Error loading data</h1>
        <p>{error?.message}</p>
        <p className="mt-4 text-gray-600">
          Ensure the backend API is running at http://localhost:8000
        </p>
        <button
          onClick={() => refetch()}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Filter Logic
  const filteredVulns =
    data?.vulnerabilities.filter(
      (v) =>
        (priorityFilter === "All" || v.priority === priorityFilter) &&
        (v.vulnerabilityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.vendorProject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.cveID.toLowerCase().includes(searchTerm.toLowerCase())),
    ) || [];

  const filteredNews =
    data?.news.filter(
      (n) =>
        (priorityFilter === "All" || n.priority === priorityFilter) &&
        (n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          n.source.toLowerCase().includes(searchTerm.toLowerCase())),
    ) || [];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 font-sans">
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Security Pulse
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Daily Cybersecurity Advisory & Intelligence
            </p>
          </div>

          <div className="flex max-md:flex-col md:items-center gap-4 w-full md:w-auto">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="All">All Priorities</option>
              <option value="High">High Only</option>
              <option value="Medium">Medium Only</option>
              <option value="Low">Low Only</option>
            </select>

            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={1}>Last 24 Hours</option>
              <option value={3}>Last 3 Days</option>
              <option value={4}>Last 4 Days</option>
              <option value={7}>Last 7 Days</option>
              <option value={14}>Last 14 Days</option>
              <option value={30}>Last 30 Days</option>
            </select>

            <div className="relative grow md:grow-0">
              <input
                type="text"
                placeholder="Search CVEs, products..."
                className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <button
              onClick={() => refetch()}
              disabled={isRefetching}
              className={`p-2 rounded-lg w-fit bg-blue-600 text-white hover:bg-blue-700 transition-colors ${isRefetching ? "opacity-50 cursor-not-allowed" : ""}`}
              title="Refresh Data"
            >
              <svg
                className={`w-6 h-6 ${isRefetching ? "animate-spin" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-red-500 w-3 h-8 mr-3 rounded-sm"></span>
              CISA Known Exploited Vulnerabilities
            </div>
            <span className="text-sm font-normal text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {filteredVulns.length} Found
            </span>
          </h2>

          {filteredVulns.length > 0 ? (
            filteredVulns.map((vuln) => (
              <VulnerabilityCard key={vuln.cveID} vuln={vuln} />
            ))
          ) : (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center text-gray-500">
              {searchTerm
                ? "No vulnerabilities match your search."
                : `No new critical vulnerabilities added in the last ${days} days.`}
            </div>
          )}
        </div>

        {/* Right Column: News Feed */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-blue-500 w-3 h-8 mr-3 rounded-sm"></span>
              Latest Security News
            </div>
          </h2>

          <div className="space-y-4 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                <NewsCard key={index} news={item} />
              ))
            ) : (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center text-gray-500">
                {searchTerm
                  ? "No news matches your search."
                  : "No recent news found."}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
