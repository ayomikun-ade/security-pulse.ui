import React from 'react';
import { NewsItem } from '../lib/api';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 mb-3 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
      <a href={news.link} target="_blank" rel="noopener noreferrer" className="group">
        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:underline mb-1">
          {news.title}
        </h4>
      </a>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{news.source}</span>
        <span>{news.date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
