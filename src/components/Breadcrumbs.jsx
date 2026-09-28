import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items, className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />}
              <li>
                {isLast || !item.href ? (
                  <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-slate-700' : ''}>
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.href} className="hover:text-orange-600 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
