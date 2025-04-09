'use client';

import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="menu">
      <div className="left">
        <a href="/" className={isActive('/') ? 'active' : ''}>HOME</a>
        <a href="/achtergrond" className={isActive('/achtergrond') ? 'active' : ''}>H1</a>
        <a href="/het-financieringslandschap" className={isActive('/het-financieringslandschap') ? 'active' : ''}>H2</a>
        <a href="/potentiele-focusgebieden" className={isActive('/potentiele-focusgebieden') ? 'active' : ''}>H3</a>
        <a href="/aanbevelingen" className={isActive('/aanbevelingen') ? 'active' : ''}>H4</a>
      </div>
      <div className="right">
        <a href="#">Download</a>
      </div>
    </div>
  );
}
