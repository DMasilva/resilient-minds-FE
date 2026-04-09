import React from 'react';

// Simple Spinner Loader
export const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
    xl: 'w-24 h-24 border-4'
  };

  const colors = {
    primary: 'border-primary-600',
    white: 'border-white',
    secondary: 'border-secondary-600'
  };

  return (
    <div className={`${sizes[size]} ${colors[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Full Page Loader
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-primary-200 rounded-full"></div>
          <div className="w-24 h-24 border-4 border-primary-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="mt-6 text-gray-600 font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
};

// Route Transition Loader
export const RouteLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animate-pulse">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

// Skeleton Loader for Cards
export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
      <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-6"></div>
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  );
};

// Skeleton Loader for Table Rows
export const SkeletonTableRow = () => {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-40"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-28"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
      </td>
    </tr>
  );
};

// Image Loader Component
export const ImageWithLoader = ({ src, alt, className, containerClassName = '' }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <div className={`relative ${containerClassName}`}>
      {loading && !error && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}></div>
      )}
      {error && (
        <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
          <span className="text-gray-500">Image failed to load</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
};

export default LoadingSpinner;

