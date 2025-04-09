'use client';

import { usePathname } from 'next/navigation';

export default function Menu({menu}) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="menu">
      <div className="left">
        {menu.links.map((item, i) => {
          return(
            <a key={`links${i}`} href={`/${item.lang}/${item.uid != 'home' ? item.uid : '' }`} className={isActive(`/${item.lang}/${item.uid}`) ? 'active' : ''}>{item.text}</a>
          )
        })}
      </div>
      <div className="right">
        <a target='_blank' href={menu.pdf.url}>Download</a>
      </div>
    </div>
  );
}
