'use client';

import { usePathname } from 'next/navigation';

export default function LeftMenu({menu}) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;


  return (
    <div className="left-menu">
      <div className='left'>
        {menu.links2.map((item, i) => {
          return(
            <a key={`link${i}`} href={`/${item.lang}/${item.uid != 'home' ? item.uid : '' }`} className={isActive(item.url) ? 'active' : ''}>{item.text}</a>
          )
        })}
      </div>
      
      <div className="right">
        <a href="#">Download</a>
      </div>

    </div>
  );
}
