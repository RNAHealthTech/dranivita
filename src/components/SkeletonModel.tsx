import React from 'react';

const SkeletonModel: React.FC = () => {
  return (
    <iframe 
      title="skeleton" 
      allowFullScreen
      allow="autoplay; fullscreen; xr-spatial-tracking" 
      xr-spatial-tracking 
      execution-while-out-of-viewport 
      execution-while-not-rendered 
      web-share 
      src="https://sketchfab.com/models/6db4f2130c544f628cb349f532d49b1b/embed"
      className="w-full h-full"
    />
  );
};

export default SkeletonModel;