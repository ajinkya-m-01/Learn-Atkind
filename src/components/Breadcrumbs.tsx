import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <Link
              to={`/${pathSegments.slice(0, index + 1).join('/')}`}
              className={`capitalize ${
                index === pathSegments.length - 1
                  ? 'text-purple-600 font-medium'
                  : 'hover:text-purple-600 transition-colors'
              }`}
            >
              {segment.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;