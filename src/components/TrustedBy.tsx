
import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <div className="w-full pt-16 pb-8">
      <p className="text-sm text-gray-500 mb-6 text-center md:text-left">Trusted by</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Google</span>
        </div>
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Afterpay</span>
        </div>
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Asana</span>
        </div>
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Dropbox</span>
        </div>
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Spotify</span>
        </div>
        <div className="h-8 flex items-center opacity-50 grayscale">
          <span className="text-xl font-bold">Grammarly</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
