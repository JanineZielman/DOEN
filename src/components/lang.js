'use client';

import { usePathname } from 'next/navigation';

export default function Lang() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;


  return (
    <div className="lang-switch">
      <a href="/en-us" className={isActive('/en-us') ? 'active' : ''}>EN</a> / <a className={isActive('/nl-nl') ? 'active' : ''} href="/nl-nl">NL</a>
    </div>
  );
}
