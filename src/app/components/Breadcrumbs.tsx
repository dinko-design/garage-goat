import { Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-sm mb-4 ${
        isDark ? 'text-goat-ice/50' : 'text-goat-navy/50'
      }`}
    >
      <Link
        to="/"
        className={`flex items-center gap-1 transition-colors ${
          isDark ? 'hover:text-goat-ice' : 'hover:text-goat-navy-dark'
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="contents">
          <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-50" />
          {item.href ? (
            <Link
              to={item.href}
              className={`transition-colors ${
                isDark ? 'hover:text-goat-ice' : 'hover:text-goat-navy-dark'
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={isDark ? 'text-goat-ice/70' : 'text-goat-navy/70'}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}