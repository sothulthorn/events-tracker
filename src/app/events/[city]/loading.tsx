import SkeletonCard from '@/components/SkeletonCard';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-wrap justify-center max-w[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
