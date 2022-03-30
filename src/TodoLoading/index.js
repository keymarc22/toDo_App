import React from 'react';
import { SkeletonLoader } from '../SkeletonLoader';

function TodoLoading() {
  return (
    <div>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  )
}

export { TodoLoading };