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
        <a href="/achtergrond">H1</a>
        <a href="/het-financieringslandschap">H2</a>
        <a href="/potentiele-focusgebieden">H3</a>
        <a href="/aanbevelingen">H4</a>
      </div>
      <div className="right" onClick={handlePrint}>
        Print
      </div>
    </div>
  );
}