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
            <a key={`link${i}`} href={`/${item.lang}/${item.uid != 'home' ? item.uid : '' }`} className={isActive(`/${item.lang}/${item.uid}`) ? 'active' : ''}>{item.text}</a>
          )
        })}
      </div>
      
      <div className="right">
        <a target='_blank' href={`/${menu.links2[0].lang}/Print.pdf`}>Download</a>
      </div>

    </div>
  );
}
