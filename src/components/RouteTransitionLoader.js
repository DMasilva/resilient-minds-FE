import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTransitionLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);
    
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animate-pulse">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

export default RouteTransitionLoader;

