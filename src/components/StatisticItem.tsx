
import React from 'react';

interface StatisticItemProps {
  value: string;
  label: string;
  showAvatars?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ value, label, showAvatars = false }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center">
        <span className="text-4xl md:text-5xl font-montserrat font-bold">{value}</span>
        
        {showAvatars && (
          <div className="flex -space-x-2 ml-3">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-1 max-w-sm">{label}</p>
    </div>
  );
};

export default StatisticItem;
