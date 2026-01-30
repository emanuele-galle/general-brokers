interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'image';
  count?: number;
}

const SkeletonLoader = ({ variant = 'text', count = 1 }: SkeletonLoaderProps) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-secondary-200 rounded w-3/4"></div>
            <div className="h-4 bg-secondary-200 rounded w-full"></div>
            <div className="h-4 bg-secondary-200 rounded w-5/6"></div>
          </div>
        );

      case 'card':
        return (
          <div className="animate-pulse bg-white rounded-xl shadow-lg p-6">
            <div className="w-14 h-14 bg-secondary-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-secondary-200 rounded w-2/3 mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-secondary-200 rounded w-full"></div>
              <div className="h-4 bg-secondary-200 rounded w-5/6"></div>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="animate-pulse bg-secondary-200 rounded-xl w-full h-64"></div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
