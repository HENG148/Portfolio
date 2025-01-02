'use client'

import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export default function Header() {
  const handleScrollToStart = (id: string): void => {
    const element = document.getElementById(id);

    if (element) {
      const padding = 130;
      window.scrollTo({
        top: element.offsetTop - padding,
        behavior: 'smooth',
      })
    }
  }

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Project', label: 'Projects' },
    { id: 'Contacts', label: 'Contact' },
  ]

  return (
    <header className="main-header mt-7 ml-9 flex gap-[25rem] items-baseline">
      <Link href='/'>
        <h1 className="text-[30px] font-bold font-main">
          Port<span className="text-title">folio</span>
        </h1>
      </Link>

      <nav className="main-nav-bar nav-bar font-medium max-w-screen-md">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => handleScrollToStart(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      <a href="https://t.me/HenGApril" className="telegram" target="_blank" rel="noopener">
        <FaTelegramPlane
          style={{
            fontSize: '1.8rem',
            marginLeft: '6rem',
          }}
        />
      </a>
    </header>
  )
}