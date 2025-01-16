import { useState, useEffect } from 'react';
import placeholder from './assets/preview.png'; // Replace with your actual transparent image path

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Loading animation duration

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {loading ? (
          <div className="flex items-center justify-center animate-show-hide">
            <img
              src={placeholder}
              alt="Loader"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          null // The content will be shown after the loading time.
        )}
      </div>
    </div>
  );
}
