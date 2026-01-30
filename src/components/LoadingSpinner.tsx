import { FaSpinner } from 'react-icons/fa';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({
  size = 'md',
  message,
  fullScreen = false
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <FaSpinner className={`${sizeClasses[size]} text-primary-600 animate-spin`} />
      {message && (
        <p className="text-secondary-600 font-medium">
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
