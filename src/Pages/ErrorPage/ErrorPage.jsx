import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        {/* Error Code / Visual */}
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest animate-bounce">
          404
        </h1>
        
        {/* Decorative Badge */}
        <div className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block mt-2">
          Page Not Found
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">
          Looking for something?
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Back to Home Link */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:-translate-y-0.5"
        >
          {/* Arrow Left Icon */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;