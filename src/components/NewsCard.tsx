import React from "react";
import { NewsItem } from "../lib/api";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 border-red-200 bg-red-50";
      case "Medium":
        return "text-yellow-700 border-yellow-200 bg-yellow-50";
      case "Low":
        return "text-blue-600 border-blue-200 bg-blue-50";
      default:
        return "text-gray-600 border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 mb-3 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-1">
        <span
          className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${getPriorityColor(news.priority)}`}
        >
          {news.priority}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {news.date}
        </span>
      </div>
      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <h4 className="text-lg font-semibold max-md:line-clamp-2 text-blue-600 dark:text-blue-400 group-hover:underline mb-1">
          {news.title}
        </h4>
      </a>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{news.source}</span>
      </div>
    </div>
  );
};

export default NewsCard;
