'use client'
import Link from "next/link";

export default function Menu() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="menu">
      <div className="left">
        <Link href="/">HOME</Link>
        <Link href="/achtergrond">H1</Link>
        <Link href="/het-financieringslandschap">H2</Link>
        <Link href="/potentiele-focusgebieden">H3</Link>
        <Link href="/aanbevelingen">H4</Link>
      </div>
      <div className="right" onClick={handlePrint}>
        Print
      </div>
    </div>
  );
}