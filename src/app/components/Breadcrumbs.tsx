import { Link } from 'react-router';
import { Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  /** Center the breadcrumbs (use in centered hero layouts) */
  center?: boolean;
}

export function Breadcrumbs({ items, variant = 'light', center = false }: BreadcrumbsProps) {
  const isDark = variant === 'dark';

  const linkCls = isDark
    ? 'hover:text-white transition-colors'
    : 'hover:text-goat-navy-dark transition-colors';

  const activeCls = isDark ? 'text-white/70' : 'text-goat-navy/70';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1 mb-6 ${center ? 'justify-center' : ''}`}
    >
      <ol
        className={`inline-flex items-center gap-1 text-[11px] tracking-wider ${
          isDark ? 'text-white/30' : 'text-goat-navy/35'
        }`}
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}
      >
        <li className="inline-flex items-center">
          <Link to="/" className={`inline-flex items-center gap-1 ${linkCls}`} aria-label="Home">
            <Home className="w-3 h-3" />
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="inline-flex items-center gap-1">
            <span className="opacity-40" aria-hidden="true">/</span>
            {item.href ? (
              <Link to={item.href} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <span className={activeCls}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
