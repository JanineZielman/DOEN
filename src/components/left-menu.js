'use client';

import { usePathname } from 'next/navigation';

export default function LeftMenu() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;


  return (
    <div className="left-menu">
      <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
      <a href="/introductie" className={isActive('/introductie') ? 'active' : ''}>Introductie</a>
      <a href="/colofon" className={isActive('/colofon') ? 'active' : ''}>Colofon</a>
    </div>
  );
}
